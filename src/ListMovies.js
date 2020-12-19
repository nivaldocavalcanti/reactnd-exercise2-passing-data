import React, {Component} from 'react';
import ListUsers from './ListUsers';

class ListMovies extends Component {
	render() {
      const { profiles, users, movies } = this.props;
      let users_movies = [];
      profiles.map((profile)=>{
        if(users_movies[profile.favoriteMovieID]){
          users_movies[profile.favoriteMovieID].users.push({id: profile.userID, name: users[profile.userID].name});
        } else {
          users_movies[profile.favoriteMovieID]= {users: [{id: profile.userID, name: users[profile.userID].name}]};
        }
        users_movies[profile.favoriteMovieID].name = movies[profile.favoriteMovieID].name;
        return profile;
      });
      Object.entries(movies).forEach(([key, movie]) => {
        if(users_movies[movie.id] === undefined) {
          users_movies[movie.id] = {name: movie.name, users: [{id: "0", name: "None of the current users liked this movie"}]}
        }
      });
      return (
        <div>
          {users_movies.map((movie)=>
            <div key={movie.name}>
              <h2>{movie.name}</h2>
              <div>
                <p>Liked By:</p>
                <ListUsers users={movie.users} />
              </div>
			      </div>
          )}
			  </div>
      )
    }
}

export default ListMovies