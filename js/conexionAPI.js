

async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos"); //* Solo indica el status de la peticion
    // console.log(conexion);

    const conexionConvertida = conexion.json() //* Una vez echo la conexion de la peticion, se van a convertir los datos
    
    // console.log(conexionConvertida);

    return conexionConvertida
}

export const conexionAPI={
    listarVideos
}

//*Siemre se manda llamar la funcion para poder ejecutarla
// listarVideos() 