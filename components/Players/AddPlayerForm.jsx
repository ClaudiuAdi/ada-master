import { Formik, Form, Field } from 'formik';
import { Input, Select } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/player';
import { createPlayer } from '../../api/player';
import { router, toaster } from '../../lib';
import { playerCategories } from '../../data';

const AddPlayerForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createPlayer(data);
      toaster.success('Jucătorul a fost creat');
      router.push('/admin/players');
    } catch (err) {
      toaster.error('Jucătorul nu a putut fi creat.');
    }
  };

  const showPlayerCategory = ({ name, value }) => (
    <option value={value} key={`player-cat-${value}`}>
      {name}
    </option>
  );

  return (
    <div className="form-container">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className="flex gap-4 flex-col">
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="last_name" label="Nume de familie" autoFocus>
              <Field
                id="last_name"
                placeholder="Nume de familie"
                name="last_name"
                as={Input}
                autoFocus
              />
            </Fieldset>
            <Fieldset name="first_name" label="Prenume">
              <Field id="first_name" placeholder="Prenume" name="first_name" as={Input} />
            </Fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="birthday" label="Data nașterii">
              <Field placeholder="Data nașterii" name="birthday" as={Datepicker} />
            </Fieldset>
            <Fieldset name="email" label="Adresa de e-mail">
              <Field placeholder="Adresa de e-mail" name="email" as={Input} />
            </Fieldset>
          </div>
          <Fieldset name="category" label="Categorie">
            <Field placeholder="Categorie" name="category" as={Select}>
              {playerCategories.map(showPlayerCategory)}
            </Field>
          </Fieldset>
          <Submit className="button full primary">Adaugă</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPlayerForm;
