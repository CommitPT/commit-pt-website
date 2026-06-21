import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const BASE_URL = 'https://www.commitpt.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Comunidade CommitPT — Para de programar sozinho. Começa a fazer ship.',
  description:
    'A CommitPT é uma comunidade de crescimento de carreira para engenheiros de software portugueses. Grupos de responsabilidade semanais, revisões de código entre pares e acesso a profissionais da área.',
  keywords: [
    'commitpt',
    'bruno moisao',
    'comunidade programadores portugal',
    'comunidade programação',
    'engenheiros software portugal',
    'aprender a programar',
    'aprender programação',
    'aprender python',
    'aprender javascript',
    'aprender typescript',
    'aprender desenvolvimento web',
    'como começar a programar',
    'programação para iniciantes',
    'curso programação portugal',
    'crescimento carreira tech',
    'carreira desenvolvedor',
    'como arranjar emprego programação',
    'developer portugal',
    'programador portugal',
    'code review',
    'accountability programadores',
    'side projects',
    'build in public',
    'projetos pessoais programação',
    'comunidade tech portugal',
    'discord programadores',
  ],
  authors: [{ name: 'Bruno Moisão', url: 'https://www.linkedin.com/in/brunomoisao' }],
  creator: 'Bruno Moisão',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Comunidade CommitPT — Para de programar sozinho. Começa a fazer ship.',
    description:
      'A CommitPT é uma comunidade de crescimento de carreira para engenheiros de software portugueses. Grupos de responsabilidade semanais, revisões de código entre pares e acesso a profissionais da área.',
    siteName: 'CommitPT',
    images: [{ url: '/commit_3.png', width: 512, height: 512, alt: 'CommitPT' }],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary',
    title: 'Comunidade CommitPT — Para de programar sozinho. Começa a fazer ship.',
    description:
      'A CommitPT é uma comunidade de crescimento de carreira para engenheiros de software portugueses.',
    images: ['/commit_3.png'],
  },
  icons: {
    icon: '/commit_3.png',
    apple: '/commit_3.png',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-ink text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
