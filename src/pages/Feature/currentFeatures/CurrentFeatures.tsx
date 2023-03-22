import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { setFeatures } from "../../../store/featureSlice";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Feature } from "../../../types/types.js";
export default function Features() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const featuredData = useSelector(state => state.features.features)
    console.log(featuredData)
    const iconStyles = { color: "inherit" }

    const handleDelete = (id: string) => {
        const filtered = featuredData.filter((del: Feature) => del.id != id)
        dispatch(setFeatures(filtered))
    }
    console.log(featuredData)
    return (

        <div className="features main-component">
            <h1 className="component-title">Features</h1>
            <div className="wrapper">
                <table className="features-table ">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name EN</th>
                            <th>Name AR</th>
                            <th>Price USD</th>
                            <th>Price EGP</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {featuredData.map((feature:Feature) => <tr key={feature.id}>
                            <td className="id">{feature.id}</td>
                            <td>{feature.name_en}</td>
                            <td>{feature.name_ar}</td>
                            <td>{feature.price_usd} USD</td>
                            <td>{feature.price_egp}     EGP</td>
                            <td id="ed-del-icons-td"><div className="ed-del-icon-container" style={{ color: "#f81f58 " }} onClick={() => handleDelete(feature.id)}><DeleteOutlineIcon style={iconStyles} /></div> <div className="ed-del-icon-container" style={{ color: "#5b5fbb" }} onClick={() => navigate(`/feature/${feature.id}`)}> <ModeEditIcon color="inherit" style={iconStyles} /></div> </td>
                        </tr>)}
                    </tbody>
                </table>
                <button onClick={() => navigate("/feature/add")} className="form-button">ADD A COSTUME FEATURE</button>
            </div>
        </div>

    )
}