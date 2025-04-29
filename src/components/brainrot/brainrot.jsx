import styles from "./brainrot.module.css";
import { useState, useEffect } from "react";

export default function Brainrot() {

    const [score, setScore] = useState(0)
    const [dados, setDados] = useState(null)
    const [imagem, setImagem] = useState(null)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        fetch("/data/brainrot.json")
        .then((res) => res.json()) 
        .then((data) => {
            setDados(data); 
            setImagem(data[0].img)}) 
        .catch((err) => console.error("Erro ao carregar JSON:", err));
    }, [])

    function brainrotCalc() {
        const brainrotResponse = inputValue.toUpperCase()
        if (dados) {
            const index = dados.findIndex(item => item.name === brainrotResponse);
    
            if (index !== -1) {
                setScore(prev => prev + 1);
                if (index + 1 < dados.length) {
                    setImagem(dados[index + 1].img);
                }
            }
        }
                    setInputValue("")
    } 
    

    return (
        <div className={styles.brainrotContainer}>
            <h1>Score: {score}</h1>
            <div className={styles.brainrotImage}>
            { typeof imagem === "string" && imagem.length > 0 && ( <img src={imagem} alt="Brainrot" /> ) }
            </div>
            <div className={styles.brainrotPromptSend} id="prompts">
                <input type="text" name="name" id="name" placeholder="Brainrot name" value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }}/>
                <input type="button" value="Enviar" id={styles.enviar} onClick={brainrotCalc}/>
            </div>
        </div>
    )
}