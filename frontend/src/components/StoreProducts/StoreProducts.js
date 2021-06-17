import "./StoreProducts.css";
import Product from '../Product/Product';

export default function StoreProducts({ products = [] }) {

  return (
    <div className="StoreProducts">
        {products.map((item) => (
            <Product key={item.id} item={item} />
        ))}
    </div>
  );
}