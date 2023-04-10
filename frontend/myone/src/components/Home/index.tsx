import logo from '../../resources/images/logo.gif';
import '../../resources/styles/App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>
                    My ONE
                </h3>
            </header>
        </div>
    )
}

export default Home;