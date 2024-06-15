import React from 'react';
import { Modal } from 'react-bootstrap';
import { useQuery } from '../../hooks';
import Button from '../Button';
import LoadingBubbles from '../LoadingBubbles';

const Suggestion = ({ id, isOpen, hide }) => {
  const { data, status } = useQuery(`/suggestion/${id}`);

  return (
    <Modal centered show={isOpen} onHide={hide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Aici este sugestia noastră</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <article className="flex flex-col">
          <main className="flex flex-col gap-1 text-gray-700 py-5">
            {status === 'success' && data?.response}
            {status === 'loading' && <LoadingBubbles />}
          </main>
        </article>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex flex-col sm:flex-row sm:gap-0 gap-4 justify-between">
          <Button
            className="button flex py-2.5 rounded-full gap-6 items-center full bg-indigo-500 border-none text-white justify-center sm:justify-normal"
            onClick={hide}
          >
            Inchide
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Suggestion;
