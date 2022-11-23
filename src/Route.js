import { Routes, Route } from 'react-router-dom';
import MovieDetails from './components/Movie-Details';
import NoMatch from './components/NoMatch';
import PopularMovie from './components/PopularMovie';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';


function ProjectRoute() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<PopularMovie />} />
                <Route path='/toprated' element={<TopRated />} />
                <Route path='/upcoming' element={<Upcoming />} />
                <Route path='/movie-details/:id' element={<MovieDetails />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </main>
    )
}

export default ProjectRoute;
