import { deleteSport } from '../../api/sport';
import { format } from 'date-fns';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';
import Button from '../Button';
import ReactToExcel from 'react-html-table-to-excel';

const SportsTable = () => {
  const { data } = useQuery(`/sports`);

  const renderSport = ({_id, name, manager_name, foundation_date}, index) => {
    return (
      <tr key={`sport-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{manager_name}</td>
        <td>{format(new Date(foundation_date), 'dd-MM-yyyy')}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteSport} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
      <Button className="button full primary" href="/admin/sports/add">
        <i className="fa fa-plus mr-4" />
        Adaugă sport
        </Button>
        <Button className="button full secondary" id='downloadButton'>
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="sportsTable"
            filename="Sectii_sportive"
            sheet="sheet1"
            buttonText="Descarca datele">
          </ReactToExcel>
        </Button>
       </div>
      <h4 className='mb-4'> Au fost gasite {data?.pageParams.count} sporturi în baza de date </h4>
      <table id="sportsTable">
        <thead>
          <th>#</th>
          <th>Sport</th>
          <th>Manager secție</th>
          <th>Data înființării</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderSport)}</tbody>
      </table>
    </div>
  );
};

export default SportsTable;
