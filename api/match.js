import { axiosAuth } from '../lib';

export const createMatch = (data) => {
  return axiosAuth.post('matches', data);
};

export const deleteMatch = (_id) => {
  return axiosAuth.delete(`/match/${_id}`);
};
