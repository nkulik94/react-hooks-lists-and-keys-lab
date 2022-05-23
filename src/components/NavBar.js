import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksLis = links.map(link => <a href={`#${link}`} key={link}>{link}</a>)
  return <nav>{linksLis}</nav>;
}

export default NavBar;
