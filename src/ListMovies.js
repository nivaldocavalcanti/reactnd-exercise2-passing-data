import React, {Component} from 'react';

class ListMovies extends Component {
	render() {
	  	const { profiles, users, movies } = this.props;
        return
          (
            <div>
            {profiles.map((profile)=>{
            <p>
              <h2>{movies[profile.favoriteMovieID].name}</h2>
              <p>Liked By:</p>
              <ul>
                <li>Nicholas Lain</li>
              </ul>
            </p>
    		})}
			</div>
          )
    }
}

export default ListMovies