import { Layout } from "../../components/Layout";
import Foto1 from "../../assets/images/foto1.jpg"
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";

export function QuemSomosView () {
    return(
        <Layout>
            <Container>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <h2 className="text-center">Sinta mais que um aroma, Viva uma sensação! </h2>
                    </div>
                    <div className="col">
                    <Image src={Foto1} width={457} height={700} />
                    </div>
                    <div className="col">
                    <h1>Quem</h1>
            <H1Styled>Somos</H1Styled>
            <H6Styled>Fragrâncias de luxo inspiradas no mundo e produzidas 
no Brasil. Isso é Magia das Velas. Aromas sofisticados, 
feitos para transformar ambientes em experiências 
sensoriais inspiradoras. Somos jovens apaixonados por 
ambientes perfumados.
Nos orgulhamos em oferecer aos nossos clientes produtos 
que contém em sua formulação ingredientes naturais. 
Não somente a qualidade do produto é elevada, como 
também os efeitos do uso de produtos perfumados com 
ingredientes naturais tem maior efetividade e benefícios.

Os ingredientes naturais são derivados de uma fonte 
natural, uma prática rara na indústria de fragrâncias. 
No entanto na Magia das Velas acreditamos nos benefícios
das propriedades dos ingredientes naturais.
</H6Styled>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

const H1Styled = styled.h1`
    margin-left: 50px;
    margin-bottom: 50px;
`

const H6Styled = styled.p`
    font-size: 20px;
`