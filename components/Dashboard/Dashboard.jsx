import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useQuery } from '../../hooks';
import { DashboardCard } from '.';
import { normalizePlayersByCat } from '../../functions';
const LessonsAndMatchesChart = dynamic(() => import('./Charts/LessonsAndMatches'), { ssr: false });
const PlayersByCategoryChart = dynamic(() => import('./Charts/PlayersByCategory'), { ssr: false });
const SalesByAbonamentChart = dynamic(() => import('./Charts/SalesByAbonament'), { ssr: false });

const Dashboard = () => {
  const { data } = useQuery('/dashboard');
  const router = useRouter();

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 my-6">
        <DashboardCard
          icon="fa fa-person-running"
          title="Sportivi"
          onClick={() => router.push('/admin/players')}
        >
          {data?.numPlayers} sportivi înregistrați
        </DashboardCard>
        <DashboardCard icon="fa fa-person-chalkboard" title="Antrenori" onClick={() => router.push('/admin/coaches')}>
          {data?.numCoaches} antrenori disponibili
        </DashboardCard>
        <DashboardCard icon="fa fa-book" title="Lecții" onClick={() => router.push('/admin/lessons')}>
          {data?.numLessons} lecții efectuate
        </DashboardCard>
        <DashboardCard icon="fa fa-handshake" title="Meciuri" onClick={() => router.push('/admin/matches')}>
          {data?.numMatches} meciuri organizate
        </DashboardCard>
        <DashboardCard icon="fa fa-ticket" title="Abonamente" onClick={() => router.push('/admin/abonaments')}>
          {data?.numAbonaments} abonamente vândute
        </DashboardCard>
        <DashboardCard icon="fa fa-money-bill-trend-up" title="Încasări">
          11,280 Lei încasați
        </DashboardCard>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white">
          <PlayersByCategoryChart data={normalizePlayersByCat(data?.playersByCat)}/>
        </div>
        <div className="p-4 bg-white">
          <LessonsAndMatchesChart />
        </div>
        <div className="p-4 bg-white">
          <SalesByAbonamentChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
