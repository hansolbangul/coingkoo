import React from 'react';
import './ImageUrl.css';

function ImageUrl({ url, name, image, year, trustScore, trustScoreRank }) {
    if (year === null) year = '연도 알 수 없음.';
    return (
        <div className="marketsite">
            <a href={url}>
                <h2>{trustScoreRank}</h2>
                <img src={image} alt={name} title={name} />
                <div className="marketsite__data">
                    <h3 className="marketsite__title">거래소 : {name}</h3>
                    <h5 className="marketsite__year">설립연도 : {year}</h5>
                    <h5 className="marketsite__trustscore">신뢰도 : {trustScore}</h5>
                </div>
            </a>
        </div>
    );
}

export default ImageUrl;
