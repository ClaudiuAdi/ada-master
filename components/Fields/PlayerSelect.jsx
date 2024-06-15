import { Field, useFormikContext } from 'formik';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Dropdown from './Dropdown';

const PlayerSelect = ({ name = 'player', label = 'Jucător' }) => {
  const { setFieldValue } = useFormikContext();
  const { data: players, status } = useQuery('/players');

  const showPlayer = ({ _id, first_name, last_name }) => {
    const displayName = `${last_name}, ${first_name}`;
    return (
      <option key={`player-${name}_${_id}`} value={_id}>
        {displayName}
      </option>
    );
  };

  const handleChange = (value) => {
    setFieldValue('player', value);
  };

  return (
    status === 'success' && (
      <Fieldset name={name} label={label}>
        <Field
          id={name}
          name={name}
          placeholder="Selectează jucătorul"
          as={Dropdown}
          onSelect={handleChange}
        >
          {players?.pages?.map(showPlayer)}
        </Field>
      </Fieldset>
    )
  );
};

export default PlayerSelect;
