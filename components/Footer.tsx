import { Globe } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://imharshsharma.in/"
        rel="noopener noreferrer"
      >
        <Globe className="w-4 h-4 " />
        Current Portfolio
      </a>
    </footer>
  );
};
