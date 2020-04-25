import React, {Component} from "react";
import './Item.css';

class Item extends Component{
    constructor(props){
        super(props)
        this.state ={
          items: [],
          favorites: []
       }
    }
    

    itemSearch = (itemInput) =>{
   

        const url = `https://api.punkapi.com/v2/beers?beer_name=${(this.props.itemInput).trim()}`;
        
        fetch(url, ({method: "GET"}))
          .then(res => res.json())
          .then(
            (result) => {
              if(itemInput !== " "){
        
                this.setState({
                  ...this.state,
                      items: result.map((item, i) =>(
                          <ul className="item-list" key={i}>
                              <li className="item" key={i.id}>
                                <img 
                                  className="item-favorite-icon"
                                  src="../icons8-beer-96.png"
                                  alt="Favorite Beer Icon"
                                  key={i.id}
                                  onClick={() => this.props.itemFavorited(item)}
                                />
                                  <h3 className="item-title">{item.name}</h3>
                                  <p className="item-description" key={i.id}>{item.description}</p>
                                  <img className="item-pic" 
                                      key={i.id} 
                                      src={item.image_url} 
                                      alt={item.name}
                                  />
                                  <p className="item-abv" key={i.id}>{"Alchol Levels: " + item.abv}</p>
                              </li>
                          </ul>
                      )
                    )
                });
              }
            },
            (error) => {
              this.setState({
                ...this.state,
                error
              });
            }
          )
      }
      
      componentDidMount = () => {
       this.itemSearch("");
      }

      render(){
          return(
            <div className="itemContainer">
              {this.state.items}
            </div>
          )
      }
}

export default Item;