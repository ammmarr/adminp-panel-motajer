import "../Package/package.scss"
import { motion } from "framer-motion"

export default function Package() {

    return (
    <div className="package">
            <h1 className="component-title">Add a Package</h1>
            <form className="form">
                <div className="input-row">
                    <div className="input-item">
                        <label>Name in English</label>
                        <input type="text" />
                    </div>
                    <div className="input-item">
                        <label>Name in Arabic</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-item">
                        <label>Code</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-item">

                        <label>Monthly price in EGP</label>
                        <input type="number" />
                    </div>
                    <div className="input-item">

                        <label>Monthly price in USD</label>

                        <input type="number" />
                    </div>

                </div>
                <div className="input-row">
                    <div className="input-item">

                        <label>Annual price in EGP</label>
                        <input type="number" />
                    </div>
                    <div className="input-item">

                        <label>Annual price in USD</label>

                        <input type="number" />
                    </div>

                </div>
                <div className="input-row">
                    <div className="input-item">

                        <label>Quarter price in EGP</label>
                        <input type="number" />
                    </div>
                    <div className="input-item">

                        <label>Quarter price in USD</label>

                        <input type="number" />
                    </div>

                </div>

                <div className="input-row">
                    <div className="input-item">
                        <label htmlFor="">Features of the plan</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <button type="submit" className="form-button">ADD</button>
            </form>
            </div>
    )
}