import Image from "next/image";

const services = [
  {
    title: "Teeth Cleaning",
    img: "/sample-cleaning.jpg",
    desc: "Gentle and thorough cleaning for a fresh, healthy smile. Includes scaling, polishing, and oral hygiene advice.",
  },
  {
    title: "Braces & Aligners",
    img: "/sample-braces.jpg",
    desc: "Modern orthodontics for all ages to straighten your teeth. Free consultation for new patients!",
  },
  {
    title: "Teeth Whitening",
    img: "/sample-whitening.jpg",
    desc: "Brighten your smile with safe, effective whitening treatments. Visible results in just one session.",
  },
  {
    title: "Dental Implants",
    img: "/sample-implant.jpg",
    desc: "Permanent solutions for missing teeth using advanced implant technology.",
  },
  {
    title: "Pediatric Dentistry",
    img: "/sample-kids.jpg",
    desc: "Gentle care for children, making every visit fun and stress-free.",
  },
  {
    title: "Emergency Care",
    img: "/sample-emergency.jpg",
    desc: "Same-day appointments for dental emergencies. Call us anytime!",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full max-w-5xl mx-auto mt-16 md:mt-24 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--primary)] text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-[var(--surface)] rounded-lg shadow p-6 flex flex-col items-center">
            <Image src={service.img} alt={service.title} width={80} height={80} className="rounded-full mb-4 object-cover" />
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-[var(--foreground)]">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
