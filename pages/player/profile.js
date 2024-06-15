import { checkAuth, withAuth } from '../../auth';
import { LayoutPlayer } from '../../components';
import { Profile } from '../../components/Players';

const Page = () => {
  return (
    <LayoutPlayer>
      <div className="font-body text-sm min-h-screen bg-gray-100 flex" align='center'>
        <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-02">
          <Profile />
        </main>
      </div>
    </LayoutPlayer>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
