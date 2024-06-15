import { useQuery } from '../../../hooks';
import { format } from 'date-fns';
import { MenuPlayer } from '../../../components';
import { SuggestionButton, SuggestionComponent } from '../../../components/AI';
import { useRouter } from 'next/router';

const PlayerLessonsTable = () => {
  const router = useRouter();
  const { data } = useQuery(`/lessons`);

  const renderLesson = ({ _id, name, coach, date, location, sport }, index) => {
    const handleClick = () => router.push(`./lessons/${_id}`);
    return (
      <tr key={`area-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>{name}</strong>
        </td>
        <td onClick={() => handleClick(_id)}>
          {coach.last_name}, {coach.first_name}{' '}
        </td>
        <td>{format(new Date(date), 'dd-MM-yyyy')} </td>
        <td>{location.address}</td>
        <td>{sport?.name} </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="font-body text-sm min-h-screen bg-gray-100 flex">
        <MenuPlayer />
        <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
          <SuggestionButton />
          <h4 className="mb-4">
            Au fost gasite {data?.pageParams.count} lecții la care vă puteți programa{' '}
          </h4>
          <div>
            <table>
              <thead>
                <th>#</th>
                <th>Titlu lecție</th>
                <th>Antrenor</th>
                <th>Data</th>
                <th>Locație</th>
                <th>Sport</th>
              </thead>
              <tbody>{data?.pages.map(renderLesson)}</tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlayerLessonsTable;
