import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  aboutYou: Yup.string().required(
    'Sectiunea despre tine este obligatorie pentru a putea oferi o sugestie'
  ),
});

export const initialValues = {
  aboutYou: '',
};
