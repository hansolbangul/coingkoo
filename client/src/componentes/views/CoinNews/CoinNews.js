import React from "react";
import PropTypes from "prop-types";
import "./CoinNews.css";

function News({ key, url, image, title, summary, date }) {
    return (
        <a href={url}>
        <div className="coin-news">
            
            <img src={image} alt={title} />
            <div className="news__data">
            <h3 className="news__title">{title}</h3>
            <h5 className="news__date">{date}</h5>
            <p className="news__summary">{summary.slice(0, 100)}...</p>
            </div>
        </div>
        </a>
    );
}

News.propTypes = {
    key: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};

export default News;