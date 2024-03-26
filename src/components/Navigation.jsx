import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../components/Navigation.css";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <>
      <Navbar className="navigation">
        <Container>
          <h1>
            {" "}
            <img src="src\assets\img\Pokebola-pokeball-png-0.png" alt="" />
            PokeReact
          </h1>
          <Nav className="ms-auto">
            <NavLink to="/" className={setActiveClass}>
              Home
            </NavLink>
            <NavLink to="/pokemones" className={setActiveClass}>
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
