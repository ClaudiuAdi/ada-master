import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Select, Input, Password } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/signup';
import { signup } from '../../api';
import { playerCategories } from '../../data';

const SignupForm = () => {

  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await signup(ref, values);
  };

  const showPlayerCategory = ({ name, value }) => (
    <option value={value} key={`player-cat-${value}`}>
      {name}
    </option>
  );

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="last_name" label="Nume de familie" autoFocus>
          <Field id="last_name" placeholder="Nume de familie" name="last_name" as={Input} autoFocus/>
        </Fieldset>

        <Fieldset name="first_name" label="Prenume">
          <Field id="first_name" placeholder="Prenume" name="first_name" as={Input} />
        </Fieldset>

        <div className="grid grid-cols-2 gap-4">
          <Fieldset name="birthday" label="Data nașterii">
            <Field placeholder="YYYY-MM-DD" name="birthday" as={Datepicker} />
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
        <Fieldset name="password" label="Your password">
          <Field id="password" name="password" as={Password} />
        </Fieldset>

        <Submit className="button full primary">Înregistrare </Submit>

      </Form>
    </Formik>
  );
};

export default SignupForm;
