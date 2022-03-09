import '../../assets/css/index.css'

const DataFather = () => {

    /*FUNCIONES UTILIZADAS DENTRO DE ESTE COMPONENTE
    EN EL RETURN QUE DIBUJA EL HTML EN PANTALLA*/

    const showSubCategory = value => {
        
        alert(value.map(element => element.name));

    }

    /*FIN FUNCIONES*/

    let arrData = [
        
        {
            category_name: 'Electrodomestico',
            sub_category: [
                {name: 'Electro1sub'},{name: 'Electro2sub'},{name: 'Electro3sub'}
            ]
        },
        {
            category_name: 'Almacen',
            sub_category: [
                {name: 'Almacen1sub'},{name: 'Almacen2sub'},{name: 'Almacen3sub'}
            ]
        },
        {
            category_name: 'Jardineria',
            sub_category: [
                {name: 'Jardineria1sub'},{name: 'Jardineria2sub'},{name: 'Jardineria3sub'}
            ]
        }

    ]

    return (

        <div id="contDataFather">
            <h3>Categories</h3>
            { /**este iniador corchete indica que aqui dentro se ingresará
             * codigo JavaScript
            */

            
            arrData.map( (item, index) => {

                return (

                    <p onClick={() => showSubCategory(item.sub_category)} key={index}>{item.category_name}</p>
                    
                )

            })

            }

        </div>

    )
    
}

export default DataFather;

