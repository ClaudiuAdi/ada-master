import { Modal } from 'react-bootstrap';
import { Button } from '.';

const AreYouSure = ({ isOpen, hide, iAmSure, children }) => {
  return (
    <Modal centered show={isOpen} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmă ștergerea</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button className="button square primary" onClick={hide}>
          Go back
        </Button>
        <Button className="button full accent" onClick={iAmSure}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AreYouSure;
