const contenido = document.getElementById('contenido');





const agregarTarea = e => {

    e.preventDefault();
    const { value } = e.target.textoTarea;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea' , 'borde');
    tarea.addEventListener('click', cambiarEstado);
    tarea.textContent = value;
    contenido.prepend(tarea);// Fallo
    e.target.reset();// Fallo
    
}

const cambiarEstado = e => {
    e.target.classList.toggle('completado');
}

const ordenado = () => {    

    const terminada = [];
    const pendiente = [];
    contenido.childNodes.forEach(item => {
        if(item.classList.contains('completado')){
            terminada.push(item);
        }else{
            pendiente.push(item);
        }
    });
    return [...pendiente, ...terminada];


}

const ordenar = () => {
    ordenado().forEach(item => {
        contenido.appendChild(item);
    });
}


