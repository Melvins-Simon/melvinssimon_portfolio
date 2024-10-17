import { gh, ln, wa } from "../assets";

export const NavLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About",
    path: "/about",
  },
  {
    id: 3,
    label: "Experience",
    path: "/experience",
  },
  {
    id: 4,
    label: "Skills",
    path: "/skills",
  },
  {
    id: 5,
    label: "Projects",
    path: "/projects",
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
  },
];

export const connect = [
  {
    id: 1,
    src: ln,
    to: "#",
    label: "Linked In",
  },
  {
    id: 2,
    src: gh,
    to: "#",
    label: "Github",
  },
  {
    id: 3,
    src: wa,
    to: "#",
    label: "Whatsapp",
  },
];
