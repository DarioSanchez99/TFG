
import React from "react";
import Logo from "../images/Rick_and_Morty.png"
import Fondo from "../images/fondoRickMorty.jpeg"
import Twitter from "../images/twitter.png"
import Linkedin from "../images/linkedin.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Github from "../images/github.png"

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Inicio = () => {
  return (
    <div  style={{ marginTop:"-20px", marginBottom:"-20px" ,backgroundImage: `url(${Fondo})` }}>
      <div className="container text-center" style={{ marginTop: "25px", }}>
        {/* Logo */}
        <img src={Logo} alt="" style={{ width: "900px", height: "300px", margin: "100px" }} />
        <h5 style={{color:"white"}}>
        ¡Bienvenido a la aventura interdimensional de Rick y Morty! Explora nuestra plataforma para conocer a todos tus personajes favoritos, resuelve preguntas intrigantes sobre la serie y descubre una amplia variedad de merchandising que hará las delicias de los fanáticos. Sumérgete en el multiverso de Rick y Morty con nosotros. ¡Prepárate para una experiencia épica! 🚀🛸
        </h5>
        <hr />
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <a style={{color:"white"}}>
      Gracias por elegir la página creada por Darío Sánchez Iturralde. Explora y disfruta de una experiencia única. ¡Bienvenido!
      </a>
      </div>

      <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <img src={Facebook} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <img src={Twitter} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <img src={Instagram} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <img src={Linkedin} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <img src={Github} alt="" style={{ width: "30px", height: "30px" }} />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

    </div>
  );
};

export default Inicio;
