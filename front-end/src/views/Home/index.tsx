import { Button, Container, Carousel } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/Banner3.jpg";


export function HomeView () {
    return(
        <Layout>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} alt="Second slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner3} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            <Container>
                <Title>Magia das velas</Title>
                <Button onClick={() => toast.success('Oi!')}>Entrar</Button>
            </Container>
        </Layout>

    )
}
const Title = styled.p`
font-size: 3rem;
`
