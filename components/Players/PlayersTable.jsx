import { useRouter } from 'next/router';
import { deletePlayer } from '../../api/player';
import { useInfiniteQuery } from '../../hooks';
import Button from '../Button';
import DeleteRow from '../DeleteRow';
import EditRow from '../EditRow';
import ReactToExcel from 'react-html-table-to-excel';

const PlayersTable = () => {
  const router = useRouter();
  const { data } = useInfiniteQuery(`/players`);

  console.log(data);

  const renderPlayer = ({ _id, first_name, last_name, birthday, email, category }, index) => {
    const handleClick = (id) => router.push(`/admin/players/${id}`);

    return (
      <tr key={`player-${_id}-${first_name}-${last_name}`}>
        <td onClick={() => handleClick(_id)}>{index + 1}</td>
        <td onClick={() => handleClick(_id)}>
          <strong>
            {last_name}, {first_name}
          </strong>
        </td>
        <td onClick={() => handleClick(_id)}>{new Date(birthday).getFullYear()}</td>
        <td onClick={() => handleClick(_id)}>{category}</td>
        <td onClick={() => handleClick(_id)}>{email}</td>
        <td className="text-center py-0">
          <div className="flex gap-4 items-center">
            <DeleteRow id={_id} action={deletePlayer} />
            <EditRow id={_id} />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary" href="/admin/players/add">
          <i className="fa fa-plus mr-4" />
          Adaugă jucător
        </Button>
        <Button className="button full secondary" id="downloadButton">
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="playersTable"
            filename="Sportivi"
            sheet="sheet1"
            buttonText="Descarca datele"
          ></ReactToExcel>
        </Button>
      </div>
      <h4 className="mb-4"> Au fost găsiți {data?.pageParams.count} jucători în baza de date </h4>
      <table id="playersTable">
        <thead>
          <th>#</th>
          <th>Nume</th>
          <th>Anul nașterii</th>
          <th>Categorie</th>
          <th>Email</th>
          <th></th>
        </thead>
        <tbody>{data?.pages[0].map(renderPlayer)}</tbody>
      </table>
      <Button className="button full secondary my-4">Incarca mai mult</Button>
      {/* <h4 className="my-4"> Au fost gasiti {data?.pageParams.count} jucători în baza de date.</h4> */}
    </div>
  );
};

export default PlayersTable;
