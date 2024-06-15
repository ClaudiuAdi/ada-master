import { axiosAuth } from '../lib';

export const createPlayer = (data) => {
  return axiosAuth.post('players', data);
};

export const deletePlayer = (_id) => {
  return axiosAuth.delete(`/player/${_id}`);
};
