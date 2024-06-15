import { Formik, Form, Field } from 'formik';
import { Input, Select } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/coach';
import { createCoach } from '../../api/coach';
import { router, toaster } from '../../lib';
import { coachCategories } from '../../data';

const AddCoachForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createCoach(data);
      toaster.success('Antrenorul a fost creat');
      router.push('/admin/coaches')
    } catch (err) {
      toaster.error('Antrenorul nu a putut fi creat.');
    }
  };

  const showCoachCategory = ({ name, value }) => (
    <option value={value} key={`coach-cat-${value}`}>
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
            <Fieldset name="last_name" label="Nume de familie">
              <Field
                id="last_name"
                placeholder="Nume de familie"
                name="last_name"
                as={Input}
                autoFocus
              />
            </Fieldset>
            <Fieldset name="first_name" label="Prenume">
              <Field id="first_name"
                placeholder="Prenume"
                name="first_name"
                as={Input} />
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
          <Fieldset name="coach_category" label="Categorie">
            <Field placeholder="Categorie" name="coach_category" as={Select}>
              {coachCategories.map(showCoachCategory)}
            </Field>
          </Fieldset>
          <Fieldset name="salary" label="Salariu">
            <Field placeholder="Salariu" name="salary" as={Input} />
          </Fieldset>
          <Submit className="button full primary">Adaugă</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCoachForm;
