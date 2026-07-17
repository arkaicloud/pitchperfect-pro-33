import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white"
      style={{ backgroundColor: "oklch(0.16 0.03 265)", fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[color:var(--acessai-blue)]/30 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[color:var(--acessai-purple)]/25 blur-3xl" />
      </div>
      <div className="relative max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.28em] uppercase">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--acessai-cyan)]" />
          Apresentação comercial
        </div>
        <h1 className="text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          <span className="acessai-gradient-text">Acessaí</span>
        </h1>
        <p className="mt-6 text-xl text-white/85 md:text-2xl">
          Gestão inteligente para eventos que não podem falhar.
        </p>
        <Link
          to="/apresentacao-acessai"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--acessai-cyan)] via-[color:var(--acessai-blue)] to-[color:var(--acessai-purple)] px-6 py-3 text-sm font-semibold text-[color:var(--acessai-bg)] shadow-lg transition hover:opacity-95"
        >
          Iniciar apresentação
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
