import Product from "./Product.jsx";

function ProductTab(){
  return(<>
  <Product title="LapTop" price={55000} data={{ name: "Namitaa" }} features={["Fast", "Lightweight", "SSD", "Touchscreen"]} />
  <Product title="Mobile" price={15000} data={{ name: "Delta" }}/>
  <Product title="Pen" price="1"/> 

  </>)
  }
  export default ProductTab;