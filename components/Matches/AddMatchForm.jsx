import { Formik, Form, Field } from 'formik';
import { AreaSelect, Input, PlayerSelect, Select } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/match';
import { createMatch } from '../../api/match';
import { router, toaster } from '../../lib';
import SportSelect from '../Fields/SportSelect';

const AddMatchForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createMatch(data);
      toaster.success('Meciul a fost creat');
      router.push('/admin/matches');
    } catch (err) {
      toaster.error('Meciul nu a putut fi creat.');
    }
  };


  return (
    <div className="form-container">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="flex gap-4 flex-col">
          <div className="grid grid-cols-2 gap-4">
            <PlayerSelect label="Primul jucător" name="player1" autoFocus/>
            <PlayerSelect label="Al doilea jucător" name="player2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="date" label="Data">
              <Field placeholder="Data" name="date" as={Datepicker} />
            </Fieldset>
            <AreaSelect />
          </div>
          <Fieldset name="arbiter_name" label="Arbitrul">
            <Field placeholder="Arbitrul" name="arbiter_name" as={Input}  />
          </Fieldset>
          <SportSelect />
          <Submit className="button full primary">Adaugă</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMatchForm;
