
export default function Category() {
    return (
        <div className="category main-component">
            <h1 className="component-title">Add a Category</h1>
            <form className="wrapper">
                <div className="input-row">
                    <div className="input-item">
                        <label>Category Name</label>
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
                        <label>Industry</label>
                        <input type="text" />
                    </div>

                </div>
                <button type="submit" className="form-button">ADD</button>
            </form>
        </div>
    )
}