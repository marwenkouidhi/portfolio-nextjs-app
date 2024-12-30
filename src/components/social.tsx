import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    icon: <GithubIcon />,
    path: "https://github.com/marwenkouidhi",
  },

  {
    icon: <LinkedinIcon />,
    path: "https://www.linkedin.com/in/marwenkouidhi/",
  },
];
const Social = () => {
  return (
    <div className="flex gap-5">
      {links.map((link, index) => (
        <Link legacyBehavior key={index} href={link.path} rel="noreferrer">
          <a target="_blank" className="text-primary-foreground bg-primary p-2 rounded-full">
            {link.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Social;
