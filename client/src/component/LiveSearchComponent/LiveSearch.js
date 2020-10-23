import React, { useState } from 'react';
import ShowLiveSearchResult from './ShowLiveSearchResult';


const LiveSearch = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <div className="live-search">
            <input
                type="text"
                placeholder="search anything..."
                value={img}
                onChange={inputEvent} />
            {img === "" ? null : <ShowLiveSearchResult name={img} />}
        </div>
    );
}

export default LiveSearch;