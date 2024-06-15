import { useRouter } from 'next/router';
import { MenuButton, MenuPlayer, Tooltip } from '../../../components';
import { IndividualLesson } from '../../../components/Lessons';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <MenuPlayer />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Lectie</h3>
            <Tooltip placement="bottom">
              Consultați toate informațiile cu privire la aceasta lectie
            </Tooltip>
          </div>
          <MenuButton />
        </div>
        <div>
          <IndividualLesson id={id} />
        </div>
      </main>
    </div>
  );
};

export default Page;
