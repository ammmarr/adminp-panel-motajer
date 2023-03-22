import Category from "../pages/Category/Category"
import Costumer from "../pages/Costumer/Costumer"
import Features from "../pages/Feature/Features"
import Industry from "../pages/Industry/Industry"
import Package from "../pages/Package/Package"
import Product from "../pages/Product/Product"
import Store from "../pages/Store/Store"
import { Routes } from "../types/types"
import CurrentFeature from "../pages/Feature/currentFeatures/CurrentFeatures"


export const routes: Routes[] = [{

    path: "/",
    element: <Package />
}, {

    path: "/feature",
    element: <CurrentFeature />
}, 
{
//costum feature
    path: "/feature/:featureId",
    element: <Features />
},{

    path: "/costumer",
    element: <Costumer />
}, {

    path: "/store",
    element: <Store />
}, {

    path: "/industry",
    element: <Industry />
}, {
    path: "category",
    element: <Category />
}
    , {
    path: "/product",
    element: <Product />
}
]