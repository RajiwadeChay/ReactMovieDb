import MovieDetails from "./Movie-Details";
import MovieList from "./Movie-list";

function Main() {
    return (
        <div className="main">
            <div className="wrapper">
                <MovieList />
                <MovieDetails />
            </div>
        </div>
    );
}

export default Main;