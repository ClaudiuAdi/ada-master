import { axiosAuth } from '../lib';

export const giveLessonFeedback = async (data) => {
  return await axiosAuth.post('/feedback', data);
};
