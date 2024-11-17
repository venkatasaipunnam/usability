/* eslint-disable */
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Thumbnail from '../Thumbnail';
import { departementImages } from '../../items';
import '../Home.css';
import ItemType from '../../types/item';
import { GoHome } from 'react-icons/go';

function Department({ items, dept }) {
  const { id } = useParams();
  const department = dept.find((dept) => dept.Id === id);
  return (
    <div>
      <div className='home-nav-link'>
      <Link to={`/`}><GoHome /></Link>/<Link
          to={`/department/${id}`}
        >
          {department?.title}
        </Link>/
      </div>
      <div className="home-component">
        {items.map((item) => item.PId === id && (
          <Thumbnail
            key={item.Id}
            Id={item.Id}
            image={departementImages[item.imageId]}
            title={item.title}
            type="department/category"
          />
        ))}
      </div>
    </div>
  );
}

Department.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Department;