// Definición de un componente funcional de React llamado MyComponent que recibe props como argumento
const MyComponent = props => {
    // Declaración de una función manejadora de eventos para el click del botón
    const onClickHandler = (e, item) => {   // e es el evento del click y item es la película que se pasó al botón
        // Muestra una alerta en pantalla cuando se hace clic en el botón
        alert("You has dado click sobre esta pelicula "+ e.target.innerText);
    }
    // Retorna el resultado de mapear el array props.movies
    // Por cada elemento en movies, se crea un botón con el texto del elemento
    return props.movies.map((item, index) => {  // props.movies es un array de películas, item es cada película y index es su posición en el array
        // Cada botón tiene una clave única (key) basada en su índice y un manejador de eventos onClick
        // Renderiza un botón por cada película, asignando el manejador de click
        return <button key={index} onClick={(e)=>{onClickHandler(e, item)}}>{item}</button>  // e.target.innerText se usa para obtener el texto del botón que fue clickeado
    });
}

export default MyComponent;
