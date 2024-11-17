import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { departementImages } from '../items';
import './Home.css';
import ItemType from '../types/item';

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.Id}
          Id={item.Id}
          image={departementImages[item.imageId]}
          title={item.title}
          type="department/category/product"
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
