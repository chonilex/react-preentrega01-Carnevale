
// CartWidget.js

import { FaShoppingCart } from 'react-icons/fa';



const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart/>
      <span className="badge bg-primary">3</span> {/* Reemplaza "3" con tu número hardcodeado */}
    </div>
  );
};

export default CartWidget;
