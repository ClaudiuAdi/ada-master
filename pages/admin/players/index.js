import { checkAuth, withAuth } from '../../../auth';
import { Menu, MenuButton, Tooltip } from '../../../components';
import { PlayersTable } from '../../../components/Players';

const Page = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
      <div className="flex items-center mb-6">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">Jucători</h3>
          <Tooltip placement="bottom">Gestiunea jucătorilor clubului</Tooltip>
        </div>
        <MenuButton />
      </div>
      <div>
        <PlayersTable />
      </div>
    </main>
  </div>
);

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
