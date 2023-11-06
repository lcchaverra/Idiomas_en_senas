export const loadData = async () => {
  const response = await fetch('http://localhost/idiomasBackend/consultar_usuario.php')
  .then(response => response.json())
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
  .finally(()=> console.log("se terminó la peticion"))
}


export const sendData = () => {
    
    const nuevoUsuario:any = {
        'nombre': 'Ejemplo',
        'correo': 'ejemplo@example.com',
      };

    const data = fetch('http://localhost/idiomasBackend/insertar_usuario.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Ha ocurrido un error:', error)
    })
}