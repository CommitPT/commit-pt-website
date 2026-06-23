import { Star } from 'lucide-react'
import reviewsData from '@/src/reviews.json'

const MONTHS = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

function formatDate(raw: string): string {
  const [d, m, y] = raw.split('-').map(Number)
  return `${d} de ${MONTHS[m - 1]} de ${y}`
}

interface Testimonial {
  name: string
  discordUsername: string
  dateOfReview: string
  review: string
  stars: number
}

const testimonials: Testimonial[] = reviewsData

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-git-amber text-git-amber' : 'fill-border text-border'}`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name[0]

  return (
    <div className="flex w-80 flex-shrink-0 flex-col gap-4 rounded-xl border border-border bg-ink-light p-6 transition-colors hover:border-git-add/40">
      <StarRating count={t.stars} />
      <p className="flex-1 text-sm leading-relaxed text-muted">&ldquo;{t.review}&rdquo;</p>
      <span className="font-mono text-xs text-muted">{formatDate(t.dateOfReview)}</span>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-git-add/20 bg-git-add/10 font-mono text-xs font-bold text-git-add">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-text-primary">{t.name}</p>
          <span className="font-mono text-xs text-git-add">{t.discordUsername}</span>
        </div>
      </div>
    </div>
  )
}

export default function SocialProof() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="border-b border-border bg-ink">
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:pt-28">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-sm font-bold text-git-amber">
            05 // O Que Dizem os Membros
          </span>
          <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Engenheiros reais. Resultados reais.
          </h2>
          <p className="mt-4 text-muted">
            Não acredites só na nossa palavra. É isto que acontece quando os programadores param de
            programar sozinhos.
          </p>
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden pb-20 lg:pb-28">
        {/* Edge fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />

        <div className="animate-marquee pause-on-hover flex w-max gap-6 px-6">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
