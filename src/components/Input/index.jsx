import { InputContainer } from '../../styles/_inputStyle';
import PropTypes from 'prop-types';

export function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} />
    </InputContainer>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
