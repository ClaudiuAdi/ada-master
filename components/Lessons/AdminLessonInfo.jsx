import { finishLesson } from '../../api/lesson';
import { fullName } from '../../functions';
import { useProfile } from '../../hooks';
import Button from '../Button';
import AdminLessonFeedback from './AdminLessonFeedback';

const AdminLessonInfo = ({
  _id,
  description,
  name,
  sport,
  coach,
  date,
  area,
  players,
  refetch,
  finished,
  hasGivenFeedback,
}) => {
  const lessonDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('ro-RO', options);
  const formattedDate = formatter.format(lessonDate);
  const { me } = useProfile();

  function calculateAge(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birth date has not occurred yet this year
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }

    return age;
  }

  const handleFinishLesson = async () => {
    await finishLesson({ _id: me.me, lesson: _id });
    refetch();
  };

  return (
    <>
      <div className="player-info">
        <div className="flex flex-wrap gap-2 items-center">
          <h3 className="text-3xl text-primary">{name} </h3>
        </div>
        {/* YOUR CODE HERE */}
        <div className="flex gap-10">
          <div className="flex flex-col w-full px-4 lg:px-7 py-8 my-10 bg-white rounded-lg max-w-xl">
            <div className="gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <strong> Informații </strong>
                  {!finished && (
                    <Button
                      className="w-fit sm:w-fit button flex px-5 py-2 rounded-xl gap-6 items-center full bg-red-500 border-none text-white"
                      onClick={handleFinishLesson}
                    >
                      <span>Incheie</span>
                    </Button>
                  )}
                  {finished && (
                    <Button
                      className="w-fit sm:w-fit button flex px-5 py-2 rounded-xl gap-6 items-center full bg-primary border-none text-white"
                      onClick={handleFinishLesson}
                    >
                      <span>Pornește lecția</span>
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
          </div>
          <div className="mt-10">
            <h2 className="text-xl mb-2">Studenti</h2>
            <div className=" flex flex-wrap gap-4">
              {players.map((player) => {
                return (
                  <div className="bg-white h-20 p-10 flex flex-col items-center justify-center rounded-lg w-62">
                    {fullName({ last_name: player.last_name, first_name: player.first_name })}
                    <div className="text-center">{calculateAge(player.birthday)} ani</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <AdminLessonFeedback id={_id} />
      </div>
    </>
  );
};

export default AdminLessonInfo;
