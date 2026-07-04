import {
  ArrowRight,
  Video,
  Target,
  GitPullRequest,
  MessageSquare,
  GitBranch,
  BookMarked,
  MessageCircle,
  LucideIcon,
} from 'lucide-react'
import { buttonVariants } from '@commitpt/design-system'

interface Solution {
  icon: LucideIcon
  title: string
  desc: string
}

const solutions: Solution[] = [
  {
    icon: Video,
    title: 'Sessões Semanais ao Vivo',
    desc: 'Chamadas regulares onde os membros apresentam o que estão a construir, discutem desafios técnicos e recebem perspetivas em tempo real. Estruturadas e focadas — sem perder tempo.',
  },
  {
    icon: Target,
    title: 'Check-ins de Projetos',
    desc: 'Cada membro partilha o que comprometeu para a semana e o que entregou. Um ciclo simples e repetido que transforma intenção em hábito — e em resultados visíveis semana após semana.',
  },
  {
    icon: GitPullRequest,
    title: 'Revisões de Código e Arquitectura',
    desc: 'Submetes o teu trabalho e recebes análise de profissionais com experiência real no mercado. Feedback específico e accionável — não opiniões genéricas nem o silêncio do Stack Overflow.',
  },
  {
    icon: MessageSquare,
    title: 'Discussões Técnicas e de Carreira',
    desc: 'Canais dedicados a system design, ferramentas, boas práticas, processos de entrevista, salários e progressão. Conversas reais com pessoas que navegam estas questões todos os dias.',
  },
  {
    icon: GitBranch,
    title: 'Projetos Colaborativos',
    desc: 'Trabalhas em projetos internos com outros membros: defines tarefas, colaboras em código, iteras e entregas. A dinâmica mais próxima de uma equipa de engenharia real que vais encontrar antes de estares numa.',
  },
  {
    icon: BookMarked,
    title: 'Recursos e Roadmaps Curados',
    desc: 'Materiais selecionados por profissionais da área — sem o ruído das playlists infinitas. Roadmaps validados, templates e referências que podes usar de imediato.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-sm font-bold text-warning">03 // Como Funciona</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Como a CommitPT torna isso possível.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não é magia. São mecanismos concretos, repetidos todas as semanas, com as pessoas
            certas. É assim que o crescimento deixa de ser acidental e passa a ser inevitável.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-lg border border-border bg-background p-6 hover:border-primary transition-colors"
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <s.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div
          id="join"
          className="mt-20 rounded-lg border border-border bg-surface p-8 text-center lg:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Já sabes qual é o problema. A solução está a um clique.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Junta-te a mais de 300 programadores portugueses que pararam de aprender sozinhos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://whop.com/commitpt-709e/commit-plus"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: 'lg' })}
            >
              Adere já
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://discord.gg/yGAbprCBrT"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              <MessageCircle size={16} />
              Experimenta o Discord Grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
