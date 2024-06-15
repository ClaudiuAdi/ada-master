import { useQuery } from '../../../hooks';
import Button from '../../../components/Button'
import { MenuPlayer } from '../../../components';

const AreasTable = () => {
  const { data } = useQuery(`/areas`);

  const renderArea = ({ _id, name, address, dimension }, index) => {
    return (
      <tr key={`area-${name}`}>
        <td>{index + 1}</td>
        <td>
          <strong>
            {name}
          </strong>
        </td>
        <td>{address}</td>
      </tr>
    );
  };

  return (
    <div>
      <div className="font-body text-sm min-h-screen bg-gray-100 flex">
        <MenuPlayer />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
      <h4 className='mb-4'> Avem {data?.pageParams.count} săli unde desfășurăm antrenamente </h4>
        <div>
        <table>
        <thead>
          <th>#</th>
          <th>Denumire</th>
          <th>Adresă</th>
        </thead>
        <tbody>{data?.pages.map(renderArea)}</tbody>
            </table>
            <Button className="button full secondary my-4" href="/admin/areas/view">Vezi pe hartă</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AreasTable;
