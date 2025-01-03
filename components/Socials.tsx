import Link from "next/link";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import TwitterXIcon from "./icons/TwitterXIcon";
const Socials = () => {
  return (
    <ul className="space-y-1">
      <li className="dark:hover:bg-[var(--colors-gray12)] hover:bg-[var(--colors-gray3)] pl-1 rounded-lg">
        <Link
          href="https://x.com/mai_sharmaji"
          className="flex gap-2 items-center p-2"
        >
          <TwitterXIcon /> X
        </Link>
      </li>
      <li className="dark:hover:bg-[var(--colors-gray12)] hover:bg-[var(--colors-gray3)] pl-1 rounded-lg">
        <Link
          href="mailto:harsh.ju.sharma@gmail.com"
          className="flex gap-2 items-center p-2"
        >
          <Mail className="w-4 h-4" /> Email
        </Link>
      </li>
      <li className="dark:hover:bg-[var(--colors-gray12)] hover:bg-[var(--colors-gray3)] pl-1 rounded-lg">
        <Link
          href="https://www.linkedin.com/in/harshjusharma/"
          className="flex gap-2 items-center p-2"
        >
          <LinkedInLogoIcon className="w-4 h-4" /> LinkedIn
        </Link>
      </li>
      <li className="dark:hover:bg-[var(--colors-gray12)] hover:bg-[var(--colors-gray3)] pl-1 rounded-lg">
        <Link
          href="https://github.com/harsh-1923"
          className="flex gap-2 items-center p-2"
        >
          <GitHubLogoIcon className="w-4 h-4" /> GitHub
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
