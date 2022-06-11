import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProducts } from "../../services/product";
import { Layout } from "../../components/Layout";
import { products } from "../../entities/Products";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Loading } from "../../components/Loanding";

export function ProductDetailView() {
    type productsProps = products | null
    type item = {
        id: string
        name: string
        image: string
        description: string
        price: string
    }
    const [Products, setProducts]: any = useState()
    useEffect(() => {
        const fetch = async (): Promise<void | productsProps> => {
            try {
                const result = await getProducts()
                setProducts(result)
            } catch {
                toast.error('Erro ao carregar produto. Tente novamente', {
                    theme: 'colored'
                })
            }
        }
        fetch()
    }, [])
    return (
        <Layout>
            <Container>
                {!Products ? (
                    <Loading />
                ) : (
                    <>
                        <Row>
                            {Products.map((item:item) =>(
                                <><Col key={item.id} className='mb-4' xs={6} md={4} lg={3}>
                                    <Card.Img variant="top" src={item.image} alt={item.name} width={220} height={220} />
                                </Col><Col>
                                        <Card.Body>
                                            <PageTitle>{item.name}</PageTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                            <Card.Text as='h5'>{item.price}</Card.Text>
                                            <CustomButton to={`/cart/${item.id}`}>Adicionar ao carrinho</CustomButton>
                                        </Card.Body>
                                    </Col></>
                            ))}
                        </Row>
                    </>
                    )}
            </Container>
        </Layout>
    )
}