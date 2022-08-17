import React, { useContext, useState, useEffect } from "react";
import { IconType } from "react-icons";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { ApplicationType, slugs } from "../utils/types";

export const MainContentContext = React.createContext<{
  allApplications: ApplicationType[];
  setAllApplications: React.Dispatch<React.SetStateAction<ApplicationType[]>>;

  active: slugs | undefined;
  setActive: React.Dispatch<React.SetStateAction<slugs | undefined>>;

  appLauncher: boolean;
  setAppLauncher: React.Dispatch<React.SetStateAction<boolean>>;

  recents: boolean;
  setRecents: React.Dispatch<React.SetStateAction<boolean>>;

  minimizeAll: () => void;

  onMobile: boolean;
  setOnMobile: React.Dispatch<React.SetStateAction<boolean>>;

  helpShown: boolean;
  setHelpShown: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<slugs | undefined>();

  const [appLauncher, setAppLauncher] = useState(false);
  const [recents, setRecents] = useState(false);
  const [onMobile, setOnMobile] = useState(false);
  const [helpShown, setHelpShown] = useState(false);

  const [allApplications, setAllApplications] = useState<ApplicationType[]>([
    {
      name: "About me",
      icon: GoInfo,
      slug: slugs.ABOUT,
      isOpen: false,
      isMaximized: false,
      isMinimized: false,
    },
    {
      name: "Projects",
      icon: AiOutlineFolderOpen,
      slug: slugs.PROJECTS,
      isOpen: false,
      isMaximized: true,
      isMinimized: false,
    },
    {
      name: "Tech Stack",
      icon: BsStack,
      slug: slugs.TECHSTACK,
      isOpen: false,
      isMaximized: true,
      isMinimized: false,
    },
    {
      name: "Contact me",
      icon: IoIosContact,
      slug: slugs.CONTACTME,
      isOpen: false,
      isMaximized: true,
      isMinimized: false,
    },
  ]);

  const minimizeAll = () => {
    setAllApplications((oldApps) => {
      const newApps = oldApps.map((app) => {
        if (app.isOpen) app.isMinimized = true;
        return app;
      });
      return newApps;
    });
    console.log(allApplications);
  };

  useEffect(() => {
    const updateMobile = () => {
      setOnMobile(window.innerWidth < 768);
    };
    updateMobile();

    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <MainContentContext.Provider
      value={{
        allApplications,
        setAllApplications,

        appLauncher,
        setAppLauncher,

        active,
        setActive,

        minimizeAll,

        recents,
        setRecents,

        onMobile,
        setOnMobile,

        helpShown,
        setHelpShown,
      }}
    >
      {children}
    </MainContentContext.Provider>
  );
};

export const useMainStore = () => useContext(MainContentContext);

export default MainContentProvider;
