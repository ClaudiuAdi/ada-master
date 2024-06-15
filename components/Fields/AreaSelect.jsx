import { Field, useFormikContext } from 'formik';
import { useQuery } from '../../hooks';
import { Fieldset } from '../Formik';
import Dropdown from './Dropdown';

const AreaSelect = () => {
  const { setFieldValue } = useFormikContext();
  const { data: areas, status } = useQuery('/areas');

  const showArea = ({ _id, name }) => (
    <option key={`area_${_id}`} value={_id}>
      {name}
    </option>
  );

  const handleChange = (value) => {
    setFieldValue('location', value);
  };

  return (
    status === 'success' && (
      <Fieldset name="location" label="Sală">
        <Field
          id="location"
          name="location"
          placeholder="Selectează sala"
          as={Dropdown}
          onSelect={handleChange}
        >
          {areas?.pages?.map(showArea)}
        </Field>
      </Fieldset>
    )
  );
};

export default AreaSelect;
