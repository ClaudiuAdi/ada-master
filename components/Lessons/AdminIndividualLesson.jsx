import React from 'react';
import { useQuery } from '../../hooks';
import AdminLessonInfo from './AdminLessonInfo';

const AdminIndividualLesson = ({ id }) => {
  const { data, status, refetch } = useQuery(`/admin/lesson/${id}`);

  return (
    <div className="individual-player">
      {/* <h3 className="mb-6 text-primary font-semibold">
        Profilul complet al jucătorului poate fi consultat mai jos
      </h3> */}
      {status === 'success' && <AdminLessonInfo {...data} refetch={refetch} />}
    </div>
  );
};

export default AdminIndividualLesson;
