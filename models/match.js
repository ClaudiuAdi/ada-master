import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  //player1: Yup.string().required('Trebuie sa adaugati primul jucator/echipa'),
  //player2: Yup.string().required('Trebuie sa adaugati al doilea jucator/echipa'),
  player1: Yup.string(),
  player2: Yup.string(),
  date: Yup.string().required('Trebuie sa introduceti data meciului'),
  location: Yup.string().required('Trebuie sa introduceti locatia meciului'),
  arbiter_name: Yup.string().required('Trebuie sa introduceti numele arbitrului'),
  match_type: Yup.string().required('Trebuie sa introduceti tipul meciului (amical, oficial, international etc)')
  
});

export const initialValues = {
  player1: '',
  player2: '',
  date: '',
  location: '',
  arbiter_name: '',
  match_type: ''
};
