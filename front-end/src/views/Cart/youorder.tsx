import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { PageTitle } from "../../components/PageTitle";
import { product } from "../../entities/Products";
import { deleteToCart } from "../../store/slices/cardSlice";

type productCart = {
    product: product
}

export function YourOrder (  { product }:productCart) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteToCart())
    }

    return(
        <>
            <PageTitle>Seu Pedido</PageTitle>
            <StyledDiv>
                <DivImageAndProduct>
                    <img src={product.image} alt={product.name} height={100} width={100}/>
                    <div>
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                    </div>
                </DivImageAndProduct>
                <DivPriceQtyAndTrash>
                    <div>1</div>
                    <p className="mb-0">{product.price.toLocaleString('pt-BR', { style:'currency', currency:'BRL' })}</p>
                    <Button 
                        variant="transparent"
                        onClick={handleDelete}    
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </Button>
                </DivPriceQtyAndTrash>
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
    border-bottom: #E0E0E0 1px solid;
    border-top: #E0E0E0 1px solid;
    > div {
        font-size: .75rem;
    }
    @media(min-width: 992px){
        grid-template-columns: auto auto;
        gap: 100px
    }
`

const DivImageAndProduct = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`

const DivPriceQtyAndTrash = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
    font-size: 1rem !important;
    align-items: center;
    > div {
        padding: 10px 32px;
        border: #333 1px solid;
        border-radius: 10px;
    }
    > p{
        font-weight: 700;
    }
`