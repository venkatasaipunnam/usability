/* eslint-disable */
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Thumbnail from '../Thumbnail';
import { departementImages } from '../../items';
import '../Home.css';
import ItemType from '../../types/item';
import { GoHome } from 'react-icons/go';

function Categories({ items, dept, categ }) {
  const { id } = useParams();
  const category = categ.find((cat) => cat.Id === id);
  const department = dept.find((dp) => dp.Id === category.PId);
  return (
    <div>
      <div className='home-nav-link'>
      <Link to={`/`}><GoHome /></Link>/<Link
          to={`/department/${department.Id}`}
        >
          {department.title}
        </Link>/<Link
          to={`/department/category/${id}`}
        >
          {category.title}
        </Link>/
      </div>
      <div className="home-component">
        {items.map((item) => item.PId === id && (
          <Thumbnail
            key={item.Id}
            Id={item.Id}
            image={departementImages[item.imageId]}
            title={item.title}
            type="department/category/product"
          />
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Categories;