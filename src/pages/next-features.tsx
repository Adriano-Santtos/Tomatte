import Head from 'next/head'
import { Sidebar } from "../components/Sidebar/Sidebar";
import styles from '../styles/pages/next-features.module.css';

export default function Next(){
    return(
        <div className={styles.container}>
            <Head>
                <title>
                    Upcoming
                </title>
            </Head>
            <Sidebar/>
            <div className={styles.section}>
                <img src="./logo-tomatte.svg" alt="logo"/>
                <h1>Obrigado por utilizar o Tomatte!</h1>
                <span>Essa é a versão beta e em breve haverá correções. <br/>
                      Também será implementado seguintes funcionalidades:
                </span>
                    <ul>
                        <li>Lista de líderes</li>
                        <li>Acesso anônimo</li>
                        <li>Acesso por outras plataformas</li>
                        <li>Versão Mobile</li>
                         <li>Versão em Inglês</li>
                    </ul> 
            </div>
            
        </div>
    )
}