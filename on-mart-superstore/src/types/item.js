import PropTypes from 'prop-types';

const ItemType = PropTypes.shape({
  Id: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string,
});

export default ItemType;
