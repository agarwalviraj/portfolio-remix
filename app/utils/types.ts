import { IconType } from "react-icons";

export enum slugs {
  ABOUT = "about",
  PROJECTS = "projects",
  TECHSTACK = "techStack",
  CONTACTME = "contactMe",
}

export interface ApplicationType {
  name: string;
  icon: IconType;
  slug: slugs;
  isOpen: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
}
