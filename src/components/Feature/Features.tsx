export default function Features() {
    return (
        <div className="features main-component">
            <h1 className="component-title">Add a Feature</h1>
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
                <button type="submit" className="form-button">ADD</button>
            </form>
        </div>
    )
}