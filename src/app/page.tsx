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


      {/* Footer */}
      <footer className="absolute bottom-6 text-base text-gray-500">
        © {new Date().getFullYear()} J FLOOR
      </footer>
    </main>
  );
}