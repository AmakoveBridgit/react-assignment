import React ,{ useState,useEffect}from "react";
import './style.css'


const Products=()=>{
    const[products,setProducts]=useState([])
    const [loading,setLoading]=useState([false])
    useEffect(()=>{
        (async()=>{
            await getProducts()
        })()

    },[])
    console.log({products});
    const getProducts=async()=>{
        try{
            setLoading(true);
            const response=await  fetch('https://dummyjson.com/products')
            const result =await response.json()
            setProducts(result.products)
            setLoading(false)
            
    }
    catch(error){
        console.log(error.message);
    }
}
if (loading){
    return <h2>loading.....</h2>
}

 return(
    <div className="products">
<h1> All Products</h1>
{products.map(item=>(
<div key={item.id}>
    <h2>{item.title}</h2>
    <img src={item.images[0]} alt={item.title} className="productImage" />
     <p className="productprice">price &nbsp;ksh{item.price}</p> 
     <p className="productDiscount">discount&nbsp;{item.discountPercentage}%</p> 
     <Link to={`/addDetails/${item.id}` }className="button"> 
     <button type="submit" className="button">More</button >

      </Link>


   
 

    </div>
 )) 
}


    </div>
 )
}
export default Products;