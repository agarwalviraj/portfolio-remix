import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGhost,
} from "react-icons/fa";

const ContactMe = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.CONTACTME,
  );
  return (
    <Application currentId={currentId}>
      <div className="main-section contact-me">
        <div className="text">
          <span>Look likes my profile peaked your interest, go ahead and</span>
          <h1>Contact Me</h1>
          <div className="contact">
            <div className="profile">
              <img src="/assets/profile.png" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:viraj.ag007@gmail.com"
              >
                <p>viraj.ag007@gmail.com</p>
              </a>
            </div>
            <div className="details">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/agarwalviraj"
              >
                <FaGithub size={18} />
                <p>GitHub</p>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/agarwalviraj"
              >
                <FaLinkedin size={18} />
                <p>Linkedin</p>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/virajag007"
              >
                <FaTwitter size={18} />
                <p>Twitter</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Application>
  );
};

export default ContactMe;
