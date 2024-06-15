import { useRef } from 'react';
import { useOnClickOutside, useDisclosure } from '../hooks';
import { logout } from '../api';
import { useRouter } from 'next/router';

const ProfileMenu = () => {
  const router = useRouter();
  const { hide } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);

  const goToProfilePage = () => {
    router.push('/admin/profile');
  };

  return (
    <ul className="flex flex-col py-2">
      <li className="hover:bg-gray-100">
        <button className="px-4 py-2 text-gray-600 flex items-center no-underline" onClick={logout}>
          <i className="fas fa-sign-out-alt w-6"></i>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default ProfileMenu;
