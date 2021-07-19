import Head from 'next/head';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../images/unknown.jpg';
import styles from '../styles/mainHeader.module.scss';
const MainHeader = () => {
	return (
		<nav className={styles.header}>
			<Link href="/MyPage">
				<IconButton>
					<PersonIcon className={styles.header__icon} fontSize="large" />
				</IconButton>
			</Link>
			<Image src={mainLogo} alt="headerIMG" width={70} height={70} />
			<IconButton>
				<ChatIcon className={styles.header__icon} fontSize="large" />
			</IconButton>
		</nav>
	);
};

export default MainHeader;
