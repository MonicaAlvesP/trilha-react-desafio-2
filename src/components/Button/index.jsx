import { ButtonContainer } from '../../styles/_buttonStyle';
import PropTypes from 'prop-types';

export function Button({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      Buscar
    </ButtonContainer>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};