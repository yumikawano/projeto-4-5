import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import styled from "styled-components";

type Props = ButtonProps & {
  loading?: boolean
  to?: string
}

export function CustomButton ({ children, loading, to, ...otherProps }: Props) {
  const button = (
    <ButtonStyled {...otherProps}>
      {loading && (
        <Spinner animation="border" role="status" size='sm' className='me-2'>
          <span className='visually-hidden'>Carregando...</span>
        </Spinner>
      )}
      {children}
    </ButtonStyled>
  )
  if (to) {
    return (
      <LinkContainer to={to}>
        {button}
      </LinkContainer>
    )
  }
  return button
}

const ButtonStyled = styled(Button)`
  border-radius: 100px;
  color: black;
  font-weight: 500;
  padding-left: 50px;
  padding-right: 50px;
  ${props => props.size === 'lg' && `
    font-size: 1.125rem;
  `}
  ${props => (props.variant === 'light' || !props.variant) && `
    background-color: #ffedff;
    border-color: #ffffff;
    &:hover {
      background-color: #ffffff;
      color: black;
      border-color: #ffedff;
    }
  `}
  ${props => props.variant === 'outline-dark' && `
    color: #fcd7fc;
    border-color: #ffffff;
    &:hover {
      background-color: #ffffff;
      border-color: #fcd7fc;
    }
  `}
`