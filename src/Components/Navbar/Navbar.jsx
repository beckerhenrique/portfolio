import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import PhotoHenrique from "../../Icons/foto-henrique.jpg";
import "./Navbar.css";
import { Info, Kanban, Telephone } from "react-bootstrap-icons";
import BtnNavbar from "../BtnNavbar/BtnNavbar";

function Navbar({ btnChange, selected }) {
  const navbarBtns = [
    {
      description: "Sobre",
      classname: "btnNavbar",
      value: "sobre",
      icon: <Info />,
    },
    {
      icon: <Kanban />,
      description: "Projetos",
      className: "btnNavBar",
      value: "projetos",
    },
    {icon: <Telephone />,
    description: "Contatos",
    className: "btnNavBar",
    value: "contatos"}
  ];

  return (
    <header className="navBarPage">
      <section className="navBar">
        <section className="logoName">
          <img src={PhotoHenrique} alt="" />
          <h3>Henrique Becker</h3>
          <p>Desenvolvedor Front-End</p>
        </section>
        <section className="btnSpace">
          {navbarBtns.map((navbarBtn, index) => (
            <BtnNavbar description={navbarBtn.description} className={navbarBtn.className} value={navbarBtn.value} icon={navbarBtn.icon} key={index} btnChange={btnChange} selected={selected}/>
          ))}
        </section>
      </section>
    </header>
  );
}

export default Navbar;
