import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { departementImages } from '../items';
import './Home.css';
import ItemType from '../types/item';

function AllDepartments({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.Id}
          Id={item.Id}
          image={departementImages[item.imageId]}
          title={item.title}
          type="department"
        />
      ))}
    </div>
  );
}

AllDepartments.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default AllDepartments;
