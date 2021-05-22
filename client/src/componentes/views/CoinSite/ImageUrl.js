import React from 'react';
import './ImageUrl.css';

function ImageUrl({ url, name, image, year, trustScore, trustScoreRank }) {
    console.log(url, name, image);
    return (
        <div className="marketsite">
            <a href={url}>
                <h2>{trustScoreRank}</h2>
                <img src={image} alt={name} title={name} />
                <div className="marketsite__data">
                    <h3 className="marketsite__title">이름 : {name}</h3>
                    <h5 className="marketsite__year">설립연도 : {year}</h5>
                    <h5 className="marketsite__year">신뢰도 : {trustScore}</h5>
                    {/* <ul className="market__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="market__genre">
                                {genre}
                            </li>
                        ))}
                    </ul> */}
                    {/* <p className="market__summary">{summary.slice(0, 180)}...</p> */}
                </div>
            </a>
        </div>
        // <div style={{ display: 'flex' }}>
        //     <a href={url} style={{ display: 'table-column' }}>
        //         <img src={image} />
        //         <h3>{name}</h3>
        //     </a>
        // </div>
    );
}

export default ImageUrl;
