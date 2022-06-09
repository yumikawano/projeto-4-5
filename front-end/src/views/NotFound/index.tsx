import { Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";

export function NotFoundView () {
  return (
    <Layout>
      <Container className="text-center">
        <h3>Página não encontrada</h3>
        <p>A página que você está tentando acessar não foi encontrada ou foi movida.</p>
        <p>Utilize o menu superior para encontrar o que deseja.</p>
      </Container>
    </Layout>
  )
}