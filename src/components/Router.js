import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './About';
import ImageGrid from './ImageGrid';
import Contact from './Contact';
import Upload from './Upload';

const Router = () => {
    return (
        <Switch>
            {/* <Route exact path="/portfolio" component={ImageGrid} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/upload" component={Upload} />
        </Switch>
    );
};

export default Router;