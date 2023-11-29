import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rick y Morty</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Rick y Morty</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link className="nav-link" to={"/"}>Inicio</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/Personajes"}>Personajes</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/Tienda"}>Tienda</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/Test"}>¿Cuanto sabes de Rick y Morty?</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/Login"}>Login</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={"/Multimedia"}>Multimedia</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Nav;
