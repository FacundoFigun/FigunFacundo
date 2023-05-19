document.querySelector('form').addEventListener('submit', function(event) { 
    event.preventDefault(); 
  
    var nombrepersonaje= document.getElementById('myTextarea').value; 
  
    
    fetch(`https://rickandmortyapi.com/api/character/?name=${nombrepersonaje}`)
      .then(response => response.json()) 
      .then(data => {
        console.log('Datos del personaje:', data.results[0]); 
        
        
        const informacion = document.getElementById('informacion');
  
        
        const parrafo = document.createElement('p');
        
        
        const imagen = document.createElement('img');
        
        

  
        
        parrafo.innerHTML = 'Nombre: ' + data.results[0].name + ' <br>Estado: ' + data.results[0].status + ' <br>Especie: ' + data.results[0].species;
        imagen.src = data.results[0].image; 

        
        informacion.appendChild(parrafo);
        informacion.appendChild(imagen);
      })
      .catch(error => {
        console.error('Error al obtener los datos del personaje:', error); 
      });
  });
        

