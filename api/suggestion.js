import { axiosAuth } from '../lib';

export const createAboutMe = async (data) => {
  return await axiosAuth.post('/suggestion', data);
};
