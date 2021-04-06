import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Button, Alert } from "react-bootstrap";
import CenteredContent from "../auth-background/CenteredContent";

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
    }

    this.onSubmit = this.onSubmit.bind(this);
}

  onSubmit(e) {

    e.preventDefault();

    const form = e.target.elements;

    this.setState({
      email: form.email.value,
      password: form.password.value
    }, () => { 
        this.props.history.push({
          pathname: '/files',
          //search: '?query=abc',
          state: { detail: this.state }
        })
     });    

  }

  render() {
    return (
      <>
          <CenteredContent numCol="4" numRow="justify-content-center align-items-center h-100">
          <h2 className="h4">Iniciar sesión</h2>
          <Form onSubmit= {this.onSubmit}>
            <Form.Group>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" name="email" placeholder="Correo electrónico" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Ingresar
            </Button>
          </Form>
          <Alert variant="info" className="mt-3">
            ¿Nuevo usuario? <Link to="/signup" className="alert-link">Regístrese aquí</Link>
          </Alert>
          </CenteredContent>
      </>
    );
  }
}

export default LogIn;

/*
<Link to={{
      pathname: '/template',
      search: '?query=abc',
      state: { detail: response.data }
    }}> My Link </Link>
*/