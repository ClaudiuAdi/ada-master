import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  abonament_type: Yup.string().required('Trebuie sa introduceti tipul abonamentului'),
  starting_date: Yup.string().required('Trebuie sa alegeti data de inceput a abonamentului'),
  period: Yup.string().required('Trebuie sa alegeti perioada pentru care doriti sa fie valabil abonamentul'),
  price: Yup.string(),
  
});

export const initialValues = {
  abonament_type: '',
  starting_date: '',
  period: '',
  price: ''
};
