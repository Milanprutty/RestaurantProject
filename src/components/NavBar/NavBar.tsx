import "./NavBar.css";
import F from "../../assets/navbarF.svg";
import oodi from "../../assets/imgs/oodi.png";

import searchIcon from "../../assets/serachIcon.svg";
import shoppingBag from "../../assets/shoppingBag.svg";
import phoneIcon from "../../assets/phone.svg";

import OpenedMenu from "../openedMenu/OpenedMenu";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [style, setStyle] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollPosition(scrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (scrollPosition >= 70 && scrollPosition <= 160) {
      setStyle("rgba(214, 214, 214,0.5)");
    } else if (scrollPosition > 160) {
      setStyle("rgba(214, 214, 214,0.9)");
    } else if (scrollPosition <= 70) {
      setStyle("");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      const targetElement = e.target as HTMLElement;
      if (!targetElement.closest(".hamburger")) {
        setIsOpened(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      className="navbarContainer"
      style={{
        backgroundColor: style,
      }}
    >
      <ul className="navBarUl">
        <div className="foodiLi">
          <div>
            <img src={F} />
          </div>
          <div>
            <img className="foodi" src={oodi} />
          </div>
        </div>
        <div className="centeredItems">
          <li>Home</li>
          <li>menu</li>
          <li>services</li>
          <li>offers</li>
        </div>

        <div className="rightSideItems">
          <li
            onClick={handleClick}
            className={isOpened ? "openmenu hamburger" : "hamburger"}
          >
            <div>
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
          </li>
          <li>
            <img className="searchIcon" src={searchIcon} />
          </li>
          <li>
            <img className="shoppingBag" src={shoppingBag} />
          </li>
          <li className="rightSideBtn">
            <button>
              <img src={phoneIcon} />
              Contact
            </button>
          </li>
        </div>
      </ul>
      <div ref={menuRef}>
        {<OpenedMenu style={isOpened ? "mounted open" : "mounted"} />}
      </div>
    </div>
  );
};

export default NavBar;
