import React, {Component} from "react";
import './Search.css'; 
import Item from './Item.js';

class Search extends Component{
    constructor(props){
        super(props)

        this.state ={
            items: [],
            itemInput: " "
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            itemInput : event.target.value
        })
    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            items: <Item itemInput={this.state.itemInput} itemFavorited={this.props.itemFavorited}/>
        })
    }
  
    render(){
        const displayFav = {
            display: "block"
        }
       
        return(
            <div className="searchContainer">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="searchInput" 
                        type="text" 
                        placeholder="What's Your Favorite Type Of Beer?"
                        name="items"
                        value={this.state.itemInput}
                        onChange={this.handleChange}
                    />
                    <input className="searchBtn"  type="submit" value="Search"/>
                 </form>
                 <div className="itemContainer">
                    {this.state.items}
                </div>
                {this.props.itemFavorited ?
                    <div className="favorite-item-notification" style={this.props.itemIsFav ? displayFav : null}>
                       
                        <h2>Selected Items 
                            <br/>
                            (check favorites page for actual list):
                        </h2>
                    
                            {this.props.favorites.map((item, key) => {
                                        
                                        return( 
                                            <div>
                                                <h3 className="favorites-title" key={key}>{item.name}</h3>
                                            </div>
                                        ); 
                                })}

                    </div>
                : " "}
            </div>
        )
    }

}


export default Search;