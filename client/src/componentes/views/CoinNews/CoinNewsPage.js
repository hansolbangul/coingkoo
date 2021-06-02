import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CoinNews from './CoinNews';

function CoinNewsPage(props) {
    const [NewsDatas, setNewsDatas] = useState([]);

    useEffect(() => {
        axios.get('/api/crawling/news').then(response => {
            setNewsDatas(response.data);
        });
    }, []);

    return (
        <section className="news-container">
            <div className="coin-news-datas">
                {NewsDatas.map(news => (
                    <CoinNews
                        key={news.url}
                        url={'https://kr.investing.com/' + news.url}
                        image={news.image}
                        title={news.title}
                        summary={news.summary}
                        date={news.date}
                    />
                ))}
            </div>
        </section>
    );
}

export default withRouter(CoinNewsPage);
