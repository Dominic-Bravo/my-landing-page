import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl flex flex-col items-center text-center gap-8 py-12 md:py-20 mx-auto">
      <Image src="/sample-dental-team.jpg" alt="Dental Team" width={400} height={250} className="rounded-xl shadow-lg object-cover" />
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--primary)] leading-tight">Your Smile, Our Passion</h1>
      <p className="text-lg md:text-xl text-[var(--foreground)] max-w-xl">
        Experience world-class dental care in Manila. Our expert dentists use the latest technology to keep your smile healthy and beautiful. Book your appointment today!
      </p>
      <a href="#contact" className="inline-block bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[var(--primary)] transition-colors">Book Appointment</a>
    </section>
  );
}
