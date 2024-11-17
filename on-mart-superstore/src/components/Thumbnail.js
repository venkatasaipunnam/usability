/* eslint-disable */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Thumbnail.css';

function Thumbnail({ Id, image, title, type }) {
  return (
    <Link
      className="thumbnail-component"
      to={`/${type}/${Id}`}
    >
      <div className='product_image'>
        <img src={image} alt={title} />
      </div>
      <div className='product_title'>{title}</div>
    </Link>
  );
}

Thumbnail.propTypes = {
  Id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Thumbnail;
