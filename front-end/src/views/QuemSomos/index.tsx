import { Layout } from "../../components/Layout";
import Foto1 from "../../assets/images/foto1.jpg"
import { Container } from "react-bootstrap";

export function QuemSomosView () {
    return(
        <Layout>
            <Container>
                <div className="row">
                    <div className="col">
                    <h1>Sinta mais que um aroma, Viva uma sensação!</h1>
                    </div>
                    <div className="col">
                    <img src={Foto1} width={457} height={441} />
                    </div>
                    <div className="col">
                    <h1>Quem</h1>
            <h1>Somos</h1>
            <h6>Fragrâncias de luxo inspiradas no mundo e produzidas 
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
</h6>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}