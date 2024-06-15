import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { giveLessonFeedback } from '../../api/feedback';
import { classnames } from '../../lib';
import { initialValues, validationSchema } from '../../models/feedback';
import { Submit, Textarea } from '../Formik';
import Fieldset from '../Formik/Fieldset';

const LessonFeedback = ({ isOpen, hide, lesson, refetch }) => {
  const handleSubmit = async ({ feedback }) => {
    await giveLessonFeedback({ feedback, lesson });
    hide();
    refetch();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Modal centered show={isOpen} onHide={hide} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Ofera feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <article className="flex flex-col">
            <main className="flex flex-col text-gray-700 gap-5">
              <h1 className="text-center text-2xl font-bold">Spune-ne despre experienta ta</h1>

              <Form className="flex flex-col gap-4">
                <div className="space-y-6">
                  <Fieldset name="feedback" className="text-lg font-semibold">
                    <Field
                      as={Textarea}
                      name="feedback"
                      id="feedback"
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
                    className="w-full sm:w-fit button flex px-4 rounded-full gap-6 items-center full bg-primary border-none text-white"
                  >
                    <span className="mx-auto uppercase">Ofera feedback</span>
                    <div className="hidden sm:flex justify-center items-center gap-2 w-1 h-1 p-3 bg-primary/50 rounded-full">
                      <i className="text-xs fa-solid fa-arrow-right"></i>
                    </div>
                  </Submit>
                </div>
              </Form>
            </main>
          </article>
        </Modal.Body>
      </Modal>
    </Formik>
  );
};

export default LessonFeedback;
