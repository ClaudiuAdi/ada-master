import { deleteMatch } from '../../api/match';
import { format } from 'date-fns';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';
import Button from '../Button';
import ReactToExcel from 'react-html-table-to-excel';

const MatchesTable = () => {
  const { data } = useQuery(`/matches`);

  const renderMatch = ({_id, player1, player2, date, location, sport }, index) => {
    return (
      <tr key={`player1-${player1}player2-${player2}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {player1.last_name}, {player1.first_name}
          </strong>
        </td>
        <td>
          <strong>
            {player2.last_name}, {player2.first_name}
          </strong>
        </td>
        <td>{format(new Date(date), 'dd-MM-yyyy')} </td>
        <td>{location.address}</td>
        <td>{sport?.name}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteMatch} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary" href="/admin/matches/add">
          <i className="fa fa-plus mr-4" />
          Adaugă meci
        </Button>
        <Button className="button full secondary" id='downloadButton'>
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="matchesTable"
            filename="Meciuri"
            sheet="sheet1"
            buttonText="Descarca datele">
          </ReactToExcel>
        </Button>
      </div>
      <h4 className='mb-4'> Au fost gasite {data?.pageParams.count} meciuri în baza de date </h4>
      <table id="matchesTable">
        <thead>
          <th>#</th>
          <th>Jucător 1</th>
          <th>Jucător 2</th>
          <th>Data</th>
          <th>Locație</th>
          <th>Sportul</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderMatch)}</tbody>
      </table>
    </div>
  );
};

export default MatchesTable;
