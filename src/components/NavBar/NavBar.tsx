
import { CategoryOutlined, ConstructionOutlined, FeaturedPlayListOutlined, Inventory2Outlined, LocalMallOutlined, PersonOutline, PersonOutlineOutlined, StorefrontOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

import logo from "../../assets/motajer-ar-w.png"
import "../NavBar/navBar.scss"
export default function NavBar() {
const navigate = useNavigate()

    return (
        <div className="nav-container">
            <div className="logo-user" >
                <img src={logo} className="logo" />
                <div className="user-image">
                    <PersonOutline />
                </div>
            </div>
            <ul className="nav-links">
                <li className="nav-item" onClick={() => navigate("/")}><Inventory2Outlined className="icon" /><p>Package</p></li>
                <li className="nav-item" onClick={() => navigate("/Feature")}>< FeaturedPlayListOutlined className="icon" /><p>Feature
                </p></li>
                <li className="nav-item" onClick={() => navigate("/Costumer")}><PersonOutlineOutlined className="icon" /><p>Costumer</p></li>
                <li className="nav-item" onClick={() => navigate("/Store")}><StorefrontOutlined className="icon" /><p>Store</p></li>
                <li className="nav-item" onClick={() => navigate("/Industry")}><ConstructionOutlined className="icon" /><p>Industry</p></li>
                <li className="nav-item" onClick={() => navigate("/Category")}><CategoryOutlined className="icon" /><p>  Category</p></li>
                <li className="nav-item" onClick={() => navigate("/Product")}><LocalMallOutlined className="icon" /><p>Product</p></li>

            </ul>
        </div>
    )
}