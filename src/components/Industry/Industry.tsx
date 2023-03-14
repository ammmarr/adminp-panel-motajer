export default function Industry() {
    return (
        <div className="industry main-component">
            <h1 className="component-title">Add an Industry</h1>
            <form className="form">
                <div className="input-row">
                    <div className="input-item">
                        <label>Industry Name in ENG</label>
                        <input type="text" />
                    </div>
                    <div className="input-item">
                        <label>Industry name in ARA</label>
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
                        <label>Main Color</label>
                        <input type="color" />
                    </div>
                    <div className="input-item">
                        <label>Secondary Color</label>
                        <input type="color"/>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-item">
                        <label>Categories</label>
                        <input type="text" />
                    </div>
                </div>
                <button type="submit" className="form-button">ADD</button>
            </form>
        </div>
    )
}