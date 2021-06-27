import React, { Component } from 'react'
import styles from "./stylesheet.module.css"

class AddCharacters extends Component {

    constructor(props) {
        super(props)

        this.state = {
            charaters: []
        }
    }

    async componentDidMount() {

        const url = 'https://finalspaceapi.com/api/v0/character/';

        const res = await fetch(url);

        const ch = await res.json();

        //console.log(posts);

       this.setState({ charaters: ch })

    }

    render() {

        const { charaters } = this.state
        return (
            <>
                {charaters && charaters.length && charaters.map(charater =>
                    <div key= {charater.id} className={styles.CharacterCard}>
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
}

export default AddCharacters