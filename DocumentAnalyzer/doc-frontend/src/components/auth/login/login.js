import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Button, Alert } from "react-bootstrap";
import CenteredContent from "../auth-background/CenteredContent";

import { AuthService } from "../auth-service";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);

    this.state = {
      errorMessage: '',
    };
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message
    });
  }

  validateInputs(email, password) {
    // Validacion de espacios en blanco
    if(!email || !password) {
      this.setErrorMessage("Por favor ingresar la información solicitada")
      return false;
    }
  
    // Validacion de email con formato correcto
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)) {
      this.setErrorMessage("El formato del email es inválido")
      return false;
    }

    return true;
  }

  onSubmit(e) {
    e.preventDefault();

    const form = e.target.elements;
    const email = form.email.value;
    const password = form.password.value;

    // Validation of the input fields
    if(!this.validateInputs(email, password)) return; 
    
    // Login request to the api
    AuthService.loginRequest(email, password).then(
      (response) => {
        // The token is stored
        AuthService.storeToken(response.data);

        // Redirection to the files page
        this.props.history.push({
          pathname: '/files',
          state: { detail: this.state }
        })
      },
      () => {
        this.setErrorMessage("Correo electrónico o contraseña incorrectos")
      }
    );
  }

  render() {
    return (
      <>
        <CenteredContent
          numCol="4"
          numRow="justify-content-center align-items-center h-100"
        >
          <h2 className="h4">Iniciar sesión</h2>
          {this.state.errorMessage && <Alert variant='danger'>{ this.state.errorMessage }</Alert>}
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Ingresar
            </Button>
          </Form>
          <Alert variant="info" className="mt-3">
            ¿Nuevo usuario?{" "}
            <Link to="/signup" className="alert-link">
              Regístrese aquí
            </Link>
          </Alert>
        </CenteredContent>
      </>
    );
  }
}

export default LogIn;