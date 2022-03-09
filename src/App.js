import './assets/css/index.css'
import Father from './Components/Father'
import DataFather from './Components/EjmData/DataFather'


const App = () => {
    
    let isProp = 'Esto lo pasaré como prop';

    return (

        <>
        <header>Header</header>
        <main>
            <Father accountant={isProp}></Father>
            <DataFather/>
        </main>
        <footer>Footer</footer>
        </>

    )
    
}

export default App;

