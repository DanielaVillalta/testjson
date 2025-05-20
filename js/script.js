//El parámetro "datos" representará al archivo JSON
function crearTabla(datos) {
    let tabla = `
        <table role="grid" class="overflow-auto">
        <thead>
            <tr>
                <th>Carnet</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Sección Académica</th>
            </tr>
        </thead>
        <tbody>
    `;

    //Creamos un bucle para que se genere una fila por cada objeto del JSON
    datos.forEach(integrantes => {
        tabla += `
            <tr>
                <td>${integrantes.carnet}</td>
                <td>${integrantes.nombre}</td>
                <td>${integrantes.rol}</td>
                <td>${integrantes.seccion}</td>
            </tr>
        `;
    });

    tabla += `
            </tbody>
        </table>
    `;

    document.getElementById("listado").innerHTML = tabla;
}

crearTabla(integrantes); //Se manda el JSON a la función crearTabla()