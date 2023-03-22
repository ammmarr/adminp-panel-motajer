
import { CategoryOutlined, ConstructionOutlined, FeaturedPlayListOutlined, Inventory2Outlined, LocalMallOutlined, PersonOutline, PersonOutlineOutlined, StorefrontOutlined } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"
import { Spin } from 'hamburger-react'
import logo from "/src/assets/motajer-ar-w.png"
import "../NavBar/navBar.scss"
import { useState } from "react"
export default function NavBar() {
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    return (

        <div className={`nav-container ${navIsOpen ? "nav-open" : ""}`}>
            <div className="menu-icon-container" onClick={() => setNavIsOpen(prev => !prev)} >
                <Spin color="white" size={20} toggled={navIsOpen} />
            </div>
            <div className="logo-user" >
                <img src={logo} className="logo" />
                <div className="user-image">
                    <PersonOutline />
                </div>
            </div>
            <ul className="nav-links">
                <li className="nav-item" onClick={() => navigate("/")}><Inventory2Outlined className="icon" /><p>Package</p></li>
                <li className="nav-item" onClick={() => navigate("/feature")}><FeaturedPlayListOutlined className="icon" /><p>Feature
                </p></li>
                <li className="nav-item" onClick={() => navigate("/costumer")}><PersonOutlineOutlined className="icon" /><p>Costumer</p></li>
                <li className="nav-item" onClick={() => navigate("/store")}><StorefrontOutlined className="icon" /><p>Store</p></li>
                <li className="nav-item" onClick={() => navigate("/industry")}><ConstructionOutlined className="icon" /><p>Industry</p></li>
                <li className="nav-item" onClick={() => navigate("/category")}><CategoryOutlined className="icon" /><p>  Category</p></li>
                <li className="nav-item" onClick={() => navigate("/product")}><LocalMallOutlined className="icon" /><p>Product</p></li>
            </ul>
        </div>

    )
}