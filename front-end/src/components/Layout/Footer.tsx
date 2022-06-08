import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  withoutMargin?: boolean
}

export function Footer  ({ withoutMargin = false }: Props) {
    return (
        <FooterStyled className={`text-center ${withoutMargin ? '' : 'mt-5'}`}>
        <ContainerStyled className="d-lg-flex align-items-center">
            <h3 className="text-center w-100">SUSTENTAVEL | ARTESANAL | ENERGÉTICO</h3>
        </ContainerStyled>
        <Button href="https://wa.me/+5544988251854" target="_blank" variant="light">
            <IconStyled icon={faWhatsapp} />
        </Button>
        <Button href="https://www.facebook.com/yumi.kawano.589" target="_blank"  variant="light">
            <IconStyled icon={faFacebookSquare} />
        </Button>
        <Button href="https://www.instagram.com/magiadasvelasmga/" target="_blank" variant="light">
            <IconStyled icon={faInstagramSquare} />
        </Button>
        <p>Av. Mauá, 1308 / sala 601 - Maringá-PR/ 87050-020</p>
        <p>Segunda a Sexta: 09:00-12:00 / 13:30-18:00 </p>
        <p>© 2022 Magia das Velas - Sinta mais que um aroma Ltda / CNPJ 36.339.339/0001-64
Vnda - Tecnologia em E-commerce</p>
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`
  background: #ffffff;
  padding: 30px 0 40px;
  @media (min-width: 992px) {
    padding: 15px 0;
  }
`

const ContainerStyled = styled.div`
    background-color: #fff3fa;
  @media (min-width: 992px) {
    width: 100%;
    height: 156px;
  }
`

const IconStyled = styled(FontAwesomeIcon)`
  font-size: 40px;
`

