interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '250+', label: 'membros ativos' },
  { value: '10+', label: 'profissionais da área' },
  { value: '4+', label: 'sessões ao vivo por mês' },
  { value: '5+', label: 'anos de experiência' },
]

export default function Stats() {
  return (
    <div className="border-b border-border bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-border">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-4 text-center ${i >= 2 ? 'border-t border-border sm:border-t-0' : ''}`}
            >
              <p className="font-mono text-3xl font-bold text-git-add">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
