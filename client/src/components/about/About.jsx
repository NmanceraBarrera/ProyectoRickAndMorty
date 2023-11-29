import React from "react";
import style from "./about.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function AboutPage() {
  return (
    <div className={style.container}>
      <div className={style.divsisho}>
        <h1 className={style.title}>About Us</h1>
        <p className={style.pabout}>
          Rick Sánchez es la definición exacta de "científico loco". Es
          alcohólico, es un genio, es irresponsable y está loco. Rick acaba de
          mudarse a casa de su hija Beth y allí recuerda que tiene un nieto
          llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que
          le acompañe a todo tipo de aventuras para que el chico se vuelva
          inteligente como él y no se convierta en un idiota como Jerry, padre
          de Morty y yerno de Rick.Así, Rick y Morty comienzan a vivir aventuras
          intergalácticas a pesar de que la familia no quiere que lo sigan
          haciendo. Poco a poco tienen que intentar encontrar un equilibrio
          entre su vida familiar y sus viajes a través del espacio y por
          distintas realidades paralelas, algo que no es fácil para el pequeño
          Morty que es incapaz de tener una vida normal al margen de su
          abuelo.Justin Roiland (Hora de aventuras) es el encargado de dar voz a
          los dos personajes principales: Rick y Morty. Sarah Chalke (Scrubs)
          interpreta a Beth Smith, Chris Parnell (Archer) es Jerry y Spencer
          Grammer (Greek) es Summer Smith, la hermana mayor de Morty. En España,
          el reparto de doblaje está compuesto por Txema Moscoso, Rodri Martín,
          Héctor Indriago, Susana Damas y Sara Iglesias.Rick y Morty es una
          animación de ciencia ficción para adultos creada, producida y escrita
          por Justin Roiland (Hora de aventuras) y Dan Harmon (Community,
          Monster House) para Adult Swim. Justin Roiland's Solo Vanity Card
          Productions, Harmonious Claptrap y Williams Street son las empresas
          productoras junto a Starburns Industries (del año 2013 al 2014) y Rick
          and Morty, LLC. (de 2015 hasta el presente).
        </p>
      </div>

      <footer className={style.footer}>
        <div className={style.footerContainer}>
          <p className={style.pabout}>Creado por Nicolas Mancera Barrera</p>
          <div className={style.redes}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nicolas-mancera-barrera-706764295/"
            >
              <BsLinkedin className={style.icon} />
            </a>
            <a target="_blank" href="https://github.com/NmanceraBarrera">
              <BsGithub className={style.icon} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
