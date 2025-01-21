import '../style/hero.css';
import profilePicture from "../assets/ivan.jpg"; 

function App() {
  return (
    <div className="portfolio-page">
      <header className="header">
        <div className="logo">Ivan Macasa</div>
        <nav className="nav">
          <a href="#about">About me</a>
          <button className="cta-button">Say hi!</button>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1>Hello! I'm Ivan!</h1>
          <p>
             I am a student that loves to discover and explore new things
          </p>
        </div>
        <div className="hero-image">
          <img src={profilePicture} alt="Profile" />
        </div>
      </main>
    </div>
  );
}

export default App;