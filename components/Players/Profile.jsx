import { useQuery } from '../../hooks';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  const { data: playerInfo, status } = useQuery(`profile`);

  return (
    <div className="individual-player">
      {/* <h3 className="mb-6 text-primary font-semibold">
        Profilul complet al jucătorului poate fi consultat mai jos
      </h3> */}
      {status === 'success' && <ProfileInfo {...playerInfo} />}
    </div>
  );
};

export default Profile;
