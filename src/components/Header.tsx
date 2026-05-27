import Image from "next/image";

export default function Header() {
  return (
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
  );
}
