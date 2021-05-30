import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Community from './views/Community/Community';
import CoinNewsPage from './views/CoinNews/CoinNewsPage';
import Auth from '../hoc/auth';
import Header from './views/Header/Header';
import MarketCapitalization from './views/MarketCapitalization/MarketCapitalization';
import Info from './views/Info/Info.js';
import CoinSite from './views/CoinSite/CoinSite';
// import News from './views/CoinNews/CoinNews';
import News from './views/Community/News';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                    <Route exact path="/community" component={Community} />
                    <Route exact path="/coinnews" component={CoinNewsPage} />
                    <Route exact path="/coinsite" component={CoinSite} />
                    <Route exact path="/marketcapitalization" component={MarketCapitalization} />
                    <Route exact path="/info" component={Info} />
                    <Route exact path="/community/news" component={News} />
                    {/* <Route exact path="/Community" component={Community} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
