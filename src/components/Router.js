import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './About';
import ImageGrid from './ImageGrid';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/imagegrid" component={ImageGrid} />
            <Route exact path="/about" component={About} />
        </Switch>
    );
};

export default Router;