/* eslint-disable */
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { departementImages } from '../items';
import ItemType from '../types/item';
import { toast } from 'react-toastify';
import './DetailItem.css';
import { useState } from 'react';
import ToastContainer from './notifications/ToastContainer';

function DetailItem({ addToCart, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  const { id } = useParams();
  const product = items.find((item) => item.Id === id);
  
  const addItemToCart = () => {
    addToCart(product.Id);
    toast.success("Successfully Added to Cart");
  };

  const getDescription = ( desc ) => {
    if (isOpen) {
      return desc
    }
    else {
      return desc.split(' ').slice(0, 20).join(' ') ;
    }
  } 

  return (
    <div className="detail-item-component">
      {product ? (
        <>
          <img
            className="details-image"
            src={departementImages[product.imageId]}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          Product Details:

          {product.description && <h6>{getDescription(product.description)}<a  onClick = {() => toggleSection()}> {!isOpen ? "View More..." : "View Less"}</a></h6>}
          <div>
            $
            {(product.price).toFixed(2)}
          </div>
          <button
            type="button"
            onClick={addItemToCart}
          >
            Add to Cart
          </button>
        </>
      ) : <h2>Unknown Item</h2>}
    </div>
  );
}

DetailItem.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(ItemType).isRequired,
};

export default DetailItem;
