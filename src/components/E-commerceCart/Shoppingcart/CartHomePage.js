import { Fragment } from "react"
import Navbar from "../../E-commerceHomePage/Header/navbar"
import ShopingNavBar from "./ShopingNavBar";
import ProductSummary from "./ProductSummary";
import NavbarPart from "../../E-commerceHomePage/Header/navbar-2";



const CartPage=()=>{
    return(
        <Fragment>
            <ShopingNavBar />
            <ProductSummary />
        </Fragment>

    )
}

export default CartPage;