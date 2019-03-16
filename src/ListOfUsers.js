import React, { Component } from "react";

class ListOfUsers extends Component {
  render() {
    const { users, usersWhoLikedMovie } = this.props;
    
    if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0){
        return <p> no one likes it </p>;
        }
    
    const listOflikers = usersWhoLikedMovie.map( id => (
          <li key={id}>
             <p>{users[id].name}</p>
          </li>
          )
       );
   
   return <ul>{listOflikers}</ul>;
  }
}

export default ListOfUsers;