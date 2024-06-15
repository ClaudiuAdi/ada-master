import { useQuery } from '../../hooks';
import PlayerInfo from './PlayerInfo';

const IndividualPlayer = ({ id }) => {
  const { data: playerInfo, status } = useQuery(`/player/${id}`);

  return (
    <div className="individual-player">
      {/* <h3 className="mb-6 text-primary font-semibold">
        Profilul complet al jucătorului poate fi consultat mai jos
      </h3> */}
      {status === 'success' && <PlayerInfo {...playerInfo} />}
    </div>
  );
};

export default IndividualPlayer;
