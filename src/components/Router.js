import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';
import Upload from './Upload';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/upload" component={Upload} />
        </Switch>
    );
};

export default Router;