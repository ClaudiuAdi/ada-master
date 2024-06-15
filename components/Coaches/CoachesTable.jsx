import { deleteCoach } from '../../api/coach';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';
import Button from '../Button';
import ReactToExcel from 'react-html-table-to-excel';

let euro = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "LEI",

});

const CoachesTable = () => {
  const { data } = useQuery(`/coaches`);
  const renderCoach = ({ _id, first_name, last_name, email, coach_category, salary }, index) => {
    
    return (
      <tr key={`player-${first_name}-${last_name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {last_name}, {first_name}
          </strong>
        </td>
        <td>{email}</td>
        <td>{coach_category}</td>
        <td>{euro.format(salary)}</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteCoach} />
        </td>
      </tr>
    );
    
  };

  return (
    <div>
        <div className="mb-6 flex justify-between w-full">
          <Button className="button full primary" href="/admin/coaches/add">
            <i className="fa fa-plus mr-4" />
            Adaugă antrenor
        </Button>
        <Button className="button full secondary">
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="coachesTable"
            filename="Antrenori"
            sheet="sheet1"
            buttonText="Descarca datele">
          </ReactToExcel>
        </Button>
        </div>
      <h4 className='mb-4'> Au fost gasiti {data?.pageParams.count} antrenori în baza de date </h4>
      <table id="coachesTable">
        <thead>
          <th>#</th>
          <th>Nume</th>
          <th>Email</th>
          <th>Categorie</th>
          <th>Salariu</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderCoach)}</tbody>
      </table>
    </div>
  );
};

export default CoachesTable;
