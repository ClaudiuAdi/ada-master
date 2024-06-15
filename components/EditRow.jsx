import { useRouter } from 'next/router';

const EditRow = ({ id }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/admin/players/${id}`);
  return <i className="fa fa-eye invisible hover:text-primary" onClick={handleClick} />;
};

export default EditRow;
