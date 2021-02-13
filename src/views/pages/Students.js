import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Students() {
    
    const [titleName, setTitleName] = useState('')
    const [stateTest, setStateTest] = useState(false)

    const students = useSelector(state => state.data)
    const dispatch = useDispatch()

    const componentExample = (<div> <img src="https://http.cat/400" width="250px" height="200px"/> </div>)

    function addStudents() {
        dispatch({ type: 'ADD_STUDENT', title: titleName })
    }

    function localStorageContent(valorSetado) {
        localStorage.setItem('Parametro01', valorSetado)
        alert('info adionada ao localStorage!')
    }

    const getLocStorage = localStorage.getItem('Parametro01')

    const objectTest = {
        type: 'Product',
        name: 'Iphone',
        price: 9000
    }

    localStorage.setItem('Teste', JSON.stringify(objectTest))

    const getLocalStorageContent = JSON.parse(localStorage.getItem('Teste'))

    return (
        <>
            <h1>Alunos</h1>
            { students.map(student => (
                <p>Nome: { student }</p>
            )) }
            <input type="text" onChange={ e => setTitleName(e.target.value) } placeholder="Informe o nome do aluno"/>
            <button onClick={ addStudents }> Adicionar Aluno </button>

            <hr/>

            <h1>Trabalhando com LocalStorage</h1>
            { getLocStorage ? getLocStorage : 'Sem informações no Storage!!!' }
            <button onClick={() => localStorageContent('Hello GamaAcademy!!!') }> Setando o LocalStorage </button>
            <br/>
            <button onClick={() => localStorage.clear() }> Limpar o LocalStorage </button>
            <br/>
            <button onClick={() => window.location.reload() }> Regarregar a página </button>

            <hr/>
            { getLocalStorageContent.price }

            <hr/>
            { stateTest ? componentExample : 'Sem Retorno!!!' }
            <button onClick={() => setStateTest(!stateTest)}>Clique para ver a novidade</button>
        </>
    )
}

export default Students
