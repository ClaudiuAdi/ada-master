import { axiosAuth } from '../lib';

export const createArea = (data) => {
  return axiosAuth.post('areas', data);
};

export const deleteArea = (_id) => {
  return axiosAuth.delete(`/area/${_id}`);
};
