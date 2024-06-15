import { useRouter } from 'next/router';
import { useState } from 'react';
import { AreYouSure } from '.';
import { toaster } from '../lib';

const DeleteRow = ({ action, id }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const deleteRow = async () => {
    await action(id);
    router.reload();
    toaster.success('Succes!');
  };

  const hide = () => {
    setOpen(false);
  };
  const show = () => {
    setOpen(true);
  };

  const iAmSure = () => {
    hide();
    deleteRow();
  };

  return (
    <>
      <i className="fa fa-trash invisible hover:text-red-500" onClick={show} />
      <AreYouSure isOpen={isOpen} hide={hide} iAmSure={iAmSure}>
        Atenție! Această acțiune nu este reversibilă.
      </AreYouSure>
    </>
  );
};

export default DeleteRow;
