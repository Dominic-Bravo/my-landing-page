export default function Footer() {
  return (
    <footer className="w-full bg-[var(--muted)] text-[var(--foreground)] py-4 text-center mt-12">
      &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
    </footer>
  );
}
