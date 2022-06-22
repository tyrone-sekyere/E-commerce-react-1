import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  filters: {
    max_price: 309999,
    color: 'all',
    category: 'all',
    company: 'all',
    shipping: false,
    search_input: '',
  },
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort_by: 'price-lowest',
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({
      type: FILTER_PRODUCTS,
      payload: { products: products, filters: state.filters },
    });
  }, [state.filters]);

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'max_price':
        value = Number(value);
        break;
      case 'shipping':
        value = e.target.checked;
        break;
      default:
        break;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const gridListControl = (setting) => {
    if (setting === 'list') {
      dispatch({ type: SET_LISTVIEW });
    } else if (setting === 'grid') {
      dispatch({ type: SET_GRIDVIEW });
    }
  };
  const sortByControl = (setting) => {
    dispatch({ type: UPDATE_SORT, payload: setting });
    dispatch({
      type: SORT_PRODUCTS,
      payload: { products: state.filtered_products, setting: setting },
    });
  };

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTERS,
      payload: initialState,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilter,
        gridListControl,
        sortByControl,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
