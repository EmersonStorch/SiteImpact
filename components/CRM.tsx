
import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Tipos ─────────────────────────────────────────────────── */
type LeadStatus = 'novo' | 'contato' | 'proposta' | 'negociacao' | 'fechado' | 'perdido';

interface Lead {
  id: number;
  nome: string;
  empresa: string;
  valor: number;
  status: LeadStatus;
  vencimento: string; // ISO date string
  responsavel: string;
}

/* ─── Dados de exemplo ───────────────────────────────────────── */
const hoje = new Date();
const amanha = new Date(hoje); amanha.setDate(hoje.getDate() + 1);
const ontem = new Date(hoje); ontem.setDate(hoje.getDate() - 1);
const doisDias = new Date(hoje); doisDias.setDate(hoje.getDate() + 2);

const leadsIniciais: Lead[] = [
  { id: 1, nome: 'Carlos Mendes', empresa: 'Agência Nexus', valor: 4500, status: 'negociacao', vencimento: amanha.toISOString().split('T')[0], responsavel: 'Ana' },
  { id: 2, nome: 'Fernanda Lima', empresa: 'Studio Criativo', valor: 2800, status: 'proposta', vencimento: hoje.toISOString().split('T')[0], responsavel: 'João' },
  { id: 3, nome: 'Ricardo Souza', empresa: 'Mkt Digital RJ', valor: 7200, status: 'fechado', vencimento: ontem.toISOString().split('T')[0], responsavel: 'Ana' },
  { id: 4, nome: 'Patricia Costa', empresa: 'Inova Brands', valor: 3100, status: 'contato', vencimento: doisDias.toISOString().split('T')[0], responsavel: 'João' },
  { id: 5, nome: 'Bruno Alves', empresa: 'Performance Co.', valor: 5600, status: 'novo', vencimento: doisDias.toISOString().split('T')[0], responsavel: 'Ana' },
];

const META_MENSAL = 20000;

/* ─── Configurações de status ────────────────────────────────── */
const statusConfig: Record<LeadStatus, { label: string; color: string; bg: string }> = {
  novo:       { label: 'Novo',        color: 'text-blue-400',   bg: 'bg-blue-400/10 border-blue-400/20' },
  contato:    { label: 'Em Contato',  color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
  proposta:   { label: 'Proposta',    color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
  negociacao: { label: 'Negociação',  color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
  fechado:    { label: 'Fechado ✓',   color: 'text-emerald-400',bg: 'bg-emerald-400/10 border-emerald-400/20' },
  perdido:    { label: 'Perdido',     color: 'text-red-400',    bg: 'bg-red-400/10 border-red-400/20' },
};

/* ─── Gerador de som via Web Audio API ───────────────────────── */
function playSound(type: 'vencimento' | 'status' | 'meta') {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'vencimento') {
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.setValueAtTime(660, ctx.currentTime + 0.15);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'status') {
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'meta') {
      // Fanfarra de celebração
      const freqs = [523, 659, 784, 1047];
      freqs.forEach((f, i) => {
        const o2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        o2.connect(g2); g2.connect(ctx.destination);
        o2.frequency.value = f;
        g2.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.12);
        g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.25);
        o2.start(ctx.currentTime + i * 0.12);
        o2.stop(ctx.currentTime + i * 0.12 + 0.25);
      });
    }
  } catch (e) {
    // Silencia erros de contexto de áudio
  }
}

/* ─── Componente Principal ───────────────────────────────────── */
const CRM: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(leadsIniciais);
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [alertas, setAlertas] = useState<{ id: number; msg: string; tipo: 'vencimento' | 'status' | 'meta' }[]>([]);
  const [metaBatida, setMetaBatida] = useState(false);
  const [somAtivo, setSomAtivo] = useState(true);
  const alertaIdRef = useRef(0);
  const metaJaAlertada = useRef(false);

  /* Relógio em tempo real */
  useEffect(() => {
    const timer = setInterval(() => setHoraAtual(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* Verificação de vencimentos próximos */
  useEffect(() => {
    const verificarVencimentos = () => {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      leads.forEach(lead => {
        if (lead.status === 'fechado' || lead.status === 'perdido') return;
        const venc = new Date(lead.vencimento + 'T00:00:00');
        const diff = Math.ceil((venc.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
        if (diff <= 1 && diff >= 0) {
          const msg = diff === 0
            ? `⏰ Lead "${lead.nome}" vence HOJE!`
            : `⚠️ Lead "${lead.nome}" vence amanhã!`;
          adicionarAlerta(msg, 'vencimento');
        }
      });
    };
    verificarVencimentos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Verificação de meta */
  useEffect(() => {
    const totalFechado = leads.filter(l => l.status === 'fechado').reduce((s, l) => s + l.valor, 0);
    if (totalFechado >= META_MENSAL && !metaJaAlertada.current) {
      metaJaAlertada.current = true;
      setMetaBatida(true);
      adicionarAlerta('🏆 META MENSAL BATIDA! Parabéns à equipe!', 'meta');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads]);

  const adicionarAlerta = useCallback((msg: string, tipo: 'vencimento' | 'status' | 'meta') => {
    const id = ++alertaIdRef.current;
    setAlertas(prev => [...prev.slice(-4), { id, msg, tipo }]);
    if (somAtivo) playSound(tipo);
    setTimeout(() => setAlertas(prev => prev.filter(a => a.id !== id)), 6000);
  }, [somAtivo]);

  const mudarStatus = (leadId: number, novoStatus: LeadStatus) => {
    setLeads(prev => prev.map(l => {
      if (l.id !== leadId) return l;
      adicionarAlerta(`🔄 "${l.nome}" → ${statusConfig[novoStatus].label}`, 'status');
      return { ...l, status: novoStatus };
    }));
  };

  /* Métricas */
  const totalFechado = leads.filter(l => l.status === 'fechado').reduce((s, l) => s + l.valor, 0);
  const totalPipeline = leads.filter(l => !['fechado', 'perdido'].includes(l.status)).reduce((s, l) => s + l.valor, 0);
  const progressoMeta = Math.min((totalFechado / META_MENSAL) * 100, 100);

  /* Formatação de hora */
  const formatarHora = (d: Date) =>
    d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formatarData = (d: Date) =>
    d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });

  /* Cor do vencimento */
  const corVencimento = (venc: string) => {
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    const v = new Date(venc + 'T00:00:00');
    const diff = Math.ceil((v.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    if (diff < 0) return 'text-red-400';
    if (diff === 0) return 'text-red-400 font-bold animate-pulse';
    if (diff === 1) return 'text-yellow-400';
    return 'text-brand-slate';
  };

  return (
    <section id="crm" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/3 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Alertas flutuantes */}
      <div className="fixed top-24 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
        {alertas.map(a => (
          <div
            key={a.id}
            className={`px-5 py-3 rounded-2xl text-sm font-bold shadow-2xl backdrop-blur-md border animate-fade-in pointer-events-auto
              ${a.tipo === 'meta' ? 'bg-brand-emerald/20 border-brand-emerald/40 text-brand-emerald' :
                a.tipo === 'vencimento' ? 'bg-red-500/20 border-red-500/40 text-red-300' :
                'bg-brand-accent/20 border-brand-accent/40 text-brand-accent'}`}
          >
            {a.msg}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] block mb-3">Painel de Controle</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">CRM ao Vivo</h2>
          </div>

          {/* Relógio */}
          <div className="glass-card px-8 py-5 rounded-2xl border border-white/8 text-right">
            <div className="text-4xl font-black text-white tracking-tight font-mono">
              {formatarHora(horaAtual)}
            </div>
            <div className="text-xs text-brand-slate capitalize mt-1 font-medium">
              {formatarData(horaAtual)}
            </div>
            <button
              onClick={() => setSomAtivo(s => !s)}
              className={`mt-2 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border transition-all ${
                somAtivo
                  ? 'border-brand-accent/40 text-brand-accent bg-brand-accent/10'
                  : 'border-white/10 text-brand-slate bg-white/5'
              }`}
            >
              {somAtivo ? '🔔 Alertas ON' : '🔕 Alertas OFF'}
            </button>
          </div>
        </div>

        {/* Métricas resumidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total de Leads', value: leads.length, icon: '👥', color: 'text-white' },
            { label: 'Em Pipeline', value: `R$ ${totalPipeline.toLocaleString('pt-BR')}`, icon: '📊', color: 'text-brand-accent' },
            { label: 'Fechados', value: `R$ ${totalFechado.toLocaleString('pt-BR')}`, icon: '✅', color: 'text-brand-emerald' },
            { label: 'Meta Mensal', value: `${progressoMeta.toFixed(0)}%`, icon: metaBatida ? '🏆' : '🎯', color: metaBatida ? 'text-brand-emerald' : 'text-yellow-400' },
          ].map(m => (
            <div key={m.label} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className={`text-2xl font-black ${m.color}`}>{m.value}</div>
              <div className="text-xs text-brand-slate font-bold uppercase tracking-widest mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Barra de progresso da meta */}
        <div className="glass-card p-6 rounded-2xl border border-white/5 mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-bold text-white">Progresso da Meta Mensal</span>
            <span className="text-sm font-black text-brand-accent">
              R$ {totalFechado.toLocaleString('pt-BR')} / R$ {META_MENSAL.toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${metaBatida ? 'bg-brand-emerald' : 'bg-brand-accent'}`}
              style={{ width: `${progressoMeta}%` }}
            />
          </div>
          {metaBatida && (
            <p className="text-brand-emerald text-xs font-black uppercase tracking-widest mt-2 animate-pulse">
              🏆 Meta batida! Excelente trabalho!
            </p>
          )}
        </div>

        {/* Tabela de Leads */}
        <div className="glass-card rounded-[2rem] border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-black text-white text-lg">Pipeline de Leads</h3>
            <button
              onClick={() => adicionarAlerta('🔔 Teste de alerta sonoro ativo!', 'status')}
              className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent hover:bg-brand-accent/20 transition-all"
            >
              Testar Alerta
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  {['Lead', 'Empresa', 'Valor', 'Status', 'Vencimento', 'Responsável'].map(h => (
                    <th key={h} className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest text-brand-slate">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr
                    key={lead.id}
                    className={`border-b border-white/3 hover:bg-white/[0.02] transition-all ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                  >
                    <td className="px-6 py-4 font-bold text-white text-sm">{lead.nome}</td>
                    <td className="px-6 py-4 text-brand-slate text-sm">{lead.empresa}</td>
                    <td className="px-6 py-4 text-brand-accent font-black text-sm">
                      R$ {lead.valor.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={e => mudarStatus(lead.id, e.target.value as LeadStatus)}
                        className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border cursor-pointer bg-transparent transition-all ${statusConfig[lead.status].bg} ${statusConfig[lead.status].color}`}
                      >
                        {(Object.keys(statusConfig) as LeadStatus[]).map(s => (
                          <option key={s} value={s} className="bg-[#0A0A0B] text-white">
                            {statusConfig[s].label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium ${corVencimento(lead.vencimento)}`}>
                      {new Date(lead.vencimento + 'T00:00:00').toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-brand-slate text-sm">{lead.responsavel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legenda de alertas */}
        <div className="mt-8 flex flex-wrap gap-6 text-xs text-brand-slate">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block"></span> Vencimento hoje/amanhã</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-accent inline-block"></span> Mudança de status</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-emerald inline-block"></span> Meta batida</span>
        </div>
      </div>
    </section>
  );
};

export default CRM;
