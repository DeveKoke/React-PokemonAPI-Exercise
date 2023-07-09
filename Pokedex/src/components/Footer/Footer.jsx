import React from "react";

const Footer = () => {
  return( 
  <footer>
    <div className="followUs">
      <p>SÍGUENOS</p>
      <div className="soc-med">
          <img src="../src/assets/facebook.png" alt="facebook" />
          <img src="../src/assets/twitter.png" alt="Twitter" />
      </div>
    </div>
    <div className="comunity">
      <p>COMUNIDAD</p>
      <a href="https://comunidad.fandom.com/wiki/Comunidad_Central">COMUNIDAD CENTRAL</a>
      <a href="https://support.fandom.com/hc/es">SOPORTE</a>
      <a href="https://comunidad.fandom.com/wiki/Ayuda:Contenidos">AYUDA</a>
    </div>
    <div className="generalInfo">
      <p>GENERAL</p>
      <a href="https://about.fandom.com/about">ACERCA DE</a>
      <a href="https://about.fandom.com/press">PRENSA</a>
      <a href="https://www.fandom.com/es/privacy-policy-es">POLITICA DE PRIVACIDAD</a>
    </div>
  </footer>
  );
};

export default Footer;
