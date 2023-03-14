export default function Store() {
    return (
        <div className="store main-component">
            <h1 className="component-title">Add a Store</h1>
            <form className="form">
                <div className="input-row">
                    <div className="input-item">
                        <label>Store Name</label>
                        <input type="text" />
                    </div>

                </div>
                <div className="input-row">
                    <div className="input-item">
                        <label>Domain</label>
                        <input type="text" />
                    </div>
                    <div className="input-item">
                        <label>Sub Domain</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-item">

                        <label>Admin Name</label>
                        <input type="text" />
                    </div>
                    <div className="input-item">

                        <label>Admin Phone</label>

                        <input type="number" />
                    </div>

                </div>
                <div className="input-row">
                    <div className="input-item">

                        <label>Admin Email</label>
                        <input type="email" />
                    </div>
                    <div className="input-item">

                        <label>Admin Password</label>

                        <input type="Password" />
                    </div>

                </div>
                <div className="input-row">
                    <div className="input-item">

                        <label>Package</label>
                        <input type="text" />
                    </div>
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