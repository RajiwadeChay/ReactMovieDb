import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectRoute from './Route';


function App() {
  return (
    <div className='container'>
      <Header />
      <ProjectRoute />
      <Footer />
    </div>
  );
}

export default App;
