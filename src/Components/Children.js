import '../assets/css/index.css'

const Children = props => {
    
    console.log(props); /**Busca este 'console.log', en la consola, para que 
                        veas cómo es que trae los props*/ 

    return (

        <div id="contChildren">

            <p>Soy el Children</p>
            <p> { props.propFranI } </p> 
            <p> { props.propFranII } </p> 

        </div>

    )
    
}

export default Children;

