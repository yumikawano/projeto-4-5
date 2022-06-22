
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { selectCart } from "../../store/slices/cardSlice";
import { selectUser } from "../../store/slices/userSlice";
import { Calculate } from "./calculate";
import { YourOrder } from "./youorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import { CustomButton } from "../../components/CustomButton";

export function CartView () {    
    const productsCart = useSelector(selectCart)
    const user = useSelector(selectUser)
    return (
        <Layout>
            {!productsCart || !user ? (
                <Container className="d-flex flex-column align-items-center gap-4">
                    <PageTitle>Ops! Seu carrinho ainda está vazio.</PageTitle>
                    <FontAwesomeIcon icon={faShoppingBag} width={250} height={250} />
                        <CustomButton to="/produtos">Adicionar mais itens</CustomButton>
                        <CustomButton to="/novo-pedido">Finalizar pedido</CustomButton>
                </Container>
            ) : (
                <Container>
                    <StyledContainer>
                        <YourOrder product={productsCart}/>
                        <Calculate products={productsCart} user={user}/>
                    </StyledContainer>
                </Container>
            )}
        </Layout>
    )
}

const StyledContainer = styled(Container)`
    max-width: 960px !important;`