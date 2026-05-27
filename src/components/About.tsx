export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto mt-20 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--primary)]">About BrightSmile</h2>
      <p className="text-[var(--foreground)] text-base md:text-lg mb-4">
        BrightSmile Dental Clinic has served Manila for over 10 years, providing compassionate care and advanced dental solutions. Our team is dedicated to making every visit comfortable and stress-free.
      </p>
      <ul className="flex flex-col md:flex-row justify-center gap-4 text-left text-[var(--foreground)] text-sm md:text-base">
        <li><strong>✓</strong> Modern digital X-rays & 3D scanning</li>
        <li><strong>✓</strong> Friendly, experienced dentists</li>
        <li><strong>✓</strong> Flexible payment options</li>
        <li><strong>✓</strong> Open evenings & weekends</li>
      </ul>
    </section>
  );
}
