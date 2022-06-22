import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const filteredProducts = action.payload.products.filter((item) => {
        if (!state.filters.shipping) {
        }
        return (
          item.price <= state.filters.max_price &&
          (state.filters.shipping
            ? item.shipping === state.filters.shipping
            : item) &&
          (state.filters.color != 'all'
            ? item.colors.includes(state.filters.color)
            : item) &&
          (state.filters.company != 'all'
            ? item.company == state.filters.company
            : item) &&
          (state.filters.category != 'all'
            ? item.category == state.filters.category
            : item) &&
          (state.filters.search_input
            ? item.name.startsWith(state.filters.search_input)
            : item)
        );
      });
      return { ...state, filtered_products: filteredProducts };

    case LOAD_PRODUCTS:
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort_by: action.payload };

    case SORT_PRODUCTS:
      const sortUp = (prop) => {
        return action.payload.products.sort((a, b) =>
          a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0
        );
      };
      const sortDown = (prop) => {
        return action.payload.products.sort((a, b) =>
          b[prop] > a[prop] ? 1 : a[prop] > b[prop] ? -1 : 0
        );
      };

      switch (action.payload.setting) {
        case 'name-z-a':
          return {
            ...state,
            filtered_products: sortDown('name'),
          };
        case 'name-a-z':
          return {
            ...state,
            filtered_products: sortUp('name'),
          };
        case 'price-lowest':
          return { ...state, filtered_products: sortUp('price') };
        case 'price-highest':
          return { ...state, filtered_products: sortDown('price') };
      }
    case CLEAR_FILTERS:
      console.log(action.payload);
      return { ...state, filters: action.payload.filters };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
