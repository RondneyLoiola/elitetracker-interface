import { ListChecksIcon, SignOutIcon } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.css';

function SideBar() {
	const { userData } = useUser();

	return (
		<div className={styles.container}>
			<img src={userData.avatarUrl} alt={userData.name} />
			<div className={styles.links}>
				<Link to="/">
					<ListChecksIcon />
				</Link>
			</div>
			<SignOutIcon className={styles.signout} />
		</div>
	);
}

export default SideBar;
