import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  last_name: Yup.string().required('Numele este obligatoriu'),
  first_name: Yup.string().required('Prenumele este obligatoriu'),
  birthday: Yup.string().required('Data nasterii este obligatorie'),
  email: Yup.string().email().required('Emailul este obligatoriu si trebuie sa raspecte formatul aaa@bbb.ccc'),
  category: Yup.string().required('Daca nu detineti un titlu sportiv completati cu FC'),
  password: Yup.string().min(8).required('Parola trebuie sa aibă minim 8 caractere'),
});

export const initialValues = {
  last_name: '',
  first_name: '',
  birthday: '',
  email: '',
  category: '',
  password: '',
};
