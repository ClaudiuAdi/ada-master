import { Field, useFormikContext } from 'formik';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Dropdown from './Dropdown';

const SportSelect = () => {
  const { setFieldValue } = useFormikContext();
  const { data: sports, status } = useQuery('/sports');

  const showCoach = ({ _id, name }) => {
    const displayName = `${name}`;
    return (
      <option key={`sport_${_id}`} value={_id}>
        {displayName}
      </option>
    );
  };

  const handleChange = (value) => {
    setFieldValue('sport', value);
  };

  return (
    <Fieldset name="sport" label="Sport">
      <Field
        id="sport"
        name="sport"
        placeholder="Selectează sportul"
        as={Dropdown}
        onSelect={handleChange}
      >
        {status === 'success' && sports?.pages?.map(showCoach)}
        {status === 'loading' && 'Loading...'}
      </Field>
    </Fieldset>
  );
};

export default SportSelect;
