import { Field, useFormikContext } from 'formik';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Dropdown from './Dropdown';

const CoachSelect = () => {
  const { setFieldValue } = useFormikContext();
  const { data: coaches, status } = useQuery('/coaches');

  const showCoach = ({ _id, first_name, last_name }) => {
    const displayName = `${last_name}, ${first_name}`;
    return (
      <option key={`coach_${_id}`} value={_id}>
        {displayName}
      </option>
    );
  };

  const handleChange = (value) => {
    setFieldValue('coach', value);
  };

  return (
    <Fieldset name="coach" label="Antrenor">
      <Field
        id="coach"
        name="coach"
        placeholder="Selectează antrenorul"
        as={Dropdown}
        onSelect={handleChange}
      >
        {status === 'success' && coaches?.pages?.map(showCoach)}
        {status === 'loading' && 'Loading...'}
      </Field>
    </Fieldset>
  );
};

export default CoachSelect;
