import React, { useState } from 'react';
import Button from '../Button';
import SuggestionComponent from './AboutMe';
import { useProfile } from '../../hooks';
import AboutMe from './AboutMe';
import Suggestion from './Suggestion';

const SuggestionButton = () => {
  const [modal, setModal] = useState('');
  const hideModal = () => setModal('');
  const { me } = useProfile();

  const handleSuggest = async () => {
    setModal('aboutMe');
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-end">
      <Button
        className="w-fit sm:w-fit button flex px-5 py-2 rounded-xl gap-6 items-center full bg-primary border-none text-white"
        onClick={handleSuggest}
      >
        <span>Nu stiu ce sa aleg💫</span>
      </Button>
      {modal === 'aboutMe' && (
        <AboutMe id={me.me} isOpen={modal === 'aboutMe'} hide={hideModal} setModal={setModal} />
      )}
      {modal === 'suggestion' && (
        <Suggestion id={me.me} isOpen={modal === 'suggestion'} hide={hideModal} />
      )}
    </div>
  );
};

export default SuggestionButton;
