import React from 'react';
import './Sort.scss';
import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';
const Sort = () => {
  const { gridListControl, grid_view, sortByControl, filtered_products } =
    useFilterContext();

  return (
    <div className="sort-products">
      <div className="layout-control">
        <BsFillGridFill
          className={`icon ${grid_view && 'active'}`}
          name="grid"
          onClick={() => gridListControl('grid')}
        />
        <BsList
          className={`icon ${grid_view || 'active'}`}
          name="list"
          onClick={() => gridListControl('list')}
        />
      </div>
      <p className="products-found">
        {filtered_products.length} Products Found
      </p>
      <div className="divider"></div>
      <div className="sort-by">
        <p>Sort By</p>
        <select
          name="sort-by"
          id=""
          onChange={(e) => sortByControl(e.target.value)}
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a-z">Name (A-Z)</option>
          <option value="name-z-a">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
