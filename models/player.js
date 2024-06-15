import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Prenumele este obligatoriu'),
  last_name: Yup.string().required('Numele este obligatoriu'),
  birthday: Yup.string().required('Data nasterii este obligatorie'),
  email: Yup.string().email().required('Emailul este obligatoriu si trebuie sa raspecte formatul aaa@bbb.ccc'),
  category: Yup.string().required('Daca nu detineti un titlu sportiv completati cu FC'),
});

export const initialValues = {
  first_name: '',
  last_name: '',
  birthday: '',
  email: '',
  category: '',
};
