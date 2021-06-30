import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./stylesheet.module.css"

const HookAddCharacters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://finalspaceapi.com/api/v0/character/')
            .then(res => {
                console.log(res)

                setCharacters(res.data)
            })
            .catch(error => {
                console.log(error)
            }
            )
    }, [])
    return (
        <>
            {characters.map(charater =>
                <div key={charater.id} className={styles.CharacterCard}>
                    <div className={styles.imgContainer}>
                        <img src={charater.img_url} alt={charater.name} />
                    </div>
                    <div className={styles.CharacterInfo}>
                        <span >{charater.id}</span>
                        <h3 > {charater.name}</h3>
                        <small className={styles.portrayed}> Species: <span> {charater.species}</span></small><br />
                        <small className={styles.category}> Gender: <span> {charater.gender}</span></small><br />
                    </div>
                </div>
            )}
        </>
    )
}

export default HookAddCharacters
