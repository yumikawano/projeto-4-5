import React from "react"
import { Layout } from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Google from "../../assets/images/Google-Maps.png"
import { Button, Container, Image } from "react-bootstrap";
import styled from "styled-components";

export function ContatoView () {
    return (
        <Layout>
            <ContainerStyled>
            <h1 className="text-center">Contato</h1>
            </ContainerStyled>
            <Container>
            <div className= "row">
                <div className= "col">
                <h3>FALE COM A GENTE</h3>
            <Button href="https://wa.me/+5544988251854" target="_blank" variant="light" ><FontAwesomeIcon icon={faWhatsapp} />WHATSAPP (44) 9 8825-1854</Button>
            <Button href="" target="_blank" variant="light" ><FontAwesomeIcon icon={faEnvelope} />CONTATO@MAGIADASVELAS.COM.BR</Button>
                </div>
                <div className= "col">
                <h3>REDES SOCIAIS</h3>
            <Button href="https://www.instagram.com/magiadasvelasmga/" target="_blank" variant="light"><FontAwesomeIcon icon={faInstagramSquare} />INSTAGRAM</Button>   
            <Button href="https://www.facebook.com/yumi.kawano.589" target="_blank" variant="light" ><FontAwesomeIcon icon={faFacebookSquare} />FACEBOOK</Button>
                </div>
                <div className="col">
                <Image src={Google} width={507} height={346}/>
                </div>
            </div>
            </Container>
        </Layout>
    )
}

const ContainerStyled = styled.div`
  @media (min-width: 992px) {
    width: 100%;
    height: 150px;
  }
`