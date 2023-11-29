import React, { useState } from "react";
import { Link } from "react-router-dom";
import save from "../service/Acciones";
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

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ marginTop:"-20px", marginBottom:"-20px" ,backgroundImage: `url(${Fondo})` }}>
    <div className="container text-center" style={{ marginTop: "75px" }}>
    <img src={Logo} alt="" style={{ width: "900px", height: "100%", marginTop: "100px", }} />
    <br/>
    <p style={{ textAlign: "center", marginTop: "20px", color:"white" }}>
        ¡Únete a nuestra comunidad de Rick y Morty! Regístrate ahora para recibir ofertas exclusivas y estar al tanto de las últimas actualizaciones del universo interdimensional. Sé el primero en enterarte de nuevos productos, promociones especiales y contenido exclusivo. ¡No te pierdas la diversión, regístrate hoy y forma parte de la locura de Rick y Morty!
    </p>
      <form>
        <div className="form-group">
          <input
            onKeyUp={(event) => setCorreo(event.target.value)}
            type="email"
            name="correo"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <br />
        <div className="form-group">
          <input
            onKeyUp={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <br/>
        <br/>
        <Link
          className="btn btn-primary"
          to={"http://localhost:3000/"}
          onClick={(e) => {
            save(correo, password);
          }}
        >
          Añadir usuario
          <br></br>
        </Link>
      </form>


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

export default Login;
