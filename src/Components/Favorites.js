import React, {Component} from 'react';
import './Favorites.css';

//Return the item that someone selected as their favorite
class Favorites extends Component{
   
    
    render(){
       //Local array with props from the Navigation component of favorites passed in as its value 
        const {favorites, loading} = this.props;

        return(
            <div className="favoritesContainer">
                
                {loading ? <h1>Please select a favorite item to see your favorites displayed here</h1> : favorites.map((item, key) => {
                            
                                return(   // parenthesis here
                                    <ul className="favorites-list" key={key}>
                                    <li className="favorites" key={key.id}>
                                        <h3 className="favorites-title">{item.name}</h3>
                                            <p className="favorites-description" key={key.id}>{item.description}</p>
                                                <img className="favorite-item-pic" 
                                                    key={key.id} 
                                                    src={item.image_url} 
                                                    alt={item.name}
                                                />
                                            <p className="favorite-item-abv" key={key.id}>{"Alchol Levels: " + item.abv}</p>
                                    </li>
                                    </ul>
                                ); 
                        })}
            </div>
        );
    }

    
}


export default Favorites;