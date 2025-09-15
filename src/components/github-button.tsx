import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export const GithubButton = () => {
  return (
    <Button variant={"outline"} asChild>
      <a
        href="https://github.com/YongVuthivathnakk/admin-dashboard.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Github
      </a>
    </Button>
  );
};
