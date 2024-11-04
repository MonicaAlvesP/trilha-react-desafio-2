import { ItemContainer } from '../../styles/_listRepoStyle';
import PropTypes from 'prop-types';

export function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className='repo-details'>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a href="#" rel="noreferrer" className="remover">Remover</a>
      </div>
      <hr />
    </ItemContainer>
  )
}

ItemRepo.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveRepo: PropTypes.func.isRequired,
};
