import React from 'react';
import styles from './style';
import Header from './components/Navbar/Header';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<div className={`${styles.boxWidth}`}>
			<Router>
				<Header />
				<AllRoutes />
				<Footer />
			</Router>
		</div>
	);
};

export default App;
