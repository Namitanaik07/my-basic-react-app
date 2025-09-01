import "./Product.css";//"./"means inside same folder otherwise /. means other folder

function Product({ title, price = 1, data, features = [] }) {
  
  let styles={backgroundColor:"lightblue", padding:"10px", borderRadius:"10px", width:"200px"}
    return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <p>₹{price}</p>
      {price>30000 ? <p style={{color:"green"}}>Expensive: discount of %</p> : <p style={{color:"blue"}}>Affordable</p>}
      <p style={{color:"red"}}>{data?.name}</p>

      {/* Render array elements */}
      <ul>
        {features.map((feature) => (//map tp the feture array
          <li>{feature}</li>
        ))}
      </ul>

    </div>
  );
}

export default Product;