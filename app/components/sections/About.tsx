import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";

const About = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex((obj) => obj.slug == slugs.ABOUT);

  return (
    <Application currentId={currentId}>
      <div className="about-me main-section">
        <div className="text">
          <span>Hi, my name is</span>
          <h1>Viraj Agarwal</h1>
          <h3>I develop for the web.</h3>
          <p>
            I am a Computer Science Engineering undergrature with interest in
            building amazing websites. I like to code in typescript and have
            worked with typescript in React and Vue.
          </p>
          <p>
            Other than that I have a basic to intermediate knowledge of Node.js
            and plan on learning Springboot as I am familiar with Java. Low
            level programming really peaks my interest which is why I want to
            add languages like Rust, Haskell and Go to my skill-set.
          </p>
        </div>
      </div>
    </Application>
  );
};

export default About;
