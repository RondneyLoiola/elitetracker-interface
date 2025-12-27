import Header from '../../Components/Header';
import styles from './styles.module.css';

function Focus() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Header title='Tempo de Foco'/>
			</div>
		</div>
	);
}

export default Focus;
