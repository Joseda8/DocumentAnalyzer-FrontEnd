import React, { useState } from 'react';
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalEmployeeReferences = (props) => {
  const {
    buttonLabel,
    className,
    references
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  console.log(references);
  const items = []

  for(const employee of references){
    items.push(<div><Label>{employee.name}: {employee.qty}</Label></div>);
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} wrapClassName="modal-right" backdrop="static">
        <ModalHeader toggle={toggle}>Employee reference in document</ModalHeader>
        <ModalBody> {items} </ModalBody>
        <ModalFooter>
            <div className="container">
                <div className="row">
                    <div className="col-xs-4">
                    </div>
                    <div className="col-xs-4">
                        <Button color="danger" onClick={toggle}> Close </Button>
                    </div>
                </div>
            </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEmployeeReferences;