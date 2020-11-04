import './App.css';
import Login from './components/Login';
import Widgets from './components/Widgets';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
	const user = null;
  return (
    <div className="app">
		{!user ? ( 
			<Login />
		) : (
			<>
				<Header />
				<div className="app__body">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			</>
		)}
		
    </div>
  	);
}

export default App;
