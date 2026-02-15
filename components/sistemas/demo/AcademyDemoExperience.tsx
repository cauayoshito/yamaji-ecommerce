"use client";

import { useMemo, useState } from "react";
import {
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  Download,
  Filter,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  Lock,
  MoreHorizontal,
  Play,
  PlayCircle,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ScreenKey = "catalogo" | "formacao" | "dashboard" | "player";

type Module = {
  id: string;
  title: string;
  meta: string;
  lessons: Array<{ id: string; title: string; duration: string; free?: boolean; locked?: boolean }>;
};

const screens: Array<{ id: ScreenKey; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { id: "catalogo", label: "Catálogo", icon: GraduationCap },
  { id: "formacao", label: "Formação", icon: BookOpen },
  { id: "dashboard", label: "App do Aluno", icon: LayoutDashboard },
  { id: "player", label: "Player", icon: PlayCircle },
];

const modules: Module[] = [
  {
    id: "m1",
    title: "Fundamentos & Configuração",
    meta: "3 aulas • 45 min",
    lessons: [
      { id: "l1", title: "Setup do ambiente", duration: "10:00", free: true },
      { id: "l2", title: "Arquitetura do projeto", duration: "15:00", free: true },
      { id: "l3", title: "Tailwind + TypeScript", duration: "20:00", locked: true },
    ],
  },
  {
    id: "m2",
    title: "Backend & Database",
    meta: "12 aulas • 5h 30min",
    lessons: [
      { id: "l4", title: "Modelagem com Prisma", duration: "21:00", free: true },
      { id: "l5", title: "Criando API routes", duration: "25:00", locked: true },
      { id: "l6", title: "Autenticação JWT", duration: "40:00", locked: true },
    ],
  },
  {
    id: "m3",
    title: "Frontend & UI Masterclass",
    meta: "15 aulas • 8h 15min",
    lessons: [
      { id: "l7", title: "Componentes reutilizáveis", duration: "20:00", locked: true },
      { id: "l8", title: "Estado com Zustand", duration: "35:00", locked: true },
    ],
  },
];

const courseCards = [
  { title: "React Mastery: Do Zero ao Hero", area: "Front-end", level: "Iniciante", modules: "12 módulos", classes: "45 aulas" },
  { title: "Node.js Enterprise Architecture", area: "Back-end", level: "Intermediário", modules: "18 módulos", classes: "82 aulas" },
  { title: "Python & Machine Learning", area: "Data", level: "Avançado", modules: "24 módulos", classes: "110 aulas" },
  { title: "AWS Cloud Essentials", area: "DevOps", level: "Intermediário", modules: "10 módulos", classes: "35 aulas" },
  { title: "Ethical Hacking Bootcamp", area: "Security", level: "Avançado", modules: "30 módulos", classes: "150 aulas" },
  { title: "UI/UX Design Fundamentals", area: "Design", level: "Iniciante", modules: "8 módulos", classes: "40 aulas" },
];

function VisualThumb({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#12161F] via-[#0f151c] to-[#0B0D11]", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(19,236,146,0.16),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_65%)]" />
      <div className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-accent" />
      </div>
    </div>
  );
}

function CatalogScreen() {
  return (
    <div className="space-y-8">
      <header className="rounded-2xl border border-white/10 bg-[#12161F]/70 p-6 md:p-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Catálogo de <span className="text-accent">Formações</span>
        </h2>
        <p className="mt-3 max-w-3xl text-white/60">
          Explore trilhas por nível, duração e área técnica com visual Yamaji Academy.
        </p>
      </header>

      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#12161F]/55 p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:w-96">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
          <input
            type="text"
            placeholder="Buscar por tecnologia, assunto..."
            className="w-full rounded-lg border border-white/10 bg-[#0f141b] py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-accent/60"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "Nível: Todos",
            "Duração: Qualquer",
            "Área: Todas",
          ].map((label) => (
            <button
              key={label}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f141b] px-3 py-2 text-sm text-white/70 transition hover:bg-[#141a22]"
              type="button"
            >
              <Filter className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courseCards.map((card) => (
          <article
            key={card.title}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#12161F]/65 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_0_24px_rgba(19,236,146,0.14)]"
          >
            <VisualThumb className="h-44" />
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-accent">
                  {card.area}
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/50">{card.level}</span>
              </div>
              <h3 className="text-lg font-bold text-white transition group-hover:text-accent">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm text-white/55">Formação prática com projetos de mercado e acompanhamento.</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/50">
                <span>{card.modules}</span>
                <span>{card.classes}</span>
                <button className="rounded-lg border border-accent/25 bg-accent/10 p-1.5 text-accent transition hover:bg-accent hover:text-[#0B0D11]" type="button">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {[
          "prev",
          "1",
          "2",
          "3",
          "...",
          "8",
          "next",
        ].map((item) => (
          <button
            key={item}
            type="button"
            className={cn(
              "h-9 min-w-9 rounded-lg border px-2 text-sm transition",
              item === "1"
                ? "border-accent bg-accent text-[#0B0D11]"
                : "border-white/10 bg-[#12161F] text-white/65 hover:border-accent/40 hover:text-accent"
            )}
          >
            {item === "prev" ? <ChevronLeft className="mx-auto h-4 w-4" /> : null}
            {item === "next" ? <ChevronRight className="mx-auto h-4 w-4" /> : null}
            {!['prev', 'next'].includes(item) ? item : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function CourseScreen() {
  const [openModules, setOpenModules] = useState<string[]>(["m2"]);

  function toggleModule(id: string) {
    setOpenModules((curr) =>
      curr.includes(id) ? curr.filter((item) => item !== id) : [...curr, id]
    );
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 rounded-2xl border border-white/10 bg-[#12161F]/70 p-6 lg:grid-cols-2 lg:p-8">
        <div>
          <p className="mb-3 inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Atualizado Out 2023
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white">
            Fullstack <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">Masterclass</span>
          </h2>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4 text-accent" />Nível Avançado</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4 text-accent" />45 horas</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-accent" />Certificado</span>
          </div>
          <p className="mt-5 max-w-xl text-white/60">Desenvolvimento web moderno com backend escalável, frontend interativo e arquitetura de produção.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="rounded-lg bg-accent px-5 py-3 text-sm font-bold text-[#0B0D11] transition hover:bg-emerald-300">Entrar na formação</button>
            <button type="button" className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Falar no WhatsApp</button>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0e131a] p-3">
          <VisualThumb className="h-64" />
          <div className="mt-3 rounded-lg border border-white/10 bg-black/30 p-3">
            <p className="text-xs text-white/45">Projeto final</p>
            <p className="text-sm font-semibold text-white">SaaS Multi-tenant</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          "SaaS Completo",
          "Pagamentos",
          "Autenticação",
          "Deploy CI/CD",
        ].map((item) => (
          <article key={item} className="rounded-xl border border-white/10 bg-[#12161F]/60 p-5 transition hover:border-accent/30">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">{item}</h3>
            <p className="mt-2 text-sm text-white/55">Resultado prático aplicável no seu projeto real.</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-white/10 bg-[#12161F]/60 p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-white">Conteúdo do curso</h3>
            <p className="text-sm text-white/55">3 módulos • 30 aulas • Acesso vitalício</p>
          </div>
          <button type="button" className="text-sm font-semibold text-accent">Expandir tudo</button>
        </div>

        <div className="space-y-3">
          {modules.map((module, idx) => {
            const isOpen = openModules.includes(module.id);

            return (
              <div key={module.id} className="overflow-hidden rounded-xl border border-white/10 bg-[#0f141a]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#12161F] text-sm font-bold text-white/70">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{module.title}</p>
                      <p className="text-xs text-white/45">{module.meta}</p>
                    </div>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 text-white/50 transition-transform", isOpen ? "rotate-180" : "")}/>
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <ul className="min-h-0 space-y-1 overflow-hidden border-t border-white/10 p-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/5">
                        {lesson.locked ? <Lock className="h-4 w-4 text-white/35" /> : <PlayCircle className="h-4 w-4 text-accent" />}
                        <span className={lesson.locked ? "text-white/45" : "text-white/75"}>{lesson.title}</span>
                        <span className="ml-auto text-xs text-white/40">{lesson.free ? "LIVRE" : lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StudentDashboardScreen() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D11]">
      <div className="grid min-h-[720px] lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-[#0e1319] p-4 lg:border-b-0 lg:border-r">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-accent text-sm font-bold text-[#0B0D11]">Y</span>
            <span className="font-semibold text-white">Yamaji Academy</span>
          </div>
          <nav className="space-y-1 text-sm">
            {[
              "Dashboard",
              "Minhas Formações",
              "Certificados",
              "Recursos",
              "Fórum",
              "Eventos",
            ].map((item, idx) => (
              <a
                key={item}
                href="#"
                className={cn(
                  "block rounded-lg px-3 py-2 transition",
                  idx === 0 ? "bg-accent/10 text-accent" : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-6 rounded-lg border border-white/10 bg-[#12161F] p-3 text-sm text-white/75">
            <p className="font-semibold">Beatriz Silva</p>
            <p className="text-xs text-white/45">Ver perfil</p>
          </div>
        </aside>

        <section className="p-4 md:p-6">
          <header className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <p className="text-sm text-white/50">Plataforma / Dashboard</p>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input className="rounded-lg border border-white/10 bg-[#12161F] py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/45" placeholder="Buscar cursos..." />
              </div>
              <button type="button" className="rounded-lg border border-white/10 bg-[#12161F] p-2 text-white/60"><Bell className="h-4 w-4" /></button>
            </div>
          </header>

          <div className="space-y-5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-white">Bem-vinda de volta, Beatriz.</h3>
                <p className="text-sm text-white/55">Você tem 2 tarefas pendentes para hoje.</p>
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-accent">Status: Aprendendo</p>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              <article className="xl:col-span-2 rounded-xl border border-white/10 bg-[#12161F]/70 p-4">
                <div className="grid gap-4 sm:grid-cols-[220px_1fr]">
                  <VisualThumb className="h-32 sm:h-full" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-accent">Continue de onde parou</p>
                    <h4 className="mt-1 text-xl font-bold text-white">Cybersecurity Fundamentals</h4>
                    <p className="mt-2 text-sm text-white/55">Capítulo 4: criptografia assimétrica e aplicação em segurança de rede.</p>
                    <div className="mt-4 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-accent" />
                    </div>
                    <button type="button" className="mt-4 inline-flex items-center gap-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0B0D11]"><Play className="h-4 w-4" />Retomar</button>
                  </div>
                </div>
              </article>

              <article className="rounded-xl border border-white/10 bg-[#12161F]/70 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-semibold text-white">Progresso geral</h4>
                  <MoreHorizontal className="h-4 w-4 text-white/45" />
                </div>
                <div className="mx-auto mb-3 flex h-32 w-32 items-center justify-center rounded-full border-8 border-white/10 text-3xl font-bold text-white">
                  68%
                </div>
                <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3 text-center text-xs text-white/65">
                  <div><p>Horas</p><p className="text-lg font-bold text-white">124h</p></div>
                  <div><p>Certificados</p><p className="text-lg font-bold text-white">4</p></div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function LessonPlayerScreen() {
  const lessons = useMemo(
    () => [
      { title: "Introdução aos patterns", done: true },
      { title: "Higher Order Components", done: true },
      { title: "Render Props vs Hooks", done: true },
      { title: "Composição avançada", active: true },
      { title: "Context API performance", locked: true },
      { title: "Desafio prático", locked: true },
    ],
    []
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D11]">
      <div className="border-b border-white/10 bg-[#0e1319] px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-accent text-sm font-bold text-[#0B0D11]">Y</span>
            <span className="font-semibold text-white">Yamaji Academy</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button type="button" className="rounded-lg border border-white/10 bg-[#12161F] p-2 text-white/65"><Bell className="h-4 w-4" /></button>
            <button type="button" className="rounded-lg border border-white/10 bg-[#12161F] p-2 text-white/65"><Settings className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      <div className="grid min-h-[720px] lg:grid-cols-[1fr_330px]">
        <section className="p-4 md:p-6">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
            <VisualThumb className="h-full rounded-none border-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button type="button" className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-[#0B0D11] shadow-[0_0_28px_rgba(19,236,146,0.4)]">
                <Play className="ml-1 h-10 w-10" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="h-1.5 rounded-full bg-white/20">
                <div className="h-full w-1/3 rounded-full bg-accent" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/70">
                <span>04:20</span>
                <span>12:45</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-6 rounded-xl border border-white/10 bg-[#12161F]/70 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">04. Composição de Componentes Avançada</h3>
                <p className="mt-1 text-sm text-white/55">Composition pattern no React para eliminar prop drilling.</p>
              </div>
              <button type="button" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0B0D11]">Marcar como concluída</button>
            </div>

            <div>
              <h4 className="mb-3 inline-flex items-center gap-2 text-white"><FolderOpen className="h-4 w-4 text-accent" />Materiais complementares</h4>
              <div className="grid gap-3 md:grid-cols-3">
                {["Slides da aula", "Código fonte", "Documentação React"].map((item) => (
                  <a key={item} href="#" className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0f141a] p-3 text-sm text-white/75 transition hover:border-accent/35 hover:text-accent">
                    {item}
                    <Download className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0f141a] p-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent"><User className="h-5 w-5" /></div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-accent">Instrutor</p>
                <p className="font-semibold text-white">Rafael Yamaji</p>
                <p className="text-sm text-white/50">Senior Software Engineer</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="border-t border-white/10 bg-[#0e1319] p-4 lg:border-l lg:border-t-0">
          <div className="mb-4">
            <h4 className="font-semibold text-white">Conteúdo do curso</h4>
            <p className="text-xs text-white/50">Progresso geral 45%</p>
            <div className="mt-2 h-1.5 rounded-full bg-white/10"><div className="h-full w-[45%] rounded-full bg-accent" /></div>
          </div>
          <div className="space-y-1">
            {lessons.map((lesson) => (
              <div key={lesson.title} className={cn("flex items-center gap-2 rounded-lg px-3 py-2 text-sm", lesson.active ? "bg-accent/10 text-white" : "text-white/65 hover:bg-white/5")}>
                {lesson.done ? <Check className="h-4 w-4 text-accent" /> : null}
                {lesson.active ? <PlayCircle className="h-4 w-4 text-accent" /> : null}
                {lesson.locked ? <Lock className="h-4 w-4 text-white/35" /> : null}
                <span className={lesson.done ? "line-through decoration-white/30" : ""}>{lesson.title}</span>
              </div>
            ))}
          </div>
          <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#12161F] px-4 py-2 text-sm text-white/70 transition hover:bg-white/5">
            <Users className="h-4 w-4" />
            Precisa de ajuda?
          </button>
        </aside>
      </div>
    </div>
  );
}

export default function AcademyDemoExperience() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("catalogo");

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-[#12161F]/70 p-2">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const selected = screen.id === activeScreen;

            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreen(screen.id)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition",
                  selected
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-white/10 bg-[#0f141a] text-white/65 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {screen.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeScreen === "catalogo" ? <CatalogScreen /> : null}
      {activeScreen === "formacao" ? <CourseScreen /> : null}
      {activeScreen === "dashboard" ? <StudentDashboardScreen /> : null}
      {activeScreen === "player" ? <LessonPlayerScreen /> : null}
    </div>
  );
}
