
import '../style/hero.css';
import reactLogo from "../assets/paw.jpg";

function App() {
  return (
    <div className="main-container">
      <div className='container'>
        <nav>
            <div className='nav'>Home</div>
            <div className='nav'>Works</div>
            <div className='nav'>Contact</div>
        </nav>

        <div className='content'>
            <img src={reactLogo} alt="" />
             <div className='text'>
                <h2>Welcome to my portfolio!</h2>
                <p>I am a web developer and artist, blending creativity with technology to <br /> create engaging digital experiences. Explore my work and discover <br />the intersection of art and code.</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
