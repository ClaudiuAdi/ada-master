import { useState } from 'react';
import { takePart } from '../../api/lesson';
import { fullName } from '../../functions';
import { useProfile } from '../../hooks';
import Button from '../Button';
import LessonFeedback from './LessonFeedback';

const LessonInfo = ({
  _id,
  description,
  name,
  sport,
  coach,
  date,
  area,
  players,
  refetch,
  hasGivenFeedback,
}) => {
  const [modal, setModal] = useState('');
  const hideModal = () => setModal('');
  const { me } = useProfile();

  const lessonDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('ro-RO', options);
  const formattedDate = formatter.format(lessonDate);

  const handleFeedback = async () => {
    setModal('feedback');
  };

  const lessonPlayers = players.map((player) => player._id);

  const today = new Date();

  const handleTakePart = async (participate) => {
    await takePart({ _id: me.me, lesson: _id, participate });
    refetch();
  };

  return (
    <>
      <div className="player-info">
        <div className="flex flex-wrap gap-2 items-center">
          <h3 className="text-3xl text-primary">{name} </h3>
        </div>
        {/* YOUR CODE HERE */}
        <div className="flex flex-col w-full px-4 lg:px-7 py-8 my-10 bg-white rounded-lg max-w-xl">
          <div className="gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <strong> Informații </strong>
                {!lessonPlayers.includes(me.me) && today < new Date(date) && (
                  <Button
                    className="bg-green-500 text-gray-100 p-3 hover:bg-green-400"
                    onClick={() => handleTakePart(true)}
                  >
                    Participă
                  </Button>
                )}
                {lessonPlayers.includes(me.me) && today < new Date(date) && (
                  <Button
                    className="bg-red-500 text-gray-100 p-3 hover:bg-red-400"
                    onClick={() => handleTakePart(false)}
                  >
                    Renunta
                  </Button>
                )}
                {lessonPlayers.includes(me.me) && today > new Date(date) && !hasGivenFeedback && (
                  <Button
                    className="w-fit sm:w-fit button flex px-5 py-2 rounded-xl gap-6 items-center full bg-primary border-none text-white"
                    onClick={handleFeedback}
                  >
                    <span>Feedback</span>
                  </Button>
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-primary">
                  <strong> Sport: </strong>
                </span>
                <span> {sport.name} </span>
              </div>

              <div className="flex flex-col">
                <span className="text-primary">
                  <strong> Descriere: </strong>{' '}
                </span>
                <span> {description} </span>
              </div>

              <div className="flex flex-col">
                <span className="text-primary">
                  <strong> Antrenor: </strong>{' '}
                </span>
                <span>
                  {fullName({ last_name: coach.last_name, first_name: coach.first_name })}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-primary">
                  <strong> Data: </strong>{' '}
                </span>
                <span> {formattedDate}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-primary">
                  <strong> Locatie: </strong>{' '}
                </span>
                <span> {area.name}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-primary">
                  <strong> Adresa: </strong>{' '}
                </span>
                <span> {area.address}</span>
              </div>
            </div>
          </div>

          {modal === 'feedback' && (
            <LessonFeedback
              id={me.me}
              lesson={_id}
              isOpen={modal === 'feedback'}
              hide={hideModal}
              setModal={setModal}
              refetch={refetch}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default LessonInfo;
