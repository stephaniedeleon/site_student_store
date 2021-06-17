import StoreProducts from "../StoreProducts/StoreProducts"
import About from "../About/About"
import "./Home.css"

export default function Home({ products }) {

  return (
    <div className="Home">        
      <h2>About</h2>
      <About />
      <h2>Products</h2>
      <StoreProducts products={products} />
    </div>
  )
}