import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  feedback: Yup.string().required('Sectiunea de feedback este obligatorie'),
});

export const initialValues = {
  feedback: '',
};
