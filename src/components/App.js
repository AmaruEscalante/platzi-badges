import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Layout from './Layout';
import Landing from '../pages/Landing';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BagdeNew';
import NotFound from '../pages/NotFound';

export default function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/badges" component={Badges}/>
                        <Route path="/badges/new" component={BadgeNew}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Fragment>
    );
}