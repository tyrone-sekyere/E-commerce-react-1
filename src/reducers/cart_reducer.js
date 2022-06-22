import {
  ADD_TO_CART,
  CLEAR_CART,
  LOAD_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {
        product: { id, name, price, images },
        color,
        amount,
      } = action.payload;
      const image = images[0].url;
      const cartItem = {
        id,
        name,
        single_price: price,
        full_price: price * amount,
        image,
        color,
        amount,
      };

      const index = state.cart_items.indexOf(
        state.cart_items.filter((item) => item.id == id)[0]
      );

      if (index !== -1) {
        cartItem.full_price += state.cart_items[index].full_price;
        cartItem.amount += state.cart_items[index].amount;
        state.cart_items.splice(index, 1, cartItem);

        return { ...state, cart_items: [...state.cart_items] };
      }

      return { ...state, cart_items: [...state.cart_items, cartItem] };

    case REMOVE_CART_ITEM:
      const removeIndex = state.cart_items.indexOf(
        state.cart_items.filter((item) => item.id == action.payload)
      );
      state.cart_items.splice(removeIndex, 1);
      return { ...state, cart_items: [...state.cart_items] };

    case COUNT_CART_TOTALS:
      let count = 0;
      state.cart_items.map((item) => {
        count += item.full_price;
      });

      return { ...state, cart_total: count };

    case LOAD_CART:
      return { ...action.payload };

    case CLEAR_CART:
      return { cart_items: [], cart_total: 0 };

    case TOGGLE_CART_ITEM_AMOUNT:
      const replaceItem = state.cart_items.filter(
        (item) => item.id == action.payload.id
      );
      const itemIndex = state.cart_items.indexOf(replaceItem[0]);
      if (action.payload.change === 'increase') {
        replaceItem[0].amount++;
        replaceItem[0].full_price += replaceItem[0].single_price;
      } else if (
        action.payload.change === 'decrease' &&
        replaceItem[0].amount > 1
      ) {
        replaceItem[0].amount--;
        replaceItem[0].full_price -= replaceItem[0].single_price;
      }

      state.cart_items.splice(itemIndex, 1, replaceItem[0]);

      return { ...state, cart_items: [...state.cart_items] };

    default:
      break;
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
