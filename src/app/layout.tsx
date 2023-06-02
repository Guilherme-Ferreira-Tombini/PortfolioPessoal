import './globals.css'
import { Doppio_One } from 'next/font/google'

const doppio = Doppio_One({ subsets: ['latin'], weight:'400' });

export const metadata = {
  title: 'Portfolio Pessoal',
  description: 'Portfolio que mostra meus projetos e perfil na area da programação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={doppio.className}>{children}</body>
    </html>
  )
}
