import React, { useState } from 'react';
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalDocumentReferences = (props) => {
  const {
    buttonLabel,
    className,
    references
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const items = []

  for(const document of references){
    items.push(<div key={document.name}><Label>{document.name}: {document.qty}</Label></div>);
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} wrapClassName="modal-right" backdrop="static">
        <ModalHeader toggle={toggle}>Employee references in document</ModalHeader>
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

export default ModalDocumentReferences;