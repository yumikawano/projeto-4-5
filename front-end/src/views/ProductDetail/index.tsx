import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProductsById} from "../../services/product";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Loading } from "../../components/Loanding";
import { useParams } from "react-router-dom"
import { product } from "../../entities/Products"

export function ProductDetailView() {
    const {id} = useParams()
    const [Product, setProduct] = useState<product | null>(null)
    useEffect(() => {
        const fetch = async () => {
            try {
                if (id) {
                    const result = await getProductsById(id)
                    setProduct(result)
                }
            } catch {
                toast.error('Erro ao carregar produto. Tente novamente', {
                    theme: 'colored'
                })
            }
        }
        fetch()
    }, [id])
    return (
        <Layout>
            <Container>
                {!Product ? (
                    <Loading />
                ) : (
                    <>
                        <Row>
                                <Col className='mb-4' xs={6} md={4} lg={3}>
                                    <Card.Img variant="top" src={Product.image} alt={Product.name} width={220} height={220} />
                                </Col><Col>
                                        <Card.Body>
                                            <PageTitle>{Product.name}</PageTitle>
                                            <Card.Text>{Product.description}</Card.Text>
                                            <Card.Text as='h5'>{Product.price}</Card.Text>
                                            <CustomButton to={`/cart/${Product.id}`}>Adicionar ao carrinho</CustomButton>
                                        </Card.Body>
                                    </Col>
                        </Row>
                    </>
                    )}
            </Container>
        </Layout>
    )
}