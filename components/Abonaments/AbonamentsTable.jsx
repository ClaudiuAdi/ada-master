import { deleteAbonament } from '../../api/abonament';
import { useQuery } from '../../hooks';
import { add, format } from 'date-fns';
import Button from '../Button';
import DeleteRow from '../DeleteRow';
import ReactToExcel from 'react-html-table-to-excel';

const AbonamentsTable = () => {
  const { data } = useQuery(`/abonaments`);

  const renderAbonament = ({ _id, abonament_type, starting_date, period, price }, index) => {
    const expirationDate = add(new Date(starting_date), {
      days: period,
    });
    const isActive = expirationDate > Date.now();

    return (
      <tr key={`area-${_id}-${price}`}>
        <td>{index + 1}</td>
        <td>
          <strong>{abonament_type}</strong>
        </td>
        <td>{format(new Date(starting_date), 'dd-MM-yyyy')}</td>
        <td>
          {isActive ? <span className="table-pill bg-green-500">ACTIV</span>
          : <span className="table-pill bg-accent">EXPIRAT</span>}
          </td>
        <td>{price} LEI</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteAbonament} />
        </td>
      </tr>
    );
  };



  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary" href="/admin/abonaments/add">
          <i className="fa fa-plus mr-4" />
          Adaugă abonament
        </Button>
 
        <Button className="button full secondary" id='downloadButton'>
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="abonamentsTable"
            filename="Abonamente"
            sheet="sheet1"
            buttonText="Descarca datele">
          </ReactToExcel>
        </Button>
      </div>
      <h4 className="mb-4"> Au fost gasite {data?.pageParams.count} abonamente în baza de date</h4>
      <table id="abonamentsTable">
        <thead>
          <th>#</th>
          <th>Tip abonament</th>
          <th>Data început</th>
          <th>Status</th>
          <th>Preț</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderAbonament)}</tbody>
      </table>
    </div>
  );
};

export default AbonamentsTable;
