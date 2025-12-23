import { GithubLogoIcon } from "@phosphor-icons/react";
import axios from "axios";
import Button from "../../Components/button";
import styles from './styles.module.css'

function Login() {
    async function handleAuth() {
        const { data } = await axios.get('http://localhost:4000/auth')

        window.location.href = data.redirectUrl
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Entre com</h1>
                <Button onClick={handleAuth} type="button">
                    <GithubLogoIcon size={24} />
                    Github
                </Button>
                <p>Ao entrar, eu concordo com o Termo de Serviço e Política de Privacidade</p>
            </div>
        </div>
    )
}

export default Login