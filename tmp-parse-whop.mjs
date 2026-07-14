import fs from 'node:fs'

const html = fs.readFileSync('whop-page.html', 'utf8')

const re = /self\.__next_f\.push\(\[1,"([^"]+)"\]\)/g
const entries = []
let m
while ((m = re.exec(html))) entries.push(m[1])

console.log('entries', entries.length)

for (const e of entries) {
  const lower = e.toLowerCase()
  if (
    lower.includes('price') ||
    lower.includes('plan') ||
    lower.includes('billing') ||
    lower.includes('benefit') ||
    lower.includes('feature') ||
    lower.includes('commit') ||
    lower.includes('subscription') ||
    lower.includes('month') ||
    lower.includes('year') ||
    lower.includes('access') ||
    lower.includes('discord')
  ) {
    console.log('---')
    console.log(e.slice(0, 1200))
  }
}
