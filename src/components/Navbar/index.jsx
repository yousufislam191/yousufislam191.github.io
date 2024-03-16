import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  // GitHubButton,
  // ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
// import { Close, CloseRounded } from '@mui/icons-material';
// import { useTheme } from "styled-components";
// import { Bio } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState("about");
  // const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Yousuf Islam</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink
            href="#about"
            onClick={() => setActiveLink("about")}
            isActive={activeLink === "about"}
          >
            About
          </NavLink>
          <NavLink
            href="#skills"
            onClick={() => setActiveLink("skills")}
            isActive={activeLink === "skills"}
          >
            Skills
          </NavLink>
          <NavLink
            href="#experience"
            onClick={() => setActiveLink("experience")}
            isActive={activeLink === "experience"}
          >
            Experience
          </NavLink>
          <NavLink
            href="#projects"
            onClick={() => setActiveLink("projects")}
            isActive={activeLink === "projects"}
          >
            Projects
          </NavLink>
          <NavLink
            href="#education"
            onClick={() => setActiveLink("education")}
            isActive={activeLink === "education"}
          >
            Education
          </NavLink>
        </NavItems>
        {/* <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer> */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            {/* <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton> */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
