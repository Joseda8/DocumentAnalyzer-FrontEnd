import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./CenteredContent.css"

class CenteredContent extends Component {
  render() {
    return (
      <>
          <Row className={this.props.numRow}>
            <Col sm={this.props.numCol} className="card text-white p-4">
              {this.props.children}
            </Col>
          </Row>
      </>
    );
  }
}

export default CenteredContent;
