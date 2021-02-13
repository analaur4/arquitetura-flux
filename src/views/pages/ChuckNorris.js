import { useState, useEffect } from 'react';

import api from '../../services/api';

import LoadContent from '../components/LoadContent';
import Card from '../components/Card';

function ChuckNorris() {

    const [jokes, setJokes] = useState([{ }])
    const [jokeValue, setJokeValue] = useState('')
    const [jokeCategory, setJokeCategory] = useState('dev')
    const [load, setLoad] = useState(false)

    useEffect(async () => {
        setLoad(true)
        await api.get(`jokes/search?query=${ jokeCategory }`).then(
            res => {
                setJokes(res.data.result)
                setLoad(false)
            }
        ).catch(e => alert('Oops, algo deu errado'))
    }, [jokeCategory])

    return (
        <>
            <h1 className="title">Chuck Norris <span>API!</span></h1>

            <hr />

            <h2>Search for a category</h2>
            <input className="input-search" type="text" onChange={ e => setJokeValue(e.target.value) } />
            <button className="button-search" onClick={() => setJokeCategory(jokeValue)}>Search</button>

            <hr/>
        
            <div className={!load ? 'content-card' : 'content-load'}>
                { !load ? jokes.map((joke, index) => (
                    <Card key={ index } props={ joke } />
                )) : <LoadContent /> }
            </div>
        </>
    )
}

export default ChuckNorris
