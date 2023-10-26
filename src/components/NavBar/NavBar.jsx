

import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Mi Tienda</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;


