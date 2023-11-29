import React from "react";
import Fondo from "../images/fondoRickMorty.jpeg"
import Twitter from "../images/twitter.png"
import Linkedin from "../images/linkedin.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Github from "../images/github.png"
import fondo1 from "../images/Multimedia/fondo1.jpg"
import fondo2 from "../images/Multimedia/fondo2.jpg"
import fondo3 from "../images/Multimedia/fondo3.jpg"
import fondo4 from "../images/Multimedia/fondo4.jpeg"
import fondo5 from "../images/Multimedia/fondo5.png"
import fondo6 from "../images/Multimedia/fondo6.jpg"
import fondo7 from "../images/Multimedia/fondo7.jpg"
import fondo8 from "../images/Multimedia/fondo8.jpg"
import fondo9 from "../images/Multimedia/fondo9.jpg"
import fondo10 from "../images/Multimedia/fondo10.jpg"
import titulo from "../images/Multimedia/titulo.jpg"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Multimedia = () => {
  return (
<div  style={{ marginTop:"-50px", marginBottom:"-20px" ,backgroundImage: `url(${Fondo})`, color:"white"}}>
<div className="container text-center">
<img src={titulo} alt="" style={{ width: "500px", height: "300px", marginTop: "120px"}} />
<h5 style={{color:"white"}}>
Explora nuestro universo de productos de Rick y Morty en la tienda online definitiva. Desde camisetas con diseños únicos hasta gadgets intergalácticos, encuentra el regalo perfecto para los verdaderos fans. ¡Sumérgete en el caos controlado y haz tu pedido hoy!
</h5>
<br></br>
<br></br>
<table>
<thead>
<th>
<img src={fondo1} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</th>
<th>
<img src={fondo2} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</th>
<th>
<img src={fondo3} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</th>
<th>
<img src={fondo4} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</th>
<th>
<img src={fondo5} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</th>
</thead>
<tbody>
<tr>
<td>
<img src={fondo6} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</td>
<td>
<img src={fondo7} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</td>
<td>
<img src={fondo8} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</td>
<td>
<img src={fondo9} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
</td>
<td>
<img src={fondo10} alt="" style={{ width: "300px", height: "200px", margin:"20px"}} />
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

export default Multimedia;
