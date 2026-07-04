import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import ContributorCard, { type Contributor } from '@/src/components/ContributorCard'
import contributorsData from '@/src/contributors.json'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@commitpt/design-system'

export const metadata: Metadata = {
  title: 'Contribuidores — CommitPT',
  description:
    'Os programadores que tornam a CommitPT possível. Mais de 20 contribuidores ativos a partilhar conhecimento, fazer code reviews e construir em público.',
  alternates: {
    canonical: 'https://www.commitpt.com/contributors',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.commitpt.com/contributors',
    title: 'Contribuidores — CommitPT',
    description:
      'Os programadores que tornam a CommitPT possível. Mais de 20 contribuidores ativos a partilhar conhecimento, fazer code reviews e construir em público.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary',
    title: 'Contribuidores — CommitPT',
    description:
      'Os programadores que tornam a CommitPT possível. Mais de 20 contribuidores ativos a partilhar conhecimento, fazer code reviews e construir em público.',
    images: ['/commit_3.png'],
  },
}

const contributors: Contributor[] = contributorsData

export default function ContributorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <span className="font-mono text-sm font-bold text-warning">{'// Contribuidores'}</span>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              As pessoas por trás da CommitPT.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Mais de 20 programadores que contribuem ativamente — com code reviews, workshops,
              sessões de co-working e muito mais. Aqui podes conhecê-los, ver o seu trabalho e
              contactá-los diretamente.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              20+ contribuidores ativos
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <p className="mb-8 font-mono text-sm text-muted-foreground">
            A mostrar os <span className="text-primary">top {contributors.length}</span>{' '}
            contribuidores
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.githubUsername} contributor={contributor} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-28">
            <span className="font-mono text-sm font-bold text-warning">{'// Junta-te a nós'}</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Queres aparecer aqui?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Entra na comunidade e começa a contribuir. Simples assim.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://whop.com/commitpt-709e/commit-plus"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: 'lg' })}
              >
                Entrar no Whop
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://discord.gg/yGAbprCBrT"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                Entrar no Discord
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
