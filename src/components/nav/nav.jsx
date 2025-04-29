import styles from './nav.module.css'
import React from 'react'

export default function Nav() {
    return (
        <div className={styles.navContainer}>
            <h1>
                    Brainrots Quizz
            </h1>
            <div className={styles.navButtons}>
                <button id={styles.cadastro}>Cadastro</button>
                <button id={styles.login}>Login</button>
            </div>
        </div>
    )
}