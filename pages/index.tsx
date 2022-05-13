import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1 style={{marginTop:"0px",color:"#f1f1f1"}}>Sign innn</h1>
			<Link href={'/home'}>{'>>>>'}</Link>
		</div>
	);
};

export default Home;
