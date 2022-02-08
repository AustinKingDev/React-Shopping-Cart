import ItemPage from "./ItemPage";
import CartPage from './CartPage';
import { items } from './static-data';

const Content = ({ tab, onAddToCart, cart, onRemoveItem }) => {
    switch (tab) {
        case 'items':
            return <ItemPage items={items} onAddToCart={onAddToCart} />;
        case 'cart':
            return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>;
        default: break;
    }
};

export default Content;