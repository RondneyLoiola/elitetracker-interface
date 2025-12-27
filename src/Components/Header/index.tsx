import styles from './styles.module.css'

export type HeaderProps = {
	title: string;
}

function Header({title}: HeaderProps) {
	return (
		<header className={styles.container}>
			<h1>{title}</h1>
			<span>
				{`Hoje, ${new Intl.DateTimeFormat('pt-BR', {
					dateStyle: 'long',
					timeZone: 'America/Sao_Paulo',
				}).format(new Date())}`}
			</span>
		</header>
	);
}

export default Header;
