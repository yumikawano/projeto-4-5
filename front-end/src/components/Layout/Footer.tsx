import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { Button, Container } from "react-bootstrap";

export function Footer () {
    return (
        <footer>
        <Container>
            <h3>SUSTENTAVEL | ARTESANAL | ENERGÉTICO</h3>
        </Container>
        <Button variant="light">
            <FontAwesomeIcon icon={faWhatsapp} />
        </Button>
        <Button variant="light">
            <FontAwesomeIcon icon={faFacebookSquare} />
        </Button>
        <Button variant="light">
            <FontAwesomeIcon icon={faInstagramSquare} />
        </Button>
        <p>Av. Mauá, 1308 / sala 601 - Maringá-PR/ 87050-020</p>
        <p>Segunda a Sexta: 09:00-12:00 / 13:30-18:00 </p>
        <p>© 2022 Magia das Velas - Sinta mais que um aroma Ltda / CNPJ 36.339.339/0001-64
Vnda - Tecnologia em E-commerce</p>
        </footer>
    )
}
