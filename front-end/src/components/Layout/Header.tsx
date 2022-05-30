import { Button, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <header>
            <Container>
                <img src={Logo}  className="logo"
                alt="Logo Magia das Velas"
                width={202}
                height={202} />
                <Button as={Link} to="/" variant="light">Início</Button>
                <Button as={Link} to="/produtos" variant="light">Velas Aromáticas</Button>
                <Button as={Link} to="/sobre" variant="light">Quem Somos</Button>
                <Button as={Link} to="/contato" variant="light">Contato</Button>
                <Button as={Link} to="/login" variant="light">
                <FontAwesomeIcon icon={faUser} />Cadastre-se | Login</Button>
                <Button variant="light">
                <FontAwesomeIcon icon={faCartArrowDown} />
                </Button>
            </Container>
        </header>
    )
}