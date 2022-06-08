import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
                            <NavLinkStyled as={Link} to="/">Início</NavLinkStyled>
                            <NavLinkStyled as={Link} to="/produtos">Velas Aromáticas</NavLinkStyled>
                            <NavLinkStyled as={Link} to="/sobre">Quem Somos</NavLinkStyled>
                            <NavLinkStyled as={Link} to="/contato">Contato</NavLinkStyled>
                            <NavLinkStyled as={Link} to="/login"><FontAwesomeIcon icon={faUser} />Login | Cadastre-se</NavLinkStyled>
                            <NavLinkStyled as={Link} to="/cart"><FontAwesomeIcon icon={faCartArrowDown} /></NavLinkStyled>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
        </header>
    )
}

const NavLinkStyled = styled(Nav.Link)`
  @media (min-width: 992px) {
    color: #000000 !important;
    font-size: 25px;
    padding: 20px;
    text-decoration: none;
  }
`