/* eslint-disable */
import PropTypes from 'prop-types';
import { Link, Outlet, useParams } from 'react-router-dom';
import { departementImages } from '../items';
import ItemType from '../types/item';
import Thumbnail from './Thumbnail';
import './Details.css';
import { GoHome } from "react-icons/go";


function Details({ items, categ, dept }) {
  const { id } = useParams()
  const pId = items.find((item) => item.Id === id)?.PId
  const category = categ.find((cat) => cat.Id === pId);
  const department = dept.find((dp) => dp.Id === category.PId);
  return (
    <div>
      <div className='home-nav-link'>
        <Link to={`/`}><GoHome /></Link>
        <Link
          to={`/department/${department.Id}`}
        >
          {department.title}/
        </Link><Link
          to={`/department/category/${pId}`}
        >
          {category.title}/
        </Link>
      </div>
      <div className="details-component">
        <Outlet />
        <div className="details-component-sidebar">
          {items.map((item) => item.PId === pId && (
            <Thumbnail
              key={item.Id}
              image={departementImages[item.imageId]}
              title={item.title}
              Id={item.Id}
              type="department/category/product"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
