import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useMainStore } from "../store/MainStore";
import { close } from "../utils/actions";

const Help = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  // @ts-ignore
  const { onMobile, setActive, setAllApplications, allApplications } =
    useMainStore!();
  const totalSteps = onMobile ? 2 : 3;
  const Step1 = () => (
    <div className="icons-help">
      <div className="highlight"></div>
      <ReactSVG src="assets/help/Arrow1.svg" className="arrow1" />
      <p>
        These are the &quotapplications&quot you can select from which tell
        about me
      </p>
    </div>
  );
  const Step2_Mobile = () => (
    <div className="mobile-taskbar-help">
      <div className="mobile-taskbar-highlight"></div>
      <ReactSVG src="assets/help/Arrow2.svg" className="arrow2" />
      <p>
        These are the &ldquoRecents&ldquo, &ldquoHome&ldquo and &ldquoBack&ldquo
        button respectively. They can be used like in a mobile.
      </p>
    </div>
  );

  const Step2_Desktop = () => (
    <div className="taskbar-help">
      <div className="taskbar-highlight"></div>
      <ReactSVG src="assets/help/Arrow2.svg" className="arrow3" />
      <p>This is the taskbar with the application launcher on the left.</p>
    </div>
  );

  const Step3_Desktop = () => {
    return (
      <div className="titlebar-help">
        <div className="titlebar-highlight"></div>
        <ReactSVG src="assets/help/Arrow1.svg" className="arrow4" />
        <p>
          This is the titlebar, it can be used to maximize, minimize or close a
          window. It can also be used to drag a window around
        </p>
      </div>
    );
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStep(0);
      }
    };

    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, []);
  useEffect(() => {
    if (step == 3) {
      close(allApplications, 0, setActive, setAllApplications, false);
    }
  }, [step]);
  return (
    <div
      className="help"
      onKeyUp={(e) => {
        console.log(e);
      }}
      onClick={() => {
        setStep((old) => (old + 1) % (totalSteps + 1));
      }}
    >
      {step == 1 && <Step1 />}
      {step == 2 && (onMobile ? <Step2_Mobile /> : <Step2_Desktop />)}
      {step == 3 && <Step3_Desktop />}
    </div>
  );
};

export default Help;
