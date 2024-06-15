import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { createAboutMe } from '../../api/suggestion';
import { classnames, toaster } from '../../lib';
import { initialValues, validationSchema } from '../../models/suggesstion';
import Button from '../Button';
import { Submit, Textarea } from '../Formik';
import Fieldset from '../Formik/Fieldset';

const AboutMe = ({ id, isOpen, hide, setModal }) => {
  const handleSubmit = async ({ aboutYou }) => {
    await createAboutMe({ id, aboutYou });
    hide();
    setModal('suggestion');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Modal centered show={isOpen} onHide={hide} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nu stii ce sa alegi?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <article className="flex flex-col">
            <main className="flex flex-col text-gray-700 gap-5">
              <h1 className="text-center text-2xl font-bold">Spune-ne despre tine</h1>

              <Form className="flex flex-col gap-4">
                <div className="space-y-6">
                  <Fieldset name="aboutYou" className="text-lg font-semibold">
                    <Field
                      as={Textarea}
                      name="aboutYou"
                      id="aboutYou"
                      placeholder="Scrie un răspuns"
                      className={classnames(
                        'py-2 px-3 border border-neutral-300 bg-white/5 shadow-sm rounded-lg outline-none text-black focus:ring-1 focus:border-transparent focus:ring-gray-400'
                      )}
                    />
                  </Fieldset>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-end">
                  <Submit
                    type="submit"
                    className="w-full sm:w-fit button flex px-4 rounded-full gap-6 items-center full bg-green-500 border-none text-white"
                  >
                    <span className="mx-auto uppercase">Primeste sugestii</span>
                    <div className="hidden sm:flex justify-center items-center gap-2 w-1 h-1 p-3 bg-green-400 rounded-full">
                      <i className="text-xs fa-solid fa-arrow-right"></i>
                    </div>
                  </Submit>
                </div>
              </Form>
            </main>
          </article>
        </Modal.Body>
        {/* <Modal.Footer>
          <div className="w-full flex flex-col sm:flex-row sm:gap-0 gap-4 justify-between">
            <Button
              className="button flex py-2.5 rounded-full gap-6 items-center full bg-indigo-500 border-none text-white justify-center sm:justify-normal"
              onClick={hide}
            >
              ÎNAPOI
            </Button>
          </div>
        </Modal.Footer> */}
      </Modal>
    </Formik>
  );
};

export default AboutMe;
