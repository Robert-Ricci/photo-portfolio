import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './About';
import ImageGrid from './ImageGrid';
import Contact from './Contact';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/portfilio" component={ImageGrid} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    );
};

export default Router;