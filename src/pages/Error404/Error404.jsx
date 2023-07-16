import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './eror.scss'
export const Error404 = () => {
	return (
		<>
			<Header />

			<div className='container'>
			

        <h1 className='not_found'>404 Not Found</h1>
        
        <p className='eror_pr'>Your visited page not found. You may go home page.</p>
			<Link className='eror_btn view_all' to='/'> Back to home page</Link>
      </div>

			<Footer />
		</>
	);
};
