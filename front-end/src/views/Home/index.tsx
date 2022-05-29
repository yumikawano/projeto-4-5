import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";


export function HomeView () {
    return(
        <Container>
        <Title>Magia das velas</Title>
        <Button onClick={() => toast.success('Oi!')}>Entrar</Button>
         </Container>
    )
}
const Title = styled.p`
font-size: 3rem;
`
