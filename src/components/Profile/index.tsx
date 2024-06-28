import React from "react";
import "./style.scss";
import foto_perfil from "../../assets/images/foto_perfil.png";

class Profile extends React.Component {
  render() {
    return (
      <div className="DivMainProfile">
        <div className="DivImg">
          <div></div>
          <img
            src={foto_perfil}
            alt="Desenho de uma personagem. Feito por Heloise Katharine"
          />
        </div>
        <div>
          <h1>Olá!!! {<br />} Eu sou Heloise Katharine</h1>
        </div>
      </div>
    );
  }
}

export default Profile;
