import React from 'react';
import './Filters.scss';
import { useFilterContext } from '../context/filter_context';
import { formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: { max_price, color, category, shipping, search_input },
    updateFilter,
    clearFilter,
  } = useFilterContext();

  const handleClearFilter = () => {
    clearFilter();
  };

  return (
    <form className="filters">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        name="search_input"
        value={search_input}
        onChange={updateFilter}
      />
      <div className="category">
        <label htmlFor="category" className="filter-title">
          Category
        </label>
        <button
          type="button"
          className={`category-btn ${category === 'all' && 'active'}`}
          name="category"
          value="all"
          onClick={updateFilter}
        >
          All
        </button>
        <button
          type="button"
          className={`category-btn ${category === 'office' && 'active'}`}
          name="category"
          value="office"
          onClick={updateFilter}
        >
          Office
        </button>
        <button
          type="button"
          className={`category-btn ${category === 'living-room' && 'active'}`}
          name="category"
          value="living room"
          onClick={updateFilter}
        >
          Living Room
        </button>
        <button
          type="button"
          className={`category-btn ${category === 'kitchen' && 'active'}`}
          name="category"
          value="kitchen"
          onClick={updateFilter}
        >
          Kitchen
        </button>
        <button
          type="button"
          className={`category-btn ${category === 'bedroom' && 'active'}`}
          name="category"
          value="bedroom"
          onClick={updateFilter}
        >
          Bedroom
        </button>
        <button
          type="button"
          className={`category-btn ${category === 'dining' && 'active'}`}
          name="category"
          value="dining"
          onClick={updateFilter}
        >
          Dining
        </button>
        <button
          type="button"
          className={`category-btn ${category === 'kids' && 'active'}`}
          name="category"
          value="kids"
          onClick={updateFilter}
        >
          Kids
        </button>
      </div>
      <div className="company">
        <label htmlFor="company" className="filter-title">
          Company
        </label>
        <select
          className="select-company"
          name="company"
          onChange={updateFilter}
        >
          <option defaultValue value="all">
            all
          </option>
          <option value="marcos">marcos</option>
          <option value="liddy">liddy</option>
          <option value="ikea">ikea</option>
          <option value="caressa">caressa</option>
        </select>
      </div>
      <label htmlFor="colors" className="filter-title">
        Colors
      </label>
      <div className="colors">
        <button
          type="button"
          className={`all-btn ${color === 'all' && 'active'}`}
          name="color"
          value="all"
          onClick={updateFilter}
        >
          All
        </button>
        <button
          value="#ff0000"
          type="button"
          className={`color ${color === '#ff0000' && 'active'}`}
          style={{ backgroundColor: 'rgb(255, 0, 0)' }}
          name="color"
          onClick={updateFilter}
        >
          <FaCheck className="check-mark" />
        </button>
        <button
          type="button"
          className={`color ${color === '#00ff00' && 'active'}`}
          style={{ backgroundColor: 'rgb(0, 255, 0)' }}
          value="#00ff00"
          name="color"
          onClick={updateFilter}
        >
          <FaCheck className="check-mark" />
        </button>
        <button
          type="button"
          className={`color ${color === '#0000ff' && 'active'}`}
          style={{ backgroundColor: 'rgb(0, 0, 255)' }}
          value="#0000ff"
          name="color"
          onClick={updateFilter}
        >
          <FaCheck className="check-mark" />
        </button>
        <button
          type="button"
          className={`color ${color === '#000' && 'active'}`}
          style={{ backgroundColor: 'rgb(0, 0, 0)' }}
          value="#000"
          name="color"
          onClick={updateFilter}
        >
          <FaCheck className="check-mark" />
        </button>
        <button
          type="button"
          className={`color ${color === '#ffb900' && 'active'}`}
          style={{ backgroundColor: 'rgb(255, 185, 0)' }}
          value="#ffb900"
          name="color"
          onClick={updateFilter}
        >
          <FaCheck className="check-mark" />
        </button>
      </div>
      <div className="price-selector">
        <label htmlFor="price" className="filter-title">
          Price
        </label>
        <p className="price">{formatPrice(max_price)}</p>
        <input
          type="range"
          name="max_price"
          min={1}
          max={309900}
          value={max_price}
          onChange={updateFilter}
        />
      </div>
      <div className="shipping">
        <label htmlFor="shipping">Free Shipping</label>
        <input
          type="checkbox"
          checked={shipping}
          name="shipping"
          onChange={updateFilter}
        />
      </div>
      <button type="button" className="clear-btn" onClick={handleClearFilter}>
        Clear Filters
      </button>
    </form>
  );
};

export default Filters;
