import React, { Component } from "react";
import ListOfMovies from "./ListOfMovies";


class ListDashboard extends Component {
  render(){
    const {usersByMovie, movies, users } = this.props;
    
    const listOfMovies = Object.keys(movies).map(id => (
      <ListOfMovies 
         key={id}  
         users={users} 
         usersWhoLikedMovie={usersByMovie[id]}
         movieInfo={movies[id]}
      />
      ));
      return <ul>{listOfMovies}</ul>;

  }
}

export default ListDashboard;
