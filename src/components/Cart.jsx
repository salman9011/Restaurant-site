import { useDispatch, useSelector } from "react-redux";
import ItemLstAccordon from "./ItemLstAccordon";
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{
const cartItems=useSelector((store)=> store.cart.items);
const dispatch = useDispatch();
const handleClearCart = () =>{
    dispatch(clearCart()); 
}
return <div>
   <div className="flex justify-around items-center ">
    <h1 className="font-bold  text-2xl text-center pt-4  mx-10 ">Cart</h1>
    <button className="mt-4 mx-4 bg-black p-2 rounded-md text-white" onClick={handleClearCart}>Clear Cart</button>
    </div>
    { cartItems.length==0 && <h3 className="text-center mt-20" >your cart is empty , add items to your cart</h3>}
    <div  className="w-6/12 m-auto pt-4">
        <ItemLstAccordon  items ={cartItems}/>
    </div>
</div>
}
export default Cart;