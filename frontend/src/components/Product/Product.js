import { formatAmount } from "../../utils/format";
import { Link } from "react-router-dom";
import "./Product.css";


export default function Product({ key, item }) {

    return (
      <div className="Product">
        <Link to={`/store/${item.id}`} >
            <img alt={`${item.name} pic`} src={item.image} />
            <div className="info">
                <p className="name">{item.name}</p>
                <p className="price">{formatAmount(item.price)}</p>
            </div>
            <span className="material-icons"> + </span>
            <span className="material-icons"> - </span>
        </Link>
      </div>
    );
  }


/*
{
    "id": 1,
    "name": "Rice Krispies",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg",
    "description": "Delicious corn-based rice grains melted together with marshmallows into a square-like shape.",
    "price": 0.99
}
*/