import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import styled from "styled-components";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { PageTitle } from "../../components/PageTitle";
import { product } from "../../entities/Products";
import { User } from "../../entities/User";
import * as yup from 'yup'
import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AutocompleteField } from "../../components/AutocompleteField";
import { Address } from "../../entities/Address";
import { createEstimate, NewEstimateInput } from "../../services/createEstimate";
import { useDispatch } from "react-redux";
import { setCurrentEstimate, clearCurrentEstimate } from "../../store/slices/estimateSlice";
import { Estimate } from "../../entities/Estimate";
import { EstimateFinish } from "../NewOrder/EstimateFinish";
import { useState } from "react";
import { createOrder } from "../../services/createOrder";
import { toast } from "react-toastify";

type CalculeteProps = {
    products: product
    user: User
    currentEstimate?: Estimate
}

type FormValues = {
    name: string
    phone: string
    address: Adress | null
}

export function Calculate ({products, user, currentEstimate}:CalculeteProps) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const formik = useFormik<FormValues>({
        initialValues:{
            name: user.name,
            phone: user.phone,
            address: user.address
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required('Nome deve ser informado.'),
            phone: yup.string()
                .required('Telefone deve ser informado.')
                .min(14, 'Informe um telefone válido'),
            address: yup.object()
                .typeError('Selecione um endereço na lista.')
        }),
        onSubmit: async({address}) =>{
            const values = {
                address,
                subtotal: products.price
            }
            if(!currentEstimate) {
                const estimate = await createEstimate(values as unknown as NewEstimateInput)
                dispatch(setCurrentEstimate(estimate))
                navigate('/novo-pedido')
            }           
        }
    })
    const getFildProps = (fildName: keyof FormValues) =>{
        return{
            ...formik.getFieldProps(fildName),
            controlId: `input-${fildName}`,
            error: formik.errors[fildName],
            isInvalid: formik.touched[fildName] && !!formik.errors[fildName],
            isValid: formik.touched[fildName] && !formik.errors[fildName],
            disabled: !!currentEstimate
        }
    }

    const handleBack = () =>{
        if (currentEstimate) {
            dispatch(clearCurrentEstimate())
        }
        navigate(-1)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const PayOnDelivery = async () => {
        if (!currentEstimate) {
            return null
        }
        try {
            await createOrder({
                estimate: currentEstimate,
                gatewayId: 'Pagar na engrega',
                user: user
            })
            navigate('/novo-pedido/sucesso')            
        } catch {
            toast.error('Falha ao processar seu pedido. Por favor, entre em contato conosco.', {
                theme: 'colored'
            })
        }
    }
    
    return (
        <>
            {!currentEstimate &&
                <PageTitle>Calcular Frete</PageTitle>
            }            
            <Form onSubmit={formik.handleSubmit}>
                <FormFieldWhitDispayGrid className={`${currentEstimate ? ('d-block') : ('')}`}>
                    <p className="mb-1">Nome</p>
                    <FormField
                        label="Nome"
                        placeholder="Seu Nome"
                        {...getFildProps('name')}
                    />
                </FormFieldWhitDispayGrid>
                <FormFieldWhitDispayGrid className={`${currentEstimate ? ('d-block') : ('')}`}>
                    <p className="mb-1">Telefone</p>
                    <FormField
                        label="Telefone"
                        placeholder="Seu Telefone"
                        mask={[
                            { mask: '(00) 0000-0000' },
                            { mask: '(00) 00000-0000' }
                        ]}
                        {...getFildProps('phone')}
                        onAccept={value => formik.setFieldValue('phone', value)}
                    />
                </FormFieldWhitDispayGrid>
                <FormFieldWhitDispayGrid className={`${currentEstimate ? ('d-block') : ('')}`}>
                    <p className="mb-1">Endereço</p>
                    <div>
                        <AutocompleteField
                            label="Endereço"
                            placeholder={user.address?.address}
                            {...getFildProps('address')}
                            onChange={(address: any) => formik.setFieldValue('address', address)}
                        />
                    </div>
                </FormFieldWhitDispayGrid>
                {!currentEstimate ? (
                    <Subtotal>Subtotal:<span className="ms-3">{products.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></Subtotal>
                ) : (
                    <Subtotal>Total:<span className="ms-3">{(products.price + currentEstimate.value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></Subtotal>
                )}
                
                <div className="d-flex flex-column gap-3 flex-md-row justify-content-between">
                    <CustomButton 
                        onClick={handleBack}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className='me-4 me-md-5'/>VOLTAR
                    </CustomButton>
                    {!currentEstimate ? (
                        <CustomButton
                            type='submit'
                            loading={formik.isValidating || formik.isSubmitting}
                            disabled={formik.isValidating || formik.isSubmitting}
                        >CALCULAR FRETE</CustomButton>
                    ) : (
                        <CustomButton
                            loading={formik.isValidating || formik.isSubmitting}
                            disabled={formik.isValidating || formik.isSubmitting}
                            onClick={handleShow}
                        >Finalizar Pedido</CustomButton> 
                    )}                    
                </div>
            </Form>
            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar o Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>Como deseja realizar o pagamento?</Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <div className="d-grid w-100">
                        <CustomButton variant="outline-danger" onClick={PayOnDelivery}>
                            Pagar na entrega?
                        </CustomButton>
                    </div>                
                    {!currentEstimate ? (null) : (
                        <EstimateFinish 
                            currentEstimate={currentEstimate}
                            user={user}
                        />  
                    )}
                </Modal.Footer>
            </Modal>
    </>
        </>
    )
}
const FormFieldWhitDispayGrid = styled.div`
    display: grid;
    > p {
        font-weight: 700;
    }
    @media(min-width: 576px){
        grid-template-columns: 2fr 8fr;
        align-items: center;
    }
    @media(min-width: 768px){
        grid-template-columns: 3fr 7fr;
    }
    @media(min-width: 992px){
        grid-template-columns: 4fr 6fr;
    }
`
const Subtotal = styled.p`
    font-size: 1.5rem;
    font-weight: 900;
    text-align: end;
`