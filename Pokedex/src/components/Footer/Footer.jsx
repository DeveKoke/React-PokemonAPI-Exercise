import React from "react";

const Footer = () => {
  return( 
  <footer>
    <div className="followUs">
      <p>FOLLOW US</p>
      <div className="soc-med">
          <img src="../src/assets/facebook.png" alt="facebook" />
          <img src="../src/assets/twitter.png" alt="Twitter" />
      </div>
    </div>
    <div className="comunity">
      <p>COMUNIDAD</p>
      <a href="https://comunidad.fandom.com/wiki/Comunidad_Central">MAIN COMUNITY</a>
      <a href="https://support.fandom.com/hc/es">SUPPORT</a>
      <a href="https://comunidad.fandom.com/wiki/Ayuda:Contenidos">HELP</a>
    </div>
    <div className="generalInfo">
      <p>GENERAL</p>
      <a href="https://about.fandom.com/about">ABOUT</a>
      <a href="https://about.fandom.com/press">PRESS</a>
      <a href="https://www.fandom.com/es/privacy-policy-es">PRIVACY POLICY</a>
    </div>
  </footer>
  );
};

export default Footer;
