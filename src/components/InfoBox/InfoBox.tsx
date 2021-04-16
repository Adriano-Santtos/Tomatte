import {useContext } from 'react';
import { InfoBoxContext } from '../../contexts/InfoBoxContext';
import styles from './InfoBox.module.css';



export function InfoBox(){
    const {closeInfoBox}=useContext(InfoBoxContext);

   
    return(
        <div className={styles.overlay}>
         <div className={styles.container}>
             <header>nivel 1</header>
             <strong>Parabéns !</strong>
             <p>Você alcançou um novo level.</p>
             <button type="button"  onClick={closeInfoBox}>
                <img src="/icons/close.svg" alt="Fechar modal"/>
             </button>
         </div>
        </div>
    )
}