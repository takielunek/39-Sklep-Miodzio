import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/shop' element={<Shop />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default AllRoutes;
