import { axiosAuth } from '../lib';

export const createSport = (data) => {
  return axiosAuth.post('sports', data);
};

export const deleteSport = (_id) => {
  return axiosAuth.delete(`/sport/${_id}`);
};
