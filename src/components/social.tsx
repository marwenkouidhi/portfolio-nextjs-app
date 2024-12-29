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
        <Link key={index} href={link.path} rel="noreferrer" className="text-accent hover:text-foreground">
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
