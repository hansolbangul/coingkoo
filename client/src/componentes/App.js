import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Community from './views/Community/Community';
import Auth from '../hoc/auth';
import Header from './views/Header/Header';
import Marketcapitalization from './views/MarketCapitalization/MarketCapitalization';
import Info from './views/Info/Info.js';
import CoinSite from './views/CoinSite/CoinSite';

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
                    <Route exact path="/coinsite" component={CoinSite} />
                    {/* <Route exact path="/Community" component={Community} /> */}
                    {/* <Route exact path="/Community" component={Community} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
