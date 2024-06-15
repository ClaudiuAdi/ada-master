import { Formik, Form, Field } from 'formik';
import { Select } from '../Fields';
import { Datepicker, Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/abonament';
import { createAbonament } from '../../api/abonament';
import { router, toaster } from '../../lib';
import { abonamentTypes } from '../../data';
import AbonamentPrice from './AbonamentPrice';

const AddAbonamentForm = () => {
  const handleSubmit = async (data) => {
    try {
      await createAbonament(data);
      toaster.success('Abonamentul a fost creat');
      router.push('/admin/abonaments');
    } catch (err) {
      toaster.error('Abonamentul nu a putut fi creat.');
    }
  };

  const showAbonamentType = ({ name, value }) => (
    <option key={`ab-type-${value}`} value={value}>
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
            {/* <Fieldset name="abonament_type" label="Tip abonament">
              <Field
                id="abonament_type"
                placeholder="Tip abonament"
                name="abonament_type"
                as={Input}
                autoFocus
              />
            </Fieldset> */}
            <Fieldset name="abonament_type" label="Tip abonament">
              <Field
                id="abonament_type"
                placeholder="Tip abonament"
                name="abonament_type"
                as={Select}
              >
                {abonamentTypes.map(showAbonamentType)}
              </Field>
            </Fieldset>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Fieldset name="starting_date" label="Data de început">
              <Field placeholder="Data de început" name="starting_date" as={Datepicker}/>
            </Fieldset>
            <Fieldset name="period" label="Perioada">
              <Field
                placeholder="Perioada"
                name="period"
                id="period"
                as={Select}
                autoFocus
                min="30"
                max="90"
                step="30"
              >
                <option value="30" label="30 zile" />
                <option value="60" label="60 zile" />
                <option value="90" label="90 zile" />
              </Field>
            </Fieldset>
          </div>
          {/* <Fieldset name="price" label="Preț">
            <Field placeholder="Preț" name="price" as={Input} autoFocus disabled />
          </Fieldset> */}
          <AbonamentPrice />
          <Submit className="button full primary">Adaugă</Submit>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAbonamentForm;
