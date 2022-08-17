import { useContext, useEffect, useState } from "react";
import { Icons, Taskbar, Wallpaper, Recents, Help } from "../components";
import { About, ContactMe, Projects, TechStack } from "../components/sections";
import { MainContentContext, useMainStore } from "../store/MainStore";
import { slugs } from "../utils/types";
import styles from "../styles/global.css";

export const links = () => [
  {
    rel: "preload",
    href: "../../public/assets/wallpaper.png",
    as: "image",
  },
  { rel: "stylesheet", href: styles },
];

const Home = () => {
  const { allApplications, recents, helpShown, setHelpShown } =
    useContext(MainContentContext)!;
  const [step, setStep] = useState(1);
  useEffect(() => {
    setHelpShown(!!localStorage.getItem("help-shown"));

    function viewHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    viewHeight();
    window.addEventListener("resize", viewHeight);
    return () => document.removeEventListener("resize", viewHeight);
  }, []);

  useEffect(() => {
    if (step == 0) {
      setHelpShown(true);
      localStorage.setItem("help-shown", "true");
    }
  }, [step]);

  return (
    <div className="main">
      {/* {!helpShown && step > 0 && <Help step={step} setStep={setStep} />} */}
      <Wallpaper />
      <Taskbar />
      <Icons />
      {recents && <Recents />}
      {allApplications &&
        allApplications.map((app, key) => {
          if (app.isOpen && !app.isMinimized) {
            if (app.slug == slugs.ABOUT) return <About key={key} />;
            if (app.slug == slugs.PROJECTS) return <Projects key={key} />;
            if (app.slug == slugs.TECHSTACK) return <TechStack key={key} />;
            if (app.slug == slugs.CONTACTME) return <ContactMe key={key} />;
          }
        })}
    </div>
  );
};

export default Home;
