import { checkAuth, withAuth } from '../../../auth';
import { Menu, MenuButton, Tooltip } from '../../../components';
import { AddMatchForm } from '../../../components/Matches';

const Page = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
      <div className="flex items-center mb-12">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">Adaugă meci</h3>
          <Tooltip placement="bottom">Folosește formularul pentru a adăuga un meci nou</Tooltip>
        </div>
        <MenuButton />
      </div>
      <div>
        <h3 className="mb-6 text-primary font-semibold">Folosește formularul de mai jos pentru a adăuga un nou meci în baza de date.</h3>
        <AddMatchForm />
      </div>
    </main>
  </div>
);

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
