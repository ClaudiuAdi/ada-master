import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Trebuie sa introduceti titlul lectiei'),
  coach: Yup.string().required('Trebuie sa introduceti numele antrenorului'),
  date: Yup.string().required('Trebuie sa introduceti data sustinerii lectiei'),
  location: Yup.string().required('Trebuie sa alegeti locul de desfasurare al lectiei'),
  description: Yup.string()

});

export const initialValues = {
  name: '',
  coach: '',
  date: '',
  location: '',
  description:''

};
