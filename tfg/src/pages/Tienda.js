import React from "react";
import Logo from "../images/Rick_and_Morty.png"
import Fondo from "../images/fondoRickMorty.jpeg"
import Twitter from "../images/twitter.png"
import Linkedin from "../images/linkedin.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Github from "../images/github.png"
import pantuflasRick from "../images/productos/rickymortyzapas.jpg"
import calcetinesRick from "../images/productos/calcetinesRick.jpg"
import sudaderaRick from "../images/productos/sudaderaRick.jpg"
import alfombrillaRick from "../images/productos/alfombrillaRick.jpg"
import tazaRick from "../images/productos/tazaRick.jpg"
import petacaRick from "../images/productos/petacaRick.jpg"
import pijamaRick from "../images/productos/pijamaRick.jpg"
import sudaderaRick2 from "../images/productos/sudaderaRick2.jpeg"
import carteraRick from "../images/productos/carteraRick.jpg"
import lamparaRick from "../images/productos/lamparaRick.jpg"
import LogoTienda from "../images/logoTiendaRick.jpeg"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Tienda = () => {
  return (
<div  style={{ marginTop:"-50px", marginBottom:"-20px" ,backgroundImage: `url(${Fondo})`, color:"white"}}>
<div className="container text-center">
<img src={LogoTienda} alt="" style={{ width: "300px", height: "300px", marginTop: "120px"}} />
<h5 style={{color:"white"}}>
Explora nuestro universo de productos de Rick y Morty en la tienda online definitiva. Desde camisetas con diseños únicos hasta gadgets intergalácticos, encuentra el regalo perfecto para los verdaderos fans. ¡Sumérgete en el caos controlado y haz tu pedido hoy!
</h5>
<br></br>
<br></br>
<table>
<thead>
<th>
  <a href="https://www.amazon.es/Rick-Morty-Zapatillas-Casa-Hombre/dp/B0BXY2R1KL/ref=sr_1_2_sspa?crid=2KATOUXU8G3IY&keywords=rick%2Band%2Bmorty&qid=1699867101&sprefix=ric%2Caps%2C194&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1" target="_blank">
    <img src={pantuflasRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</th>
<th>
  <a href="https://www.amazon.es/soxo-Calcetines-Navidad-Originales-Divertidos/dp/B0CHW2ML9H/ref=sr_1_1_sspa?crid=2KATOUXU8G3IY&keywords=rick+and+morty&qid=1699867656&sprefix=ric%2Caps%2C194&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" target="_blank">
    <img src={calcetinesRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</th>
<th>
  <a href="https://www.amazon.es/Rick-Morty-Sudadera-Oversize-Hombre/dp/B0B8NYXW7F/ref=sr_1_5?crid=2KATOUXU8G3IY&keywords=rick+and+morty&qid=1699867656&sprefix=ric%2Caps%2C194&sr=8-5" target="_blank">
    <img src={sudaderaRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</th>
<th>
  <a href="https://www.amazon.es/Rick-Morty-Alfombrilla-Rat%C3%B3n-XXL/dp/B0C3ZX8TBH/ref=sr_1_9?crid=2KATOUXU8G3IY&keywords=rick+and+morty&qid=1699867656&sprefix=ric%2Caps%2C194&sr=8-9" target="_blank">
    <img src={alfombrillaRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</th>
<th>
  <a href="https://www.amazon.es/SD-toys-Morty-Cer%C3%A1mica-Color/dp/B08WM1X11L/ref=sr_1_15?crid=2KATOUXU8G3IY&keywords=rick+and+morty&qid=1699867656&sprefix=ric%2Caps%2C194&sr=8-15" target="_blank">
    <img src={tazaRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</th>
</thead>
<tbody>
<tr>
<td>
  <a href="https://www.amazon.es/Paladone-Rick-Flask-Wubba-Dub-Dub/dp/B07FP19K54/ref=sr_1_20?crid=2KATOUXU8G3IY&keywords=rick+and+morty&qid=1699867656&sprefix=ric%2Caps%2C194&sr=8-20" target="_blank">
    <img src={petacaRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>  
</td>
<td>
  <a href="https://www.amazon.es/Rick-Morty-Invierno-Conjunto-Adolescentes/dp/B086255G8Y/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rick+and+morty&qid=1699871640&sr=8-15" target="_blank">
    <img src={pijamaRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</td>
<td>
  <a href="https://www.amazon.es/Rick-Morty-Alternate-Reality-Sudadera/dp/B097YQHCT9/ref=sr_1_33_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rick+and+morty&qid=1699871944&sr=8-33-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1" target="_blank">
    <img src={sudaderaRick2} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</td>
<td>
  <a href="https://www.amazon.es/Rick-Morty-Cartera-para-Hombres/dp/B0BTPMY3MY/ref=sr_1_32?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rick+and+morty&qid=1699871944&sr=8-32" target="_blank">
    <img src={carteraRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</td>
<td>
  <a href="https://www.amazon.es/soxo-Calcetines-Navidad-Originales-Divertidos/dp/B0CHW2ML9H/ref=sr_1_1_sspa?crid=2KATOUXU8G3IY&keywords=rick+and+morty&qid=1699867656&sprefix=ric%2Caps%2C194&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" target="_blank">
    <img src={lamparaRick} alt="" style={{ width: "200px", height: "200px", margin:"20px"}} />
  </a>
</td>
</tr>
</tbody>
</table>
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
}

export default Tienda;
