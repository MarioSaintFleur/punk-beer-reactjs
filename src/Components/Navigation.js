import React, {Component} from "react";
import './Navigation.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Search from '../Components/Search.js';
import Favorites from './Favorites.js';

 class Navigation extends Component{
    constructor(props){
        super(props)
        this.state = {
            favorites: [],
            loading: true,
            itemIsFav: false
        }
    }

    itemFavorited = (favorite) =>{
        const {favorites} = this.state;

        this.setState({loading: true}, () => {
          if(!favorites.some(alreadyFavorited => alreadyFavorited === favorite)){
            
              this.setState({
                ...this.state,
                loading: false,
                favorites: [...this.state.favorites, favorite],
                itemIsFav: true
              })
          }
        });
    }

    render(){
        return(
            <Router>
                <div>
                    <nav className="nav">
                        <div className="navContainer">
                            <h1 className="navTitle">Punk Beer</h1>
                        <div className="nav-listContainer">
                                <ul className="nav-list">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" onClick={() => this.forceUpdate()}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/favorites" onClick={() => this.forceUpdate()}>Favorites</Link>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/" exact >
                            <Search itemFavorited={this.itemFavorited} favorites={this.state.favorites} itemIsFav={this.state.itemIsFav}/>
                        </Route>
                        <Route path="/favorites">
                            <Favorites favorites={this.state.favorites} loading={this.state.loading}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}



export default Navigation;