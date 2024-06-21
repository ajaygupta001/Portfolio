import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/71979627?s=400&u=daa4aaf50db98f8a5c063fe34fee6fb2621722fc&v=4"}
          alt="Founder"
        />

        <h2>Ajay Gupta</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/ajay-gupta-516299238/" target={"blank"}>
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/ajaygupta001" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
