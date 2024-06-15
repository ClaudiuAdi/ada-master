import { Field, useFormikContext } from 'formik';
import { Input } from '../Fields';
import { Fieldset } from '../Formik';
import { abonamentTypes } from '../../data';
import { useEffect, useState } from 'react';

const AbonamentPrice = () => {
  const [value, setValue] = useState('Alegeți un tip de abonament si o perioadă');

  const { values } = useFormikContext();
  const { abonament_type, period } = values;

  useEffect(() => {
    const abonament = abonamentTypes.find((abonament) => abonament.value === abonament_type);
    if (abonament) {
      const { cost_per_day } = abonament;
      const numDays = parseInt(period);

      const newValue = cost_per_day
        ? numDays
          ? cost_per_day * numDays + ' Lei'
          : 'Alegeți o perioadă'
        : 'Alegeți un tip de abonament si o perioadă';
      setValue(newValue);
    }
  }, [abonament_type, period]);

  return (
    <Fieldset name="price" label="Preț">
      <Field placeholder="Preț" name="price" as={Input} autoFocus disabled value={value} />
    </Fieldset>
  );
};

export default AbonamentPrice;
