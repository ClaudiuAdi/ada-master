import React from 'react';
import { useQuery } from '../../hooks';

const AdminLessonFeedback = ({ id }) => {
  const { data, status } = useQuery(`/feedback/${id}`);

  return (
    <div className="bg-white w-full max-w-xl rounded-lg p-3 flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Feedback-ul studentilor</h2>
      <div>{status === 'success' && data.response}</div>
    </div>
  );
};

export default AdminLessonFeedback;
