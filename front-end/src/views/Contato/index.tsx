import React from "react"
import { Layout } from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Google from "../../assets/images/Google-Maps.png"
import { Container } from "react-bootstrap";

export function ContatoView () {
    return (
        <Layout>
            <h1>Contato</h1>
            <Container>
            <div className= "row">
                <div className= "col">
                <h3>FALE COM A GENTE</h3>
            <p><FontAwesomeIcon icon={faWhatsapp} />WHATSAPP (44) 9 8825-1854</p>
            <p><FontAwesomeIcon icon={faEnvelope} />CONTATO@MAGIADASVELAS.COM.BR</p>
                </div>
                <div className= "col">
                <h3>REDES SOCIAIS</h3>
            <p><FontAwesomeIcon icon={faInstagramSquare} />INSTAGRAM</p>   
            <p><FontAwesomeIcon icon={faFacebookSquare} />FACEBOOK</p>
                </div>
                <div className="col">
                <img src={Google} width={507} height={346}/>
                </div>
            </div>
            </Container>
        </Layout>
    )
}