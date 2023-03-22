export default function Costumer() {
    return (
        <div className="costumer main-component">
            <h1 className="component-title">Add a Costumer</h1>
            <form className="wrapper">
                <div className="input-row">
                    <div className="input-item">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="input-item">
                        <label>Phone</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="input-row">
                    <div className="input-item">

                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="input-item">

                        <label>Password</label>

                        <input type="password" />
                    </div>

                </div>
                <div className="input-row">
                    <div className="input-item">
                        <label>Stores</label>
                        <input type="text" />
                    </div>
                </div>
                <button type="submit" className="form-button">ADD</button>
            </form>
        </div>
    )
}