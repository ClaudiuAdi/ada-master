import { useQuery } from '../../hooks';
import LessonInfo from './LessonInfo';

const IndividualLesson = ({ id }) => {
  const { data, status, refetch } = useQuery(`/lesson/${id}`);

  return (
    <div className="individual-player">
      {/* <h3 className="mb-6 text-primary font-semibold">
        Profilul complet al jucătorului poate fi consultat mai jos
      </h3> */}
      {status === 'success' && <LessonInfo {...data} refetch={refetch} />}
    </div>
  );
};

export default IndividualLesson;
