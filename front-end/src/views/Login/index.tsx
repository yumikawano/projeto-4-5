import { Button, Container, Form } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import styled from "styled-components"

export function LoginView() {
    return (
        <Layout>
            <ContainerStyled>
            <h1 className="text-center">Login</h1>
            </ContainerStyled>
            <Container>
                <div className="row">
                    <div className="col">
                        <h3>Já sou cliente</h3>
                        <Form>
                            <Form.Group controlId="inscription-email" className="mb-3">
                                <Form.Label className="m-0">E-mail</Form.Label>
                                <Form.Control
                                    placeholder="exemplo@exemplo.com"
                                    // value={formData.userEmail}
                                    // onChange={handleChange}
                                    name="userEmail"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="inscription-name" className="mb-3">
                                <Form.Label className="m-0">Senha</Form.Label>
                                <Form.Control
                                    placeholder="Informe sua senha"
                                    // value={formData.userPassword}
                                    // onChange={handleChange}
                                    name="userPassword"
                                    required
                                />
                            </Form.Group>
                        </Form>
                        <Button variant="outline-dark">Entrar</Button>
                    </div>
                    <div className="col">
                        <h3>Cadastre-se</h3>
                        <Form>
                        <Form.Group controlId="inscription-name" className="mb-3">
                                <Form.Label className="m-0">Nome</Form.Label>
                                <Form.Control
                                    placeholder="Seu nome"
                                    // value={formData.userEmail}
                                    // onChange={handleChange}
                                    name="userName"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="inscription-sobrenome" className="mb-3">
                                <Form.Label className="m-0">Sobrenome</Form.Label>
                                <Form.Control
                                    placeholder="Seu sobrenome"
                                    // value={formData.userEmail}
                                    // onChange={handleChange}
                                    name="userSobrenome"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="inscription-email" className="mb-3">
                                <Form.Label className="m-0">E-mail</Form.Label>
                                <Form.Control
                                    placeholder="exemplo@exemplo.com"
                                    // value={formData.userEmail}
                                    // onChange={handleChange}
                                    name="userEmail"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="inscription-password" className="mb-3">
                                <Form.Label className="m-0">Senha</Form.Label>
                                <Form.Control
                                    placeholder="Insira uma senha"
                                    // value={formData.userEmail}
                                    // onChange={handleChange}
                                    name="userPassword"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="inscription-password" className="mb-3">
                                <Form.Label className="m-0">Confirmar senha</Form.Label>
                                <Form.Control
                                    placeholder="Confirme sua senha"
                                    // value={formData.userEmail}
                                    // onChange={handleChange}
                                    name="userPassword"
                                    required
                                />
                            </Form.Group>
                        </Form>
                        <Button variant="outline-dark">Cadastrar</Button>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

const ContainerStyled = styled.div`
  @media (min-width: 992px) {
    width: 100%;
    height: 150px;
  }
`