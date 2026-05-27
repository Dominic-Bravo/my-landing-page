import Image from "next/image";

export const metadata = {
  title: "BrightSmile Dental Clinic | Your Trusted Dentist",
  description: "BrightSmile Dental Clinic offers top-quality dental care with modern technology and a caring team. Book your appointment today!",
  openGraph: {
    title: "BrightSmile Dental Clinic",
    description: "BrightSmile Dental Clinic offers top-quality dental care with modern technology and a caring team. Book your appointment today!",
    url: "https://brightsmile.example.com",
    images: [
      {
        url: "/sample-dental-team.jpg",
        width: 1200,
        height: 630,
        alt: "BrightSmile Dental Clinic Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "geo.region": "PH",
    "geo.placename": "Manila",
    "geo.position": "14.5995;120.9842",
    "ICBM": "14.5995, 120.9842",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      <header className="w-full bg-[var(--primary)] text-white py-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Image src="/sample-logo.png" alt="BrightSmile Logo" width={48} height={48} className="rounded-full bg-white p-1" />
            <span className="text-2xl font-bold tracking-tight">BrightSmile Dental Clinic</span>
          </div>
          <nav className="flex gap-6 mt-4 md:mt-0">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <section className="w-full max-w-3xl flex flex-col items-center text-center gap-8">
          <Image src="/sample-dental-team.jpg" alt="Dental Team" width={400} height={250} className="rounded-xl shadow-lg object-cover" />
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--primary)]">Your Smile, Our Passion</h1>
          <p className="text-lg text-[var(--foreground)] max-w-xl">
            Experience world-class dental care in Manila. Our expert dentists use the latest technology to keep your smile healthy and beautiful. Book your appointment today!
          </p>
          <a href="#contact" className="inline-block bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[var(--primary)] transition-colors">Book Appointment</a>
        </section>
        <section id="services" className="w-full max-w-4xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--surface)] rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="/sample-cleaning.jpg" alt="Dental Cleaning" width={80} height={80} className="rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Teeth Cleaning</h2>
            <p className="text-sm text-[var(--foreground)]">Gentle and thorough cleaning for a fresh, healthy smile.</p>
          </div>
          <div className="bg-[var(--surface)] rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="/sample-braces.jpg" alt="Braces" width={80} height={80} className="rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Braces & Aligners</h2>
            <p className="text-sm text-[var(--foreground)]">Modern orthodontics for all ages to straighten your teeth.</p>
          </div>
          <div className="bg-[var(--surface)] rounded-lg shadow p-6 flex flex-col items-center">
            <Image src="/sample-whitening.jpg" alt="Teeth Whitening" width={80} height={80} className="rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">Teeth Whitening</h2>
            <p className="text-sm text-[var(--foreground)]">Brighten your smile with safe, effective whitening treatments.</p>
          </div>
        </section>
        <section id="about" className="w-full max-w-3xl mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">About BrightSmile</h2>
          <p className="text-[var(--foreground)]">BrightSmile Dental Clinic has served Manila for over 10 years, providing compassionate care and advanced dental solutions. Our team is dedicated to making every visit comfortable and stress-free.</p>
        </section>
        <section id="contact" className="w-full max-w-3xl mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Contact Us</h2>
          <p className="mb-4 text-[var(--foreground)]">123 Smile Avenue, Manila, PH<br />Phone: (02) 1234-5678<br />Email: info@brightsmile.example.com</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="text-[var(--social-facebook)] hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="text-[var(--social-instagram)] hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.388 3.545 1.445 2.488 2.502 2.23 3.675 2.172 4.952.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.316 2.45 1.373 3.507 1.057 1.057 2.23 1.315 3.507 1.373C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.058 2.45-.316 3.507-1.373 1.057-1.057 1.315-2.23 1.373-3.507.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.277-.316-2.45-1.373-3.507C19.398.388 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener" aria-label="X" className="text-[var(--social-x)] hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324C23.178 24 24 23.178 24 22.162V1.838C24 .822 23.178 0 22.162 0zM7.66 20.452H3.548V9.048H7.66v11.404zm-2.056-13.02c-1.32 0-2.392-1.072-2.392-2.392 0-1.32 1.072-2.392 2.392-2.392 1.32 0 2.392 1.072 2.392 2.392 0 1.32-1.072 2.392-2.392 2.392zm15.056 13.02h-4.112v-5.604c0-1.336-.024-3.056-1.864-3.056-1.864 0-2.15 1.454-2.15 2.956v5.704H7.66V9.048h3.948v1.56h.056c.55-1.04 1.892-2.136 3.892-2.136 4.16 0 4.928 2.74 4.928 6.304v5.676z"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok" className="text-[var(--social-tiktok)] hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.522 0-10 4.477-10 10 0 5.522 4.478 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm0 18.182c-4.517 0-8.182-3.665-8.182-8.182 0-4.517 3.665-8.182 8.182-8.182 4.517 0 8.182 3.665 8.182 8.182 0 4.517-3.665 8.182-8.182 8.182zm2.727-8.182c0-1.506-1.221-2.727-2.727-2.727s-2.727 1.221-2.727 2.727c0 1.506 1.221 2.727 2.727 2.727s2.727-1.221 2.727-2.727zm-2.727 4.09c-2.257 0-4.09-1.833-4.09-4.09s1.833-4.09 4.09-4.09 4.09 1.833 4.09 4.09-1.833 4.09-4.09 4.09z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="text-[var(--social-youtube)] hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.147 0 12 0 12s0 3.853.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.575 20.5 12 20.5 12 20.5s7.425 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.853 24 12 24 12s0-3.853-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full bg-[var(--muted)] text-[var(--foreground)] py-4 text-center mt-12">
        &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
      </footer>
    </div>
  );
}
