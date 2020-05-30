import { useState } from "react";

const Prices = ({ bpi }) => {
    const [currency, setCurrency] = useState("USD"); 

    return (
        <div>
            <select className="form-control" onChange={e => setCurrency(e.target.value)}>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
            </select>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for {bpi[currency].description} : <span className="badge badge-primary">{bpi[currency].code}</span> <strong>{bpi[currency].rate}</strong>
                </li>
            </ul>
        </div>
    )
}

export default Prices;