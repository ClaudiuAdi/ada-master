import { deleteLesson } from '../../api/lesson';
import { useQuery } from '../../hooks';
import { format } from 'date-fns';
import DeleteRow from '../DeleteRow';
import Button from '../Button';
import ReactToExcel from 'react-html-table-to-excel';
import { router } from '../../lib';

const LessonsTable = () => {
  const { data } = useQuery(`/lessons`);

  const renderLesson = ({ _id, name, coach, date, location, sport }, index) => {
    const handleClick = (_id) => router.push(`/admin/lessons/${_id}`);

    return (
      <tr key={`area-${name}`} onClick={() => handleClick(_id)}>
        <td>{index + 1}</td>
        <td>
          <strong>{name}</strong>
        </td>
        <td>
          {coach.last_name}, {coach.first_name}{' '}
        </td>
        <td>{format(new Date(date), 'dd-MM-yyyy')} </td>
        <td>{location.address}</td>
        <td>{sport?.name} </td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteLesson} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary" href="/admin/lessons/add">
          <i className="fa fa-plus mr-4" />
          Adaugă lecție
        </Button>
        <Button className="button full secondary" id="downloadButton">
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="lessonsTable"
            filename="Lectii"
            sheet="sheet1"
            buttonText="Descarca datele"
          ></ReactToExcel>
        </Button>
      </div>
      <h4 className="mb-4"> Au fost gasite {data?.pageParams.count} lecții în baza de date </h4>
      <table id="lessonsTable">
        <thead>
          <th>#</th>
          <th>Titlu lecție</th>
          <th>Antrenor</th>
          <th>Data</th>
          <th>Locație</th>
          <th>Sport</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderLesson)}</tbody>
      </table>
    </div>
  );
};

export default LessonsTable;
