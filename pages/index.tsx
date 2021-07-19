import Layout from '../components/Layout';
import LandingPage from './LandingPage';
import wrapper from '../store/configure';
import axios from 'axios';
import { userActionTypes } from '../interface/iUserActType';

export default function Home() {
	return (
		<Layout title="LandingPage">
			<LandingPage />
		</Layout>
	);
}
