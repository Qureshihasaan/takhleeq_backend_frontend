import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../store/cartSlice';

export const useCart = () => {
  const items = useSelector(state => state.cart.items);
  const totalItems = useSelector(state => state.cart.totalItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const isOpen = useSelector(state => state.cart.isOpen);
  
  const dispatch = useDispatch();

  return {
    items,
    totalItems,
    totalPrice,
    isOpen,
    addToCart: (product, quantity = 1) => {
      dispatch(addToCart({ ...product, quantity }));
    },
    removeFromCart: (productId) => {
      dispatch(removeFromCart(productId));
    },
    updateQuantity: (productId, quantity) => {
      if (quantity <= 0) {
        dispatch(removeFromCart(productId));
      } else {
        dispatch(updateQuantity({ id: productId, quantity }));
      }
    },
  };
};
