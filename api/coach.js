import { axiosAuth } from '../lib';

export const createCoach = (data) => {
  return axiosAuth.post('coaches', data);
};

export const deleteCoach = (_id) => {
  return axiosAuth.delete(`/coach/${_id}`);
};
