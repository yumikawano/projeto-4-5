import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <header>
                <Navbar>
                    <Container>
                        <Navbar.Brand to="/" as={Link}>
                        <img src={Logo}  className="logo"
                alt="Logo Magia das Velas"
                width={202}
                height={202} />
                        </Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav>
                            <Nav.Link as={Link} to="/">Início</Nav.Link>
                            <Nav.Link as={Link} to="/produtos">Velas Aromáticas</Nav.Link>
                            <Nav.Link as={Link} to="/sobre">Quem Somos</Nav.Link>
                            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                            <Nav.Link as={Link} to="/login"><FontAwesomeIcon icon={faUser} />Login | Cadastre-se</Nav.Link>
                            <Nav.Link as={Link} to="/cart"><FontAwesomeIcon icon={faCartArrowDown} /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
        </header>
    )
}