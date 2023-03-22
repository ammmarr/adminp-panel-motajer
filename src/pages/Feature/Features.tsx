import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import InputItem from "../../components/InputItem";
import { staticData } from "../../staticData/Data";
import { setFeatures } from "../../store/featureSlice";
import { Feature } from "../../types/types";

export default function Features() {
    const [formData, setFormData] = useState<Feature>({
        id: "",
        name_en: "",
        name_ar: "",
        price_egp: 0,
        price_usd: 0,
    })
    const dispatch = useDispatch()
    const id: number | string = useParams().featureId
    const pageType = id === "add" ? "add" : "edit"
    const currentFeatures = useSelector(state => state.features.features)

    const navigate = useNavigate()
    useEffect(() => {
        if (id != "add") {

            const getEditableData = currentFeatures.find((item: Feature) => item.id == id) && currentFeatures.find(item => item.id == id)
            setFormData(getEditableData)
        } else {
            setFormData({
                id: "",
                name_en: "",
                name_ar: "",
                price_egp: 0,
                price_usd: 0,
            })
        }

    }, [])
    console.log(currentFeatures)
    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        setFormData({
            ...formData,
            [evt.target.name]: value
        });
    }
    function handleSubmit(e: MouseEvent<HTMLButtonElement, MouseEvent<Element, MouseEvent>>) {
        e.preventDefault()
        let finalArray
        if (pageType === "add") {

            dispatch(setFeatures([...currentFeatures, formData]))
        } else {
            let filtered = currentFeatures.filter((item: Feature) => item.id != id)
            //errorrr heeerrr
            dispatch(setFeatures([...filtered, formData]))
        }
        setFormData({
            id: "",
            name_en: "",
            name_ar: "",
            price_egp: 0,
            price_usd: 0,
        })
        navigate("/feature")

    }
    return (
        <div className="features main-component">
            <h1 className="component-title">{pageType === "add" ? "ADD" : "EDIT"} a Feature</h1>
            <form className="wrapper">
                <div className="input-row">

                    <InputItem inputType="text" label="Name in English" name="name_en" handleChange={handleChange} value={formData.name_en} />
                    <InputItem inputType="text" label="Name in Arabic" name="name_ar" handleChange={handleChange} value={formData.name_ar} />

                </div>
                <div className="input-row">
                    <InputItem inputType="text" label="Code" name="id" handleChange={handleChange} value={formData.id} />                </div>
                <div className="input-row">
                    <InputItem inputType="number" label="Monthly price in EGP" name="price_egp" handleChange={handleChange} value={formData.price_egp} />
                    <InputItem inputType="number" label="Monthly price in USD" name="price_usd" handleChange={handleChange} value={formData.price_usd} />
                </div>
                <button type="submit" className="form-button" onClick={(e) => handleSubmit(e)}>{pageType === "add" ? "ADD" : "EDIT"}</button>
            </form>
        </div>
    )
}