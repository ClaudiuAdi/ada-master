import { useRouter } from 'next/router';
import { checkAuth, withAuth } from '../../../auth';
import { Menu, MenuButton, Tooltip } from '../../../components';
import { IndividualPlayer } from '../../../components/Players';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Profil jucător</h3>
            <Tooltip placement="bottom">
              Consultați toate informațiile cu privire la acest jucător
            </Tooltip>
          </div>
          <MenuButton />
        </div>
        <div>
          <IndividualPlayer id={id} />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
