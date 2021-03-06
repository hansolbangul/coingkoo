import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageUrl from './ImageUrl';
import './CoinSite.css';
import { withRouter } from 'react-router-dom';

function MarketSite(url) {
    const [site, setSite] = useState(null);

    const callUrl = async () => {
        try {
            const { data } = await axios.get(url);
            setSite(data);
            // console.log(data);
        } catch {
            console.log('err');
        } finally {
            console.log('final');
        }
    };

    useEffect(() => {
        callUrl();
    }, []);

    return site;
}

const CoinSite = () => {
    const site = MarketSite('https://api.coingecko.com/api/v3/exchanges?per_page=100');

    return (
        <section className="container">
            <div className="marketsites">
                {site &&
                    site.map((e) => (
                        <ImageUrl
                            name={e.name}
                            url={e.url}
                            image={e.image}
                            year={e.year_established}
                            trustScore={e.trust_score}
                            trustScoreRank={e.trust_score_rank}
                        />
                    ))}
            </div>
        </section>
    );
};

export default withRouter(CoinSite);
