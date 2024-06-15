import { axiosAuth } from '../lib';

export const createAbonament = (data) => {
  return axiosAuth.post('abonaments', data);
};

export const deleteAbonament = (_id) => {
  return axiosAuth.delete(`/abonament/${_id}`);
};
