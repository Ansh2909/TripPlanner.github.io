import { useState } from "react";


function Card({ id, image, info, name, price, removeTour}) {

    const [readmore, setReadmore] = useState(false);
    const desc = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }



    return (
        <div className="card">

            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {desc}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={ ()=> removeTour(id) }>
                Not Interested
            </button>

        </div>
    );
}

export default Card;