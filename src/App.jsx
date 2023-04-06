import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<button type='button' className='btn btn-primary'>
				Primary
			</button>
			<button type='button' className='btn btn-secondary'>
				Secondary
			</button>
			<button type='button' className='btn btn-success'>
				Success
			</button>
			<button type='button' className='btn btn-danger'>
				Danger
			</button>
			<button type='button' className='btn btn-warning'>
				Warning
			</button>
			<button type='button' className='btn btn-info'>
				Info
			</button>
			<button type='button' className='btn btn-light'>
				Light
			</button>
			<button type='button' className='btn btn-dark'>
				Dark
			</button>
			<button type='button' className='btn btn-primary'>
				Primary
			</button>
			<button type='button' className='btn btn-secondary'>
				Secondary
			</button>
			<button type='button' className='btn btn-success'>
				Success
			</button>
			<button type='button' className='btn btn-danger'>
				Danger
			</button>
			<button type='button' className='btn btn-warning'>
				Warning
			</button>
			<button type='button' className='btn btn-info'>
				Info
			</button>
			<button type='button' className='btn btn-light'>
				Light
			</button>
			<button type='button' className='btn btn-dark'>
				Dark
			</button>
			<div className='card'>
				<img src='...' className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>Card title</h5>
					<p className='card-text'>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href='#' className='btn btn-primary'>
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
