import { Share_Tech_Mono } from 'next/font/google'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`${shareTechMono.className} flex min-h-screen flex-col items-center justify-center bg-white text-black px-6`}>
      {/* Logo */}
      <h1 className="text-base font-normal tracking-tight mb-16">
        J FLOOR
      </h1>

      {/* Manifesto */}
      <div className="space-y-6 text-center max-w-2xl">
        <p className="text-base font-normal">
          A space for ambitious founders in Zürich.
        </p>
        <p className="text-base font-normal">
          A room for builders, not talkers.
        </p>
        <p className="text-base font-normal">
          Community × Family.
        </p>
        <p className="text-base font-normal">
          Here, we work. We share. We grow.
        </p>
      </div>

      {/* Mission-ish section */}
      <div className="mt-16 space-y-3 text-center text-base font-normal">
        <p>No desks for rent.</p>
        <p>No overpriced coffee.</p>
        <p>Just space.</p>
        <p>Just freedom.</p>
        <p>Just builders.</p>
      </div>

      {/* CTA */}
      <div className="mt-16">
        <a
          href="#"
          className="border border-black px-6 py-3 text-base font-normal hover:bg-black hover:text-white transition"
        >
          Join us
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-base text-gray-500">
        © {new Date().getFullYear()} J FLOOR
      </footer>
    </main>
  );
}