import { Fragment } from "react"
import Footer from "../../E-commerceHomePage/Footer/footer";
import NavbarPart from "../../E-commerceHomePage/Header/navbar-2";
import MainShipping from "./MainShipping";
import ShippingBtn from "./ShippingBtn";
import ShippingNavBar from "./ShippingNavBar";

const Shipping=()=>{
    return(
        <Fragment>
            <NavbarPart/>
            <ShippingNavBar />
            <MainShipping/>
            <Footer/>
        </Fragment>
    )
}
export default Shipping;