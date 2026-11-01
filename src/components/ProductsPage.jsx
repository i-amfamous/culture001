import "./styles/products.css"
import NavBar from "./NavBar"
import Footer from "./Footer"

const ProductsPage = () => {
  return (
   <>
   <NavBar />
     <main className="page-products">
      <div className="hero">
        <h1>Shop Kente & African Wear</h1>
      </div>

      <div className="products">
        <h2>Shop the Collection</h2>
        <div className="productsContainer">
         {/* Products appears here */}
        </div>
      </div>
    </main>
    <Footer />
   </>
  )
}

export default ProductsPage