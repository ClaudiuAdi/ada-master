import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Trebuie sa adaugati numele salii'),
  dimension: Yup.string().required('Trebuie sa adaugati dimensiunea salii'),
  address: Yup.string().required('Trebuie sa adaugati adresa salii'),
  
});

export const initialValues = {
  name: '',
  dimension: '',
  address: ''
};
