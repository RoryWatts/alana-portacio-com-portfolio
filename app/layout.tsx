import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Alana Portacio',
    template: '%s | Alana Portacio',
  },
  description: "Speech Pathologist and Research Assistant at Catholic Education Western Australia and Curtin University in the Greater Perth Area. Specializing in early intervention and paediatrics—with a focus on hearing loss, neurodiversity, trauma/mental health, and motor speech conditions. Passionate about delivering family-centred, strengths-based, and neuro-affirming interventions while mentoring early-career Speech Pathologists.",
  openGraph: {
    title: 'Alana Portacio',
    description: "Speech Pathologist and Research Assistant at Catholic Education Western Australia and Curtin University in the Greater Perth Area. Specializing in early intervention and paediatrics with a focus on hearing loss, neurodiversity, trauma/mental health, and motor speech conditions.",
    url: baseUrl,
    siteName: 'Alana Portacio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
