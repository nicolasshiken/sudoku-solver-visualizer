import { useState } from "react";
import socialIcons from "../utils/socialIcons.json";

const Nav = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Sudoku Solver</div>
        <div
          className="menu-opener"
          onClick={() => setNavOpened((prev) => !prev)}
        >
          {navOpened ? "Close" : "Menu"}
        </div>
        <ul className={`nav-links ${navOpened ? "opened" : undefined}`}>
          <li>
            <a target="_blank" href="https://nicolasshiken.github.io/">
              Nicolas Shiken
              <svg className="contact-icon" viewBox="0 0 3000 3000">
                <path d="M1500,921.91c169.135,6.531 328.282,72.075 502.838,187.024c91.143,7.605 97.063,-460.745 73.427,-1030.17c576.401,230.598 788.117,648.218 726.791,1222.08l196.944,120.59l-169.135,154.823l169.135,67.654l-180.844,204.262l180.844,59.848c-18.099,66.427 -49.988,113.549 -102.782,131.404c-165.443,49.084 -332.224,106.191 -501.137,176.092c-291.588,182.866 -601.55,361.829 -801.916,563.015c-22.309,91.571 -53.382,140.673 -94.165,142.716c-40.783,-2.043 -71.856,-51.145 -94.165,-142.716c-200.366,-201.186 -510.328,-380.149 -801.916,-563.015c-168.913,-69.901 -335.694,-127.008 -501.137,-176.092c-52.794,-17.855 -84.683,-64.977 -102.782,-131.404l180.844,-59.848l-180.844,-204.262l169.135,-67.654l-169.135,-154.823l196.944,-120.59c-61.326,-573.86 150.39,-991.48 726.791,-1222.08c-23.636,569.43 -17.716,1037.78 73.427,1030.17c174.556,-114.949 333.703,-180.493 502.838,-187.024" />
              </svg>
            </a>
          </li>
          {socialIcons.map((icon) => (
            <li key={icon.id}>
              <a target="_blank" href={icon.href}>
                <svg className="contact-icon" viewBox={icon.viewBox}>
                  <path d={icon.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
