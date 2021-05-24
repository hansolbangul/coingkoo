import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CoinNews from "./CoinNews";

function CoinNewsPage(props) {

    const [NewsDatas, setNewsDatas] = useState([]);

    useEffect(() => {
        axios.get('/api/crawling/news')
             .then(response => {
                 setNewsDatas(response.data)
            })
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', marginTop: '70px'
        }}>
            <div className="coin-news-datas">
                {
                    NewsDatas.map(news => (
                        <CoinNews 
                            key={news.url}
                            url={news.url}
                            image={news.image}
                            title={news.title}
                            summary={news.summary}
                            date={news.date}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(CoinNewsPage)
