//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
window.onload= () => {
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
    let ulPaises = document.createElement("ul")
    let acumulador = ""
    for(let pais of countries) {
        acumulador += `<li>${pais}</li>`

        /* let liPais = document.createElement("li")
        liPais.innerText = pais
        ulPaises.appendChild(liPais) */
    }
    ulPaises.innerHTML = acumulador
    document.body.appendChild(ulPaises)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

    let paraBorrar = document.querySelector(".fn-remove-me")
        paraBorrar.remove()
    

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

    let divParaLlenar = document.querySelector(`[data-function]`)
    let ulParaDiv = document.createElement("ul")
    let agrupador = ""
    cars.forEach((item) => {
        agrupador += `<li>${item}</li>`
    })
    ulParaDiv.innerHTML = agrupador
    divParaLlenar.appendChild(ulParaDiv)

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const paises = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
    
    for(let pais of paises) {
        let divNuevo = document.createElement("div")
        divNuevo.innerHTML += `<h4>${pais.title}</h4>
                                    <img src="${pais.imgUrl}"/>`
        let btnDelete = document.createElement('button')
        btnDelete.textContent = "Borrame!"
        btnDelete.addEventListener("click", () => {
            divNuevo.remove()
        })
        divNuevo.appendChild(btnDelete)
        document.body.appendChild(divNuevo)
    }
    

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

let listadoDiv = document.querySelectorAll("div")
let btnEliminar = document.createElement("button")
btnEliminar.innerText = "Eliminar ult."
btnEliminar.addEventListener("click", () => {
    listadoDiv[listadoDiv.length - 1].remove()
})
document.body.appendChild(btnEliminar)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.



}