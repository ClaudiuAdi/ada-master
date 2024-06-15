import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Trebuie sa introduceti numele sectiei sportive'),
  manager_name: Yup.string().required('Trebuie sa adaugati un maanger al sectiei'),
  foundation_date: Yup.string().required('Trebuie sa introduceti data afilierii sectiei'),
  
});

export const initialValues = {
  name: '',
  manager_name: '',
  foundation_date: '',
  
};
