import React, { useState, useEffect } from 'react';
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


const Personajes = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [datos, setDatos] = useState(null);

  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${paginaActual}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error('Error al obtener datos desde la API:', error));
  }, [apiUrl]);

  const avanzarPagina = () => {
    setPaginaActual(paginaActual + 1);
  };

  const retrocederPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div  style={{backgroundImage: `url(${Fondo})` }}>
      <div style={{marginTop : "50px"}}>
        <button style={{margin:"15px"}} type="button" class="btn btn-dark" onClick={retrocederPagina} disabled={paginaActual === 1}>Retroceder</button>
        <button style={{margin:"15px"}} type="button" class="btn btn-dark" onClick={avanzarPagina}>Avanzar</button>
        
        {datos && (
          <div className="row text-bg-dark">
            {/* Renderiza los datos obtenidos de la API */}
            {datos.results.map(character => (
              <div className="col">
              <div>
                <div
                  key={character.id}
                  className="card border-info text-bg-dark"
                  style={{
                    width: "18rem",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src={character.image}
                    className="card-img-top text-bg-dark"
                    alt=""
                    style={{
                      width: "200px",
                      alignSelf: "center",
                      margin: "20px",
                      height: "200px",
                    }}
                  />
                  <div className="card text-center text-bg-dark">
                    <div className="card-body">
                      <h5 className="card-title">Nombre: {character.name}</h5>
                      <p className="card-text">Especie: {character.species}</p>
                      <p className="card-text">Genero: {character.gender}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}
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

export default Personajes;
