import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import computeIcon from "../Icons/computer.png";
import earthSpinning from "../Icons/earth-spinning.gif";
import { CSSTransition } from "react-transition-group";

import "animate.css";
import {
  DiJavascript,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiPython,
} from "react-icons/di";
import { AiOutlineApi, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaReact, FaLanguage } from "react-icons/fa";
import { TbBrandCypress } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

import "./HomePage.css";
import CardEstudos from "../Components/CardEstudos/CardEstudos";
import CardHabilidades from "../Components/CardHabilidades/CardHabilidades";
import Fireworks from "@fireworks-js/react";
import axios from "axios";
import CardRepo from "../Components/CardRepo/CardRepo";

const apiURL = import.meta.env.VITE_API;

function HomePage() {
  const estudosList = [
    {
      titulo: "Graduação Engenharia Mecânica",
      lugar: "Universidade do Vale do Itajaí",
    },
    {
      titulo: "Introdução à Ciência da Computação com Python Parte 1",
      lugar: "Universidade de São Paulo",
    },
    { titulo: "Full Stack Javascript", lugar: "OneBitCode" },
  ];

  const habilidadesList = [
    { nome: "React", icon: <FaReact /> },
    { nome: "Javascript", icon: <DiJavascript /> },
    { nome: "Css", icon: <DiCss3 /> },
    { nome: "Git", icon: <BsGit /> },
    { nome: "API", icon: <AiOutlineApi /> },
    { nome: "Html", icon: <DiHtml5 /> },
    { nome: "Python", icon: <DiPython /> },
    { nome: "Inglês", icon: <FaLanguage /> },
    { nome: "Cypress", icon: <TbBrandCypress /> },
  ];

  const contatos = [
    {
      icon: <DiGithubBadge />,
      nome: "Clique para acessar",
      value: "github",
      url: "https://github.com/beckerhenrique",
      function: "clickContact()",
      classname: "notSelectable",
    },
    {
      icon: <AiOutlineMail />,
      nome: "henriquebecker97@hotmail.com",
      value: "email",
      classname: "notSelectable",
    },
    {
      icon: <AiOutlinePhone />,
      nome: "47 996173851",
      value: "telephone",
      classname: "notSelectable",
    },
  ];

  const [sobreBtn, setSobreBtn] = useState(false);
  const [projetosBtn, setProjetosBtn] = useState(false);
  const [contatosBtn, setContatosBtn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fireWorks, setFireWorks] = useState(true);
  const [showSecondIntro, setShowSecondIntro] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("");

  useEffect(() => {
    getRepositories();
    const timeoutId = setTimeout(() => {
      setFireWorks(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!fireWorks) {
      const timeOutId = setTimeout(() => {
        setShowSecondIntro(true);
      }, 1000);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [fireWorks]);

  const getRepositories = async () => {
    axios.get(apiURL).then((data) => {
      const repo = data.data;
      console.log(repo);
      setRepositories(repo);
    });
  };

  const clickContact = (value) => {
    if (value === "github") {
      window.open("https://github.com/beckerhenrique", '_blank')
    }else{
      if (value === "email") {
        const email = "henriquebecker97@hotmail.com"
        navigator.clipboard.writeText(email)
        setTimeout(() => {
          window.alert("Email copiado!")
        }, 200);
      }else{
        const number = "47 996173851"
        navigator.clipboard.writeText(number)
        setTimeout(() => {
          window.alert("Número copiado!")
        }, 200);
      }
    }
    
  };

  const btnChange = (value) => {
    setSelectedBtn(value);
    if (value === "Sobre") {
      setProjetosBtn(false);
      setContatosBtn(false);
      setShowIntro(false);
      setTimeout(() => {
        setSobreBtn(true);
      }, 1000);
    }
    if (value === "Projetos") {
      setSobreBtn(false);
      setContatosBtn(false);
      setShowIntro(false);
      setTimeout(() => {
        setProjetosBtn(true);
      }, 1000);
    }
    if (value === "Contatos") {
      setSobreBtn(false);
      setProjetosBtn(false);
      setShowIntro(false);
      setTimeout(() => {
        setContatosBtn(true);
      }, 1000);
    }
    console.log(value);
  };

  return (
    <div className="homePage">
      <Navbar btnChange={btnChange} selected={selectedBtn} />
      <CSSTransition
        in={showIntro}
        timeout={1000}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
        unmountOnExit
      >
        <section className="introducao">
          <CSSTransition
            in={fireWorks}
            timeout={1000}
            classNames={{
              enter: "fade-enter",
              enterActive: "fade-enter-active",
              exit: "fade-exit",
              exitActive: "fade-exit-active",
            }}
            unmountOnExit
          >
            <Fireworks
              className="fireWorks"
              options={{
                rocketsPoint: {
                  min: 0,
                  max: 100,
                },
              }}
            />
          </CSSTransition>
          {showSecondIntro && (
            <CSSTransition
              in={!fireWorks}
              timeout={1000}
              classNames={{
                enter: "fade-enter",
                enterActive: "fade-enter-active",
                exit: "fade-exit",
                exitActive: "fade-exit-active",
              }}
              unmountOnExit
            >
              <section>
                <h1>Seja Bem Vindo(a) ao meu Portifólio</h1>
                <img src={computeIcon} />
              </section>
            </CSSTransition>
          )}
        </section>
      </CSSTransition>
      <CSSTransition
        in={sobreBtn}
        timeout={1000}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
        unmountOnExit
      >
        <section className="sobre">
          <section className="tituloSobre">
            <h1>INFORMAÇÕES SOBRE MIM</h1>
            <h3 className="descricaoPessoal">
              Me chamo Henrique Becker, sou formado em Engenharia Mecânica e
              estou atualmente em transição de carreira, estudo diariamente para
              me tornar um Desenvolvedor Front-End.
            </h3>
          </section>
          <section className="estudos">
            <h3>Formações</h3>
            <section className="cardsEstudos">
              {estudosList.map((estudos, index) => (
                <CardEstudos
                  titulo={estudos.titulo}
                  lugar={estudos.lugar}
                  key={index}
                />
              ))}
            </section>
          </section>
          <section className="habilidades">
            <h3>Habilidades</h3>
            <section className="cardHabilidadesContainer">
              {habilidadesList.map((habilidade, index) => (
                <CardHabilidades
                  nome={habilidade.nome}
                  icon={habilidade.icon}
                  className="cardHabilidadesUn"
                  key={index}
                />
              ))}
            </section>
          </section>
        </section>
      </CSSTransition>
      <CSSTransition
        in={projetosBtn}
        timeout={1000}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
        unmountOnExit
      >
        <section className="projetos">
          {repositories.map((repositorie, index) => (
            <CardRepo
              name={repositorie.name}
              description={repositorie.description}
              html_url={repositorie.html_url}
              key={index}
            />
          ))}
        </section>
      </CSSTransition>
      <CSSTransition
        in={contatosBtn}
        timeout={1000}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
        unmountOnExit
      >
        <section className="contatos">
          <img src={earthSpinning} alt="" />
          <section className="contatosInfos">
            {contatos.map((contato, index) => (
              <CardHabilidades
                classname={contato.classname}
                icon={contato.icon}
                nome={contato.nome}
                clickContact={clickContact}
                value={contato.value}
                key={index}
              />
            ))}
          </section>
        </section>
      </CSSTransition>
    </div>
  );
}

export default HomePage;
