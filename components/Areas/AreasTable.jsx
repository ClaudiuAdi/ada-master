import { deleteArea } from '../../api/area';
import { useQuery } from '../../hooks';
import DeleteRow from '../DeleteRow';
import Button from '../Button';
import ReactToExcel from 'react-html-table-to-excel';

const AreasTable = () => {
  const { data } = useQuery(`/areas`);

  const renderArea = ({_id, name, address, dimension}, index) => {
    return (
      <tr key={`area-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{address}</td>
        <td>{dimension} mp</td>
        <td className="text-center py-0">
          <DeleteRow id={_id} action={deleteArea} />
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-6 flex justify-between w-full">
        <Button className="button full primary" href="/admin/areas/add">
          <i className="fa fa-plus mr-4" />
          Adaugă sală de antrenament
        </Button>
        <Button className="button full secondary" id='downloadButton'>
          <i className="fa fa-download mr-4" />
          <ReactToExcel
            table="areasTable"
            filename="Sali_de_antrenament"
            sheet="sheet1"
            buttonText="Descarca datele">
          </ReactToExcel>
        </Button>
      </div>
      <h4 className='mb-4'> Au fost gasite {data?.pageParams.count} săli în baza de date </h4>
      <table id="areasTable">
        <thead>
          <th>#</th>
          <th>Denumire</th>
          <th>Adresă</th>
          <th>Dimensiune</th>
          <th></th>
        </thead>
        <tbody>{data?.pages.map(renderArea)}</tbody>
      </table>
      <Button className="button full secondary my-4" href="/admin/areas/view">Vezi harta</Button>
    </div>
  );
};

export default AreasTable;
