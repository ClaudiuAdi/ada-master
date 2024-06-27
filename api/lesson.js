import { axiosAuth } from '../lib';

export const createLesson = (data) => {
  return axiosAuth.post('lessons', data);
};

export const deleteLesson = (_id) => {
  return axiosAuth.delete(`/lesson/${_id}`);
};

export const takePart = (data) => {
  return axiosAuth.put(`/lesson/${data.lesson}`, data);
};

export const finishLesson = (data) => {
  return axiosAuth.put(`/lesson/finish/${data.lesson}`, data);
};
