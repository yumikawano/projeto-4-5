import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, selectIsUserLoggedIn } from "../../store/slices/userSlice";
import { logoutUser } from "../../services/logoutUser";

export function Header () {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
    await logoutUser()
    dispatch(deleteUser())
    navigate('/login')
  }
    return (
        <header>
                <Navbar>
                    <Container>
                        <Navbar.Brand to="/" as={Link}>
                        <Image src={Logo}  className="logo"
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
                            <NavLinkStyled as={Link} to="/cadastro"><FontAwesomeIcon icon={faUser} />Login | Cadastre-se</NavLinkStyled>
                            <NavLinkStyled as={Link} to="/cart"><FontAwesomeIcon icon={faCartArrowDown} /></NavLinkStyled>
                            {isUserLoggedIn ? (
                                <>
                                <NavLinkStyled onClick={handleLogout}>Sair</NavLinkStyled>
                                </>
                              ) : (
                                <>
                                </>
                              )}
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