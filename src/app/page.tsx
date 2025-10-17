import { Share_Tech_Mono } from 'next/font/google'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`${shareTechMono.className} flex h-screen flex-col items-center justify-center bg-white text-black px-6 overflow-hidden`}>
      {/* Apply CTA - Top Right */}
      <div className="absolute top-6 right-6">
        <a
          href="https://heavenly-legend-319.notion.site/271641eadaaa805ba57bce75008b646c?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border border-black text-sm hover:bg-black hover:text-white transition-colors"
        >
          APPLY
        </a>
      </div>

      {/* Logo */}
      <h1 className="text-base tracking-tight mb-16">
        J FLOOR
      </h1>

      {/* Manifesto */}
      <div className="space-y-6 text-center max-w-2xl">
        <p className="text-base font-normal">
          A space for ambitious founders in Zürich.
        </p>
        <p className="text-base font-normal">
          The ones who ship.
        </p>
        <p className="text-base font-normal">
          Community × Family.
        </p>
        <p className="text-base font-normal">
          Here, we build. We share. We grow.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="https://heavenly-legend-319.notion.site/28f641eadaaa80e589dfed4ffa1fe1a2?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-black text-white text-base hover:bg-gray-800 transition-colors"
        >
          LAUNCH EVENT
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-base text-gray-500 text-center">
        <div>info@thejfloor.com</div>
        <div>© {new Date().getFullYear()} J FLOOR</div>
      </footer>
    </main>
  );
}