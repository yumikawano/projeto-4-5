import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { getProducts } from "../../services/product";
import { Layout } from "../../components/Layout";
import { product } from "../../entities/Products";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Loading } from "../../components/Loanding";
import { addToCart } from "../../store/slices/cardSlice"

type productsProps = product | null
type item = {
    id: string
    name: string
    image: string
    shortDescription: string
    price: string
}

export function ProductsView () {
    const [Products, setProducts]:any = useState()
        useEffect(() => {
            const fetch = async ():Promise<void | productsProps > => {
                try{
                    const result = await getProducts()
                    setProducts(result)
               } catch{
                    toast.error('Erro ao carregar produtos. Tente novamente', {
                        theme: 'colored'
                    })
               }      
            }
            fetch()
        }, [])
        const dispatch = useDispatch()
    const navigate = useNavigate()
        const handleAddToCart = (item:item) => {
            dispatch(addToCart(Products))
            navigate('/cart')
        }
    return (
        <Layout>
             <Container>
             <PageTitle>Velas Aromáticas</PageTitle>
                {!Products ? (
                    <Loading />
                ) : (
                    <>
                      <Row>
                        {Products.map((item:product) => (
                            <Col key={item.id} className='mb-4' xs={6} md={4} lg={3}>
                            <Card className='text-center shadow h-100' key={item.name}>
                                <Card.Img variant="top" src={item.image} alt={item.name} width={220} height={220}/>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                <Card.Title as='h2' className='h5'>{item.name}</Card.Title>
                                <Card.Text>{item.shortDescription}</Card.Text>
                                <Card.Text as='h5'>{item.price}</Card.Text>
                                <CustomButton onClick={() => handleAddToCart(item)}>Adicionar ao carrinho</CustomButton>
                                <CustomButton to={`/produtos/${item.id}`}>Saiba mais</CustomButton>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                     </Row>
                    </>
                )}                
            </Container>
        </Layout>
    )
}