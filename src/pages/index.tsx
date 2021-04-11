import { signIn, useSession } from 'next-auth/client';
import styles from '../styles/pages/Index.module.css';
import {useRouter} from 'next/router'


export default function Index() {

  const [ session, loading ] = useSession()
  const router = useRouter()

  return (
    <div className={styles.container}>

      <img className={styles.bg} src="/images/bg.png" alt=""/>

      {!session && <>


        <div className={styles.section}>

          <div className={styles.header}>

            <img className={styles.logoImage} src="/logo-tomatte.svg" alt="logo"/>
            <img className={styles.infoHeader} src="/icons/info.svg" alt="info"/>

          </div>
            <p className={styles.info1}>
              Promova sua saúde e  mantenha o foco nas atividades.
            </p>
            <p className={styles.info2}>
              O Tomatte combina a técnica pomodoro com alongamentos durante as pausas.
            </p>
    
            <div className={styles.buttons}>

              <button type="button" 
              className={styles.loginButton}
              onClick={() => 
              signIn('github', { callbackUrl: 'http://localhost:3000/home' })}>
                <img src="/icons/github.svg" alt=""/>
                LOGIN
              </button>

              <button type="button"
              className={styles.infoButton}
              >
                <p>SAIBA MAIS</p>
              </button>

            </div>
        </div>
      </>}
        {session && <>
          <button type="button" 
            className={styles.loginButton}
            onClick={() => 
            signIn('github', { callbackUrl: 'https://moveit-asanttos.vercel.app' })}
          >
            voltar para a aplicação
          </button>
        </>}
    </div>
  );
}