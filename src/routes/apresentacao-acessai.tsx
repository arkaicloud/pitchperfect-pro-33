import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Calendar, Users, ScanLine, Smartphone, ClipboardCheck, KanbanSquare, IdCard,
  Wallet, FileBarChart, LineChart, Star, ShieldCheck, LifeBuoy, Maximize,
  Minimize, Printer, ChevronLeft, ChevronRight, LayoutGrid, RotateCcw,
  AlertTriangle, Puzzle, Sparkles, Globe2, WifiOff, Lock, Clock, TrendingUp,
  CheckCircle2, X,
} from "lucide-react";

export const Route = createFileRoute("/apresentacao-acessai")({
  head: () => ({
    meta: [
      { title: "Acessaí — Apresentação Comercial" },
      { name: "description", content: "Gestão inteligente para eventos que não podem falhar. Plataforma modular para inscrições, onboarding, check-in, CRM e resultado financeiro." },
      { property: "og:title", content: "Acessaí — Apresentação Comercial" },
      { property: "og:description", content: "Do planejamento ao relatório final, toda a operação de eventos em um único ambiente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PresentationPage,
});

function SlideShell({ index, total, eyebrow, title, children }: { index: number; total: number; eyebrow?: string; title?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="acessai-slide relative flex h-full w-full flex-col px-10 py-10 md:px-16 md:py-14 lg:px-24 lg:py-16">
      <div className="acessai-no-print mb-6 flex items-center justify-between text-xs tracking-[0.24em] text-[color:var(--acessai-muted)] uppercase">
        <span className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-[color:var(--acessai-cyan)]" />Acessaí</span>
        <span>{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>
      <div className="acessai-slide-enter flex flex-1 flex-col">
        {eyebrow && <div className="mb-3 text-xs font-semibold tracking-[0.28em] text-[color:var(--acessai-cyan)] uppercase">{eyebrow}</div>}
        {title && <h2 className="mb-8 max-w-5xl text-3xl leading-tight font-semibold text-white md:text-4xl lg:text-5xl">{title}</h2>}
        <div className="flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}

function Stat({ value, label, hint }: { value: React.ReactNode; label: string; hint?: string }) {
  return (
    <div className="acessai-card p-6 md:p-7">
      <div className="acessai-gradient-text text-4xl leading-none font-bold md:text-5xl">{value}</div>
      <div className="mt-3 text-sm font-medium text-white/90 md:text-base">{label}</div>
      {hint && <div className="mt-1 text-xs text-[color:var(--acessai-muted)]">{hint}</div>}
    </div>
  );
}

function ModuleCard({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="acessai-card group flex items-start gap-4 p-5 transition-transform hover:-translate-y-0.5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--acessai-cyan)]/25 to-[color:var(--acessai-purple)]/25 text-[color:var(--acessai-cyan)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0"><div className="font-semibold text-white">{title}</div></div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{children}</span>;
}

function Slide01() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden px-10 py-10 md:px-16 lg:px-24">
      <div className="acessai-no-print absolute inset-0 -z-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[color:var(--acessai-blue)]/25 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[color:var(--acessai-purple)]/25 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[color:var(--acessai-cyan)]/20 blur-3xl" />
      </div>
      <div className="acessai-slide-enter relative z-10 max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.28em] text-white/80 uppercase">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--acessai-cyan)]" />Apresentação comercial
        </div>
        <h1 className="text-6xl leading-[0.95] font-bold tracking-tight text-white md:text-7xl lg:text-8xl"><span className="acessai-gradient-text">Acessaí</span></h1>
        <p className="mt-6 max-w-2xl text-2xl leading-snug text-white/90 md:text-3xl">Gestão inteligente para eventos que não podem falhar.</p>
        <p className="mt-4 max-w-2xl text-base text-[color:var(--acessai-muted)] md:text-lg">Do planejamento ao relatório final, toda a operação em um único ambiente.</p>
        <div className="mt-10 flex flex-wrap gap-2">
          <Chip>Inscrições</Chip><Chip>Onboarding</Chip><Chip>Check-in</Chip><Chip>CRM</Chip><Chip>Financeiro</Chip><Chip>Analytics</Chip>
        </div>
      </div>
    </div>
  );
}

function Slide02({ i, t }: { i: number; t: number }) {
  const items = ["Planilhas desatualizadas","Formulários espalhados","Informações em grupos de WhatsApp","Filas no credenciamento","Fichas em papel","Falta de histórico","Relatórios demorados","Dificuldade para acompanhar a operação"];
  return (
    <SlideShell index={i} total={t} eyebrow="O desafio" title="Gerenciar eventos com ferramentas desconectadas gera riscos">
      <div className="grid flex-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400/80" /><span className="text-sm text-white/85">{it}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 border-l-2 border-[color:var(--acessai-cyan)] pl-5 text-lg text-white/90 md:text-xl">Quanto maior o evento, maior o risco de perder controle.</div>
    </SlideShell>
  );
}

function Slide03({ i, t }: { i: number; t: number }) {
  const impacts = [
    { icon: Clock, title: "Perda de tempo", desc: "Horas gastas em tarefas repetitivas e conferências manuais." },
    { icon: RotateCcw, title: "Retrabalho da equipe", desc: "Mesmos dados recadastrados em múltiplas planilhas e formulários." },
    { icon: AlertTriangle, title: "Experiência ruim", desc: "Filas, atrasos e informações desencontradas afetam o participante." },
    { icon: LineChart, title: "Falta de dados", desc: "Sem indicadores confiáveis, decisões viram achismo." },
  ];
  return (
    <SlideShell index={i} total={t} eyebrow="O impacto" title="O problema não é apenas operacional">
      <div className="grid flex-1 gap-4 md:grid-cols-2">
        {impacts.map((im) => (
          <div key={im.title} className="acessai-card p-6">
            <im.icon className="mb-4 h-6 w-6 text-[color:var(--acessai-cyan)]" />
            <div className="text-lg font-semibold text-white">{im.title}</div>
            <div className="mt-2 text-sm text-[color:var(--acessai-muted)]">{im.desc}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-white/80 md:text-lg">Uma equipe presa a controles manuais não consegue focar no que realmente importa: a experiência do evento.</p>
    </SlideShell>
  );
}

function Slide04({ i, t }: { i: number; t: number }) {
  const orbit = ["Eventos","Participantes","Onboarding","Check-in","CRM","Financeiro","Relatórios","Analytics"];
  return (
    <SlideShell index={i} total={t} eyebrow="A solução" title="Uma única plataforma para toda a jornada do evento">
      <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg text-white/85 md:text-xl">O Acessaí centraliza inscrições, participantes, onboarding, equipe, check-in, CRM, financeiro, relatórios e indicadores em um único ambiente.</p>
          <p className="mt-6 text-base text-[color:var(--acessai-cyan)] md:text-lg">Antes, durante e depois do evento: tudo conectado.</p>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <div className="absolute inset-14 rounded-full border border-white/5" />
          <div className="acessai-glow absolute top-1/2 left-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--acessai-cyan)] via-[color:var(--acessai-blue)] to-[color:var(--acessai-purple)] font-bold text-white">Acessaí</div>
          {orbit.map((label, idx) => {
            const angle = (idx / orbit.length) * Math.PI * 2 - Math.PI / 2;
            const r = 44;
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            return (
              <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur" style={{ left: `${x}%`, top: `${y}%` }}>{label}</div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide05({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="Prova real" title="Uma plataforma validada em operações reais">
      <div className="grid flex-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Stat value="9" label="Edições concluídas" />
        <Stat value="5" label="Países atendidos" />
        <Stat value="+1.220" label="Participantes cadastrados" hint="Total sujeito a validação" />
        <Stat value="4.782" label="Check-ins processados" />
        <Stat value="32" label="Períodos gerenciados" />
        <Stat value="17" label="Usuários ativos" />
        <Stat value={<span className="text-2xl md:text-3xl">Out/2025</span>} label="Em operação desde" />
        <Stat value="24/7" label="Disponibilidade da plataforma" />
      </div>
      <p className="mt-8 text-white/80 md:text-lg">De Campinas à Europa, o Acessaí acompanha a operação onde ela acontece.</p>
    </SlideShell>
  );
}

function Slide06({ i, t }: { i: number; t: number }) {
  const cities = [
    { name: "Campinas", country: "Brasil" },{ name: "Alphaville", country: "Brasil" },
    { name: "Bruxelas", country: "Bélgica" },{ name: "Lausanne", country: "Suíça" },
    { name: "Paris", country: "França" },{ name: "Londres", country: "Inglaterra" },
  ];
  return (
    <SlideShell index={i} total={t} eyebrow="Presença internacional" title="Preparado para eventos em diferentes cidades e países">
      <div className="grid flex-1 gap-8 lg:grid-cols-2">
        <div className="acessai-card relative overflow-hidden p-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-[color:var(--acessai-muted)]"><Globe2 className="h-4 w-4 text-[color:var(--acessai-cyan)]" />Rota das edições</div>
          <svg viewBox="0 0 400 260" className="h-56 w-full">
            <defs><linearGradient id="line" x1="0" x2="1"><stop offset="0%" stopColor="oklch(0.82 0.14 210)" /><stop offset="100%" stopColor="oklch(0.66 0.2 300)" /></linearGradient></defs>
            <path d="M60,190 C130,170 160,150 200,120 S 300,80 350,60" stroke="url(#line)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            {[{x:60,y:190,label:"Campinas"},{x:95,y:180,label:"Alphaville"},{x:200,y:120,label:"Bruxelas"},{x:240,y:105,label:"Lausanne"},{x:285,y:85,label:"Paris"},{x:350,y:60,label:"Londres"}].map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="5" fill="oklch(0.82 0.14 210)" />
                <circle cx={p.x} cy={p.y} r="10" fill="oklch(0.82 0.14 210 / 25%)" />
                <text x={p.x + 10} y={p.y + 4} fill="white" fontSize="10">{p.label}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {cities.map((c) => (
            <div key={c.name} className="acessai-card p-4">
              <div className="text-base font-semibold text-white">{c.name}</div>
              <div className="text-xs text-[color:var(--acessai-muted)]">{c.country}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide07({ i, t }: { i: number; t: number }) {
  const modules = [
    { icon: Calendar, title: "Gestão de Eventos" },{ icon: Users, title: "Participantes" },
    { icon: ScanLine, title: "Check-in Digital" },{ icon: Smartphone, title: "App Mobile PWA" },
    { icon: ClipboardCheck, title: "Onboarding" },{ icon: KanbanSquare, title: "CRM Kanban" },
    { icon: IdCard, title: "Crachás e Impressão" },{ icon: Wallet, title: "Financeiro e DRE" },
    { icon: FileBarChart, title: "Relatórios" },{ icon: LineChart, title: "Analytics e Dashboard" },
    { icon: Star, title: "Pesquisa de Satisfação" },{ icon: ShieldCheck, title: "Usuários e Permissões" },
    { icon: LifeBuoy, title: "Central de Ajuda" },
  ];
  return (
    <SlideShell index={i} total={t} eyebrow="Ecossistema" title="13 módulos integrados em uma única plataforma">
      <div className="grid flex-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((m) => <ModuleCard key={m.title} icon={m.icon} title={m.title} />)}
      </div>
      <p className="mt-6 text-white/80">Cada módulo resolve uma etapa. Juntos, eles transformam toda a operação.</p>
    </SlideShell>
  );
}

function Slide08({ i, t }: { i: number; t: number }) {
  const steps = ["Cadastro ou importação","Onboarding","Validação da equipe","Emissão do crachá","Check-in","Participação nos períodos","Pesquisa de satisfação","Relatórios e histórico"];
  return (
    <SlideShell index={i} total={t} eyebrow="Jornada" title="Da inscrição ao pós-evento">
      <div className="relative flex-1">
        <div className="absolute top-9 right-4 left-4 h-px bg-gradient-to-r from-[color:var(--acessai-cyan)]/50 via-[color:var(--acessai-blue)]/50 to-[color:var(--acessai-purple)]/50" />
        <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {steps.map((s, idx) => (
            <div key={s} className="flex flex-col items-center text-center">
              <div className="acessai-glow grid h-[72px] w-[72px] place-items-center rounded-full border border-white/10 bg-[color:var(--acessai-surface)] text-lg font-semibold text-white">{idx + 1}</div>
              <div className="mt-3 text-xs text-white/85 md:text-sm">{s}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 text-white/80 md:text-lg">Uma experiência organizada começa antes mesmo do participante chegar.</p>
    </SlideShell>
  );
}

function Slide09({ i, t }: { i: number; t: number }) {
  const items = ["Criação de eventos","Datas e locais","Capacidade","Imagem de capa","Múltiplos períodos","Status da edição","Onboarding obrigatório ou opcional","Histórico de eventos"];
  return (
    <SlideShell index={i} total={t} eyebrow="Módulo · Eventos" title="Cada nova edição pronta para operar em poucos minutos">
      <div className="grid flex-1 gap-8 lg:grid-cols-2">
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2 text-white/85"><CheckCircle2 className="h-4 w-4 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{it}</span></li>
          ))}
        </ul>
        <div className="acessai-card acessai-glow p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-white/50">acessai.app / eventos</span>
          </div>
          <div className="rounded-lg bg-[color:var(--acessai-bg)] p-4">
            <div className="mb-3 text-sm font-semibold text-white">Próximas edições</div>
            {["SSS 47 · Alphaville","SSS 48 · Bruxelas","Imersão Lausanne"].map((row, idx) => (
              <div key={row} className="mb-2 flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] p-3">
                <div><div className="text-sm text-white">{row}</div><div className="text-xs text-white/50">3 períodos · onboarding ativo</div></div>
                <span className="rounded-full bg-[color:var(--acessai-cyan)]/15 px-2 py-0.5 text-[10px] text-[color:var(--acessai-cyan)]">{idx === 0 ? "Em curso" : "Agendado"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 text-white/80">Padronização e reutilização da estrutura em todas as novas edições.</p>
    </SlideShell>
  );
}

function Slide10({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="Módulo · Participantes" title="Centenas de participantes cadastrados em minutos">
      <div className="grid flex-1 gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          {["Importação via Excel","Mapeamento inteligente de colunas","Validação antes da importação","Relatório de erros","Mais de 30 campos de cadastro","Categorias personalizadas","Histórico individual","Suporte para mais de 10 mil registros"].map((it) => (
            <div key={it} className="flex items-center gap-2 text-white/85"><CheckCircle2 className="h-4 w-4 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{it}</span></div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="acessai-card p-5"><div className="mb-2 text-xs tracking-widest text-white/50 uppercase">Antes</div><div className="text-white/90">Cadastro manual e planilhas soltas</div></div>
          <div className="acessai-card acessai-glow p-5"><div className="mb-2 text-xs tracking-widest text-[color:var(--acessai-cyan)] uppercase">Com o Acessaí</div><div className="text-white/90">Importação, validação e histórico centralizado</div></div>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide11({ i, t }: { i: number; t: number }) {
  const steps = ["Dados pessoais","Endereço","Informações financeiras","Dados de saúde","Informações especiais","Consentimento","Assinatura digital"];
  const highlights = ["Progresso salvo","Validação de CPF","Assinatura digital","Aprovação ou reprovação","Bloqueio do check-in quando necessário","Dados sensíveis com criptografia","Rastreabilidade do processo"];
  return (
    <SlideShell index={i} total={t} eyebrow="Módulo · Onboarding" title="Informações coletadas antes do evento">
      <div className="grid flex-1 gap-6 lg:grid-cols-2">
        <div className="min-h-0">
          <div className="mb-2 text-xs text-[color:var(--acessai-muted)]">7 etapas</div>
          <ol className="space-y-1.5">
            {steps.map((s, idx) => (
              <li key={s} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[color:var(--acessai-cyan)]/15 text-xs font-semibold text-[color:var(--acessai-cyan)]">{idx + 1}</span>
                <span className="text-sm text-white/90">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="min-h-0">
          <div className="mb-2 text-xs text-[color:var(--acessai-muted)]">Destaques</div>
          <div className="grid gap-1.5">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-white/85"><ShieldCheck className="h-4 w-4 shrink-0 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{h}</span></div>
            ))}
          </div>
          <p className="mt-4 text-white/80 md:text-base">Menos papel. Mais segurança, controle e rastreabilidade.</p>
          <p className="mt-1 text-xs text-[color:var(--acessai-muted)]">Maior rastreabilidade documental e apoio à conformidade da operação.</p>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide12({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="Módulo · Check-in" title="Entrada rápida, organizada e sem duplicidade">
      <div className="grid flex-1 gap-6 lg:grid-cols-3">
        <div className="space-y-2 lg:col-span-2">
          {["Busca por nome ou e-mail","Scanner de QR Code","Check-in por período","Confirmação visual","Contadores em tempo real","Prevenção de duplicidades","Histórico de presença","Bloqueio automático por pendência"].map((it) => (
            <div key={it} className="flex items-center gap-2 text-white/85"><CheckCircle2 className="h-4 w-4 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{it}</span></div>
          ))}
        </div>
        <div className="space-y-3">
          <Stat value="4.782" label="Check-ins já processados" />
          <div className="acessai-card p-5">
            <div className="mb-1 text-xs tracking-widest text-[color:var(--acessai-cyan)] uppercase">Caso real · Edição SSS 47</div>
            <div className="text-2xl font-bold text-white">290 participantes</div>
            <div className="text-sm text-white/85">≈ 1.300 check-ins</div>
            <div className="text-xs text-[color:var(--acessai-muted)]">Operação conduzida por equipe reduzida</div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-white/80 md:text-lg">Mais fluidez na entrada. Mais controle durante o evento.</p>
    </SlideShell>
  );
}

function Slide13({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="App Mobile · PWA" title="O check-in continua mesmo quando a internet falha">
      <div className="grid flex-1 items-center gap-8 lg:grid-cols-2">
        <div className="space-y-2">
          {["Acesso pelo navegador","Compatível com iOS e Android","Pode ser adicionado à tela inicial","Scanner pela câmera","Funcionamento offline","Sincronização automática","Indicador de conexão","Confirmação visual e sonora"].map((it) => (
            <div key={it} className="flex items-center gap-2 text-white/85"><CheckCircle2 className="h-4 w-4 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{it}</span></div>
          ))}
          <p className="mt-4 flex items-center gap-2 text-white md:text-lg"><WifiOff className="h-5 w-5 text-[color:var(--acessai-cyan)]" />A operação não pode parar por causa do Wi-Fi.</p>
        </div>
        <div className="mx-auto w-full max-w-[280px]">
          <div className="acessai-glow rounded-[2.2rem] border-4 border-white/10 bg-[color:var(--acessai-bg)] p-3">
            <div className="rounded-[1.6rem] bg-gradient-to-br from-[color:var(--acessai-blue)]/25 to-[color:var(--acessai-purple)]/25 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-white/70"><span>Acessaí</span><span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">Online</span></div>
              <div className="grid aspect-square place-items-center rounded-2xl border border-dashed border-white/25"><ScanLine className="h-16 w-16 text-[color:var(--acessai-cyan)]" /></div>
              <div className="mt-4 rounded-xl bg-white/5 p-3 text-xs text-white/80"><div className="font-semibold text-white">Maria Silva</div><div className="text-white/60">Período 2 · 14:20</div></div>
              <button className="mt-3 w-full rounded-xl bg-[color:var(--acessai-cyan)] py-2.5 text-sm font-semibold text-[color:var(--acessai-bg)]">Confirmar check-in</button>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide14({ i, t }: { i: number; t: number }) {
  const cols = ["Novo","Em contato","Qualificado","Fechado"];
  return (
    <SlideShell index={i} total={t} eyebrow="Módulo · CRM" title="Do participante ao relacionamento contínuo">
      <div className="grid flex-1 gap-8 lg:grid-cols-2">
        <div className="space-y-2">
          {["Kanban visual","Etapas personalizáveis","Drag-and-drop","Histórico de contatos","Follow-ups e tarefas","Checklists","Card automático","Webhooks"].map((it) => (
            <div key={it} className="flex items-center gap-2 text-white/85"><CheckCircle2 className="h-4 w-4 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{it}</span></div>
          ))}
          <p className="mt-4 text-white/80 md:text-lg">O evento termina. O relacionamento continua.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {cols.map((c, idx) => (
            <div key={c} className="acessai-card p-3">
              <div className="mb-2 text-xs tracking-widest text-white/60 uppercase">{c}</div>
              {Array.from({ length: 3 - (idx % 2) }).map((_, k) => (
                <div key={k} className="mb-2 rounded-lg border border-white/10 bg-white/[0.04] p-2 text-xs text-white/85">
                  <div className="font-medium text-white">Lead #{idx * 10 + k + 1}</div><div className="text-white/60">Follow-up</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

function Slide15({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="Módulo · Financeiro & DRE" title="Resultado financeiro de cada evento em um único lugar">
      <div className="grid flex-1 gap-6 lg:grid-cols-2">
        <div className="acessai-card p-6">
          <div className="space-y-3 font-mono text-sm text-white/85">
            <div className="flex justify-between border-b border-white/10 pb-2"><span>Receitas</span><span className="text-emerald-300">+</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span>(−) Despesas</span><span className="text-red-300">−</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span>(−) Custos de Staff</span><span className="text-red-300">−</span></div>
            <div className="flex justify-between pt-2 text-base font-semibold text-white"><span>= Resultado Líquido</span><span className="acessai-gradient-text">R$</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Receitas","Despesas","Patrocinadores","Custos de Staff","Categorias","Múltiplas moedas","Exportação em PDF","DRE por edição"].map((it) => (
            <div key={it} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-white/85">{it}</div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-white/80 md:text-lg">Menos planilhas financeiras. Mais clareza sobre o resultado de cada edição.</p>
    </SlideShell>
  );
}

function Slide16({ i, t }: { i: number; t: number }) {
  const kpis = [{ label: "Total participantes", value: "1.223" },{ label: "Total check-ins", value: "4.782" },{ label: "Eventos ativos", value: "3" },{ label: "Taxa de presença", value: "94%" }];
  return (
    <SlideShell index={i} total={t} eyebrow="Dashboard & Analytics" title="Decisões baseadas em dados, não em achismos">
      <div className="grid flex-1 gap-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{kpis.map((k) => <Stat key={k.label} value={k.value} label={k.label} />)}</div>
        <div className="acessai-card grid gap-4 p-6 md:grid-cols-2">
          <div>
            <div className="mb-3 text-sm text-[color:var(--acessai-muted)]">Check-ins por hora</div>
            <div className="flex h-32 items-end gap-1.5">
              {[20,40,55,80,95,70,50,35,25,30,45,60].map((h, idx) => (
                <div key={idx} className="flex-1 rounded-t bg-gradient-to-t from-[color:var(--acessai-blue)] to-[color:var(--acessai-cyan)]" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm text-[color:var(--acessai-muted)]">Status onboarding</div>
            <div className="space-y-2">
              {[{ l: "Aprovado", v: 72, c: "bg-emerald-400" },{ l: "Pendente", v: 21, c: "bg-yellow-300" },{ l: "Reprovado", v: 7, c: "bg-red-400" }].map((r) => (
                <div key={r.l}>
                  <div className="mb-1 flex justify-between text-xs text-white/80"><span>{r.l}</span><span>{r.v}%</span></div>
                  <div className="h-2 rounded-full bg-white/10"><div className={`${r.c} h-2 rounded-full`} style={{ width: `${r.v}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-white/80">A gestão acompanha a operação em tempo real, de qualquer lugar.</p>
    </SlideShell>
  );
}

function Slide17({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="Relatórios" title="O relatório fica pronto quando o evento termina">
      <div className="grid flex-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {["Excel de participantes","Check-ins por período","Percentual de presença","PDF completo do evento","Lista de participantes","Filtros antes da exportação","Download pelo navegador","Histórico entre edições","Relatórios disponíveis após o processamento"].map((it) => (
          <div key={it} className="acessai-card p-4 text-sm text-white/85"><FileBarChart className="mb-2 h-5 w-5 text-[color:var(--acessai-cyan)]" />{it}</div>
        ))}
      </div>
      <p className="mt-6 text-white/80 md:text-lg">O que antes levava horas pode ser consolidado em segundos.</p>
    </SlideShell>
  );
}

function Slide18({ i, t }: { i: number; t: number }) {
  const roles = [{ r: "SUPER_ADMIN", d: "Acesso total à plataforma" },{ r: "GERENTE", d: "Gestão de eventos e equipes" },{ r: "COMERCIAL", d: "Participantes, CRM e vendas" },{ r: "STAFF", d: "Operação de check-in e apoio" }];
  return (
    <SlideShell index={i} total={t} eyebrow="Segurança" title="Cada pessoa acessa apenas o que precisa">
      <div className="grid flex-1 gap-6 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {roles.map((r) => (
            <div key={r.r} className="acessai-card p-5"><Lock className="mb-3 h-5 w-5 text-[color:var(--acessai-cyan)]" /><div className="font-mono text-sm text-white">{r.r}</div><div className="mt-1 text-sm text-[color:var(--acessai-muted)]">{r.d}</div></div>
          ))}
        </div>
        <div className="space-y-2">
          {["Permissões por módulo","Navegação personalizada","Controle de ações","Sessão protegida","Autenticação","Isolamento de dados","Registro de ações críticas"].map((it) => (
            <div key={it} className="flex items-center gap-2 text-white/85"><ShieldCheck className="h-4 w-4 text-[color:var(--acessai-cyan)]" /><span className="text-sm">{it}</span></div>
          ))}
          <p className="mt-4 text-white/80 md:text-lg">Mais controle para a gestão. Menos risco para a operação.</p>
        </div>
      </div>
    </SlideShell>
  );
}

function Slide19({ i, t }: { i: number; t: number }) {
  const diffs = ["Desenvolvido para uma operação real","Check-in offline","Controle por múltiplos períodos","Onboarding integrado","Relatórios automáticos","Histórico entre edições","CRM conectado aos participantes","Financeiro e DRE","Plataforma modular","Possibilidade de personalização","Operação internacional","Base própria de dados"];
  return (
    <SlideShell index={i} total={t} eyebrow="Diferenciais" title="Muito além de um sistema de check-in">
      <div className="grid flex-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {diffs.map((d) => (
          <div key={d} className="acessai-card flex items-start gap-3 p-4"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--acessai-cyan)]" /><span className="text-sm text-white/90">{d}</span></div>
        ))}
      </div>
      <p className="mt-6 text-white/80 md:text-lg">Não é apenas uma ferramenta. É a estrutura digital da operação.</p>
    </SlideShell>
  );
}

function Slide20({ i, t }: { i: number; t: number }) {
  const rows: Array<[string, string]> = [
    ["Planilhas separadas","Plataforma centralizada"],["Fichas em papel","Onboarding digital"],
    ["Filas e conferência manual","QR Code e check-in rápido"],["Internet como dependência","Operação offline"],
    ["Dados espalhados","Histórico consolidado"],["Relatórios manuais","Exportações automáticas"],
    ["Controle informal de acessos","Perfis e permissões"],["Resultado financeiro paralelo","DRE por evento"],
  ];
  return (
    <SlideShell index={i} total={t} eyebrow="Antes e depois" title="Como o Acessaí transforma a operação">
      <div className="grid flex-1 gap-2">
        <div className="grid grid-cols-2 gap-4 text-xs tracking-widest text-white/50 uppercase"><div>Antes do Acessaí</div><div className="text-[color:var(--acessai-cyan)]">Com o Acessaí</div></div>
        {rows.map(([a, b]) => (
          <div key={a} className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/70"><X className="mr-2 inline h-4 w-4 text-red-400/80" />{a}</div>
            <div className="rounded-xl border border-[color:var(--acessai-cyan)]/25 bg-[color:var(--acessai-cyan)]/5 p-3 text-sm text-white"><CheckCircle2 className="mr-2 inline h-4 w-4 text-[color:var(--acessai-cyan)]" />{b}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide21({ i, t }: { i: number; t: number }) {
  const groups = [
    { title: "Melhorias operacionais", items: ["Controle de coletes e uniformes","Gestão de alimentação","Prestadores de serviço","Lembretes automáticos","Portal do participante"] },
    { title: "Integrações", items: ["WhatsApp","E-mail","Pagamentos","CRM externo","Marketing","Certificados"] },
  ];
  return (
    <SlideShell index={i} total={t} eyebrow="Evolução contínua" title="Uma plataforma que evolui junto com a operação">
      <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--acessai-purple)]/40 bg-[color:var(--acessai-purple)]/10 px-3 py-1 text-xs tracking-widest text-[color:var(--acessai-purple)] uppercase">
        <Puzzle className="h-3.5 w-3.5" />Roadmap · Possibilidades futuras
      </div>
      <div className="grid flex-1 gap-4 lg:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="acessai-card p-5">
            <div className="mb-3 font-semibold text-white">{g.title}</div>
            <ul className="space-y-1.5">
              {g.items.map((it) => <li key={it} className="flex items-center gap-2 text-sm text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--acessai-cyan)]" />{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide22({ i, t }: { i: number; t: number }) {
  const groups = [
    { title: "Gestão", items: ["Visibilidade em tempo real","Histórico","Indicadores","Padronização"] },
    { title: "Operação", items: ["Menos tarefas manuais","Check-in rápido","Processos centralizados","Mais autonomia para a equipe"] },
    { title: "Participantes", items: ["Entrada ágil","Processo organizado","Menos filas","Melhor experiência"] },
    { title: "Financeiro", items: ["Redução de retrabalho","Reutilização da plataforma","Menor dependência de ferramentas paralelas","Visão do resultado por evento"] },
  ];
  return (
    <SlideShell index={i} total={t} eyebrow="Valor para o cliente" title="O que o cliente ganha com o Acessaí">
      <div className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.title} className="acessai-card p-5">
            <TrendingUp className="mb-3 h-5 w-5 text-[color:var(--acessai-cyan)]" />
            <div className="mb-2 font-semibold text-white">{g.title}</div>
            <ul className="space-y-1">{g.items.map((it) => <li key={it} className="text-sm text-white/80">{it}</li>)}</ul>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function Slide23({ i, t }: { i: number; t: number }) {
  const items = ["Hospedagem","Banco de dados","Armazenamento","Monitoramento","Segurança","Atualizações","Correções","Suporte","Manutenção preventiva","Adequações operacionais","Evolução dos módulos","Apoio às novas edições"];
  return (
    <SlideShell index={i} total={t} eyebrow="Sustentação" title="Um sistema em produção precisa continuar evoluindo">
      <div className="grid flex-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => <div key={it} className="acessai-card p-4 text-sm text-white/85"><LifeBuoy className="mb-2 h-4 w-4 text-[color:var(--acessai-cyan)]" />{it}</div>)}
      </div>
      <p className="mt-8 max-w-3xl text-white/85 md:text-lg">A mensalidade não mantém apenas o sistema online. Ela mantém a operação preparada para os próximos eventos.</p>
    </SlideShell>
  );
}

function Slide24({ i, t }: { i: number; t: number }) {
  return (
    <SlideShell index={i} total={t} eyebrow="Próximos passos" title="Prontos para a próxima edição">
      <div className="flex flex-1 items-center justify-center">
        <div className="acessai-card acessai-glow w-full max-w-3xl p-10 text-center md:p-14">
          <div className="text-2xl font-semibold text-white md:text-4xl">Vamos transformar cada nova edição em uma operação mais simples, organizada e inteligente.</div>
          <div className="mt-10 flex items-center justify-center gap-3 text-sm tracking-widest text-white/70 uppercase">
            <span>Arkai</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="acessai-gradient-text font-semibold">Acessaí</span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

function PresentationPage() {
  const slides = useMemo(() => [
    (_i: number, _t: number) => <Slide01 />,
    (i: number, t: number) => <Slide02 i={i} t={t} />,
    (i: number, t: number) => <Slide03 i={i} t={t} />,
    (i: number, t: number) => <Slide04 i={i} t={t} />,
    (i: number, t: number) => <Slide05 i={i} t={t} />,
    (i: number, t: number) => <Slide06 i={i} t={t} />,
    (i: number, t: number) => <Slide07 i={i} t={t} />,
    (i: number, t: number) => <Slide08 i={i} t={t} />,
    (i: number, t: number) => <Slide09 i={i} t={t} />,
    (i: number, t: number) => <Slide10 i={i} t={t} />,
    (i: number, t: number) => <Slide11 i={i} t={t} />,
    (i: number, t: number) => <Slide12 i={i} t={t} />,
    (i: number, t: number) => <Slide13 i={i} t={t} />,
    (i: number, t: number) => <Slide14 i={i} t={t} />,
    (i: number, t: number) => <Slide15 i={i} t={t} />,
    (i: number, t: number) => <Slide16 i={i} t={t} />,
    (i: number, t: number) => <Slide17 i={i} t={t} />,
    (i: number, t: number) => <Slide18 i={i} t={t} />,
    (i: number, t: number) => <Slide19 i={i} t={t} />,
    (i: number, t: number) => <Slide20 i={i} t={t} />,
    (i: number, t: number) => <Slide21 i={i} t={t} />,
    (i: number, t: number) => <Slide22 i={i} t={t} />,
    (i: number, t: number) => <Slide23 i={i} t={t} />,
    (i: number, t: number) => <Slide24 i={i} t={t} />,
  ], []);
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [overview, setOverview] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const go = useCallback((delta: number) => setCurrent((c) => Math.max(0, Math.min(total - 1, c + delta))), [total]);
  const jump = useCallback((idx: number) => { setCurrent(idx); setOverview(false); }, []);

  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) containerRef.current?.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (overview) { if (e.key === "Escape") setOverview(false); return; }
      if (["ArrowRight","PageDown"," "].includes(e.key)) { e.preventDefault(); go(1); }
      else if (["ArrowLeft","PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === "Home") setCurrent(0);
      else if (e.key === "End") setCurrent(total - 1);
      else if (e.key.toLowerCase() === "g") setOverview((v) => !v);
      else if (e.key.toLowerCase() === "f") toggleFs();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, overview, total, toggleFs]);

  useEffect(() => {
    const onFs = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[color:var(--acessai-bg)] text-[color:var(--acessai-text)]" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', ui-sans-serif, system-ui" }}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.66_0.19_260/0.25),transparent_55%),radial-gradient(circle_at_85%_90%,oklch(0.66_0.2_300/0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,oklch(0.16_0.03_265/0.9))]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col">
        <div className="relative flex-1 p-4 md:p-6">
          <div className="acessai-slide relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--acessai-surface)]/40 shadow-2xl backdrop-blur">
            {slides[current](current + 1, total)}
          </div>
        </div>

        <div className="acessai-no-print sticky bottom-0 z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-[color:var(--acessai-bg)]/85 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex items-center gap-2">
            <button onClick={() => go(-1)} disabled={current === 0} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10 disabled:opacity-40" aria-label="Slide anterior"><ChevronLeft className="h-4 w-4" /></button>
            <button onClick={() => go(1)} disabled={current === total - 1} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10 disabled:opacity-40" aria-label="Próximo slide"><ChevronRight className="h-4 w-4" /></button>
            <button onClick={() => setOverview(true)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10" aria-label="Ver miniaturas" title="Miniaturas (G)"><LayoutGrid className="h-4 w-4" /></button>
            <button onClick={() => setCurrent(0)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10" aria-label="Reiniciar" title="Reiniciar"><RotateCcw className="h-4 w-4" /></button>
          </div>
          <div className="flex-1 px-4">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-[color:var(--acessai-cyan)] via-[color:var(--acessai-blue)] to-[color:var(--acessai-purple)] transition-all" style={{ width: `${((current + 1) / total) * 100}%` }} />
            </div>
            <div className="mt-1.5 text-center text-xs text-white/60">Slide {current + 1} de {total}</div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10" aria-label="Imprimir / PDF" title="Imprimir / PDF"><Printer className="h-4 w-4" /></button>
            <button onClick={toggleFs} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10" aria-label="Tela cheia" title="Tela cheia (F)">{isFs ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}</button>
          </div>
        </div>
      </div>

      {overview && (
        <div className="acessai-no-print fixed inset-0 z-50 overflow-auto bg-[color:var(--acessai-bg)]/95 backdrop-blur">
          <div className="mx-auto max-w-7xl p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-lg font-semibold text-white">Miniaturas</div>
              <button onClick={() => setOverview(false)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/85 hover:bg-white/10" aria-label="Fechar"><X className="h-4 w-4" /></button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {slides.map((s, idx) => (
                <button key={idx} onClick={() => jump(idx)} className={`group relative aspect-video overflow-hidden rounded-xl border text-left transition ${idx === current ? "border-[color:var(--acessai-cyan)] acessai-glow" : "border-white/10 hover:border-white/25"}`}>
                  <div className="pointer-events-none absolute top-0 left-0 origin-top-left scale-[0.22] bg-[color:var(--acessai-surface)]" style={{ width: "455%", height: "455%" }}>{s(idx + 1, total)}</div>
                  <div className="absolute right-2 bottom-2 rounded-md bg-black/60 px-2 py-0.5 text-[11px] text-white/90">{idx + 1}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
