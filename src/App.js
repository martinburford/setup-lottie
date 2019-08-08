// React imports
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// Local project (JavaScript) imports
import Homepage from './containers/Homepage';
import Animation1 from './containers/Animation1';
import Animation2 from './containers/Animation2';
import Animation3 from './containers/Animation3';

// Local project (SCSS) imports
import './assets/scss/site.scss';

class App extends Component {
    render(){
        return (
            <div>
                <nav>
                    <Link className="nav__item" to="/">Homepage</Link> | 
                    <Link className="nav__item" to="/animation1">Animation 1</Link> | 
                    <Link className="nav__item" to="/animation2">Animation 2</Link> | 
                    <Link className="nav__item" to="/animation3">Animation 3</Link> | 
                </nav>
                <div>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/animation1" exact component={Animation1} />
                    <Route path="/animation2" exact component={Animation2} />
                    <Route path="/animation3" exact component={Animation3} />
                </div>
            </div>
        );
    }
}

export default App;