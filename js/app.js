// SELECTORES
const input = document.querySelector('#años');
const formulario = document.querySelector('#formulario');
const listaProductos = document.querySelector('#lista-productos');
const montoTotal = document.querySelector('#monto');

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var imgs = ["myImg","myImg1","myImg2","myImg3","myImg4","myImg5","myImg6","myImg7","myImg8","myImg9","myImg10","myImg11"];

let Productos;

// LISTENERS

$('#años').on('keyup', mostrarAlert);

$('#boton').on('click', Calculo);

listaProductos.addEventListener('click', agregarProducto);

$('#formulario').on('submit', filtrarProductos);



// FUNCIONES

function mostrarAlert(e){
    e.preventDefault()
    let inputInteres = input.value
	
	console.log(inputInteres)

    switch (inputInteres) {
        case "2":
			break;
    
        case "4":
            break;
	
		case "6":
			break;
	
		case "8":
			break;
        
        default:
            alert(`Por favor, seleccionar alguna de las opciones que ofrecemos`);
            break;
    }
};


function DetalleDeContacto() {
	alert("Telefono: 4799-9999 / Direccion del local: Rivadavia 5555, CABA");
}

function CargarListaProductos(productos){
	productos.forEach((producto, index) => {

		const { zona, imagen, ambientes, m2, disposicion, antiguedad, precio, modal, id} = producto;

		const divCard = document.createElement('div');
		divCard.classList.add('filtro', 'columns');
		divCard.innerHTML = `
			<div class="card">
				<img src="${imagen}" id="${modal}" class="img-fluid img-thumbnail">
				<div class="info-card">
					<h4>${zona}</h4>
					<p>Departamento de ${ambientes} ambiente/s en zona ${zona}. Superficie total ${m2}m2. Disposición ${disposicion}. 
					${antiguedad} años de antigüedad.</p>
					<p><span class="u-pull-right">${precio}</span></p>
					<button class="u-full-width button-primary botonDetalle agregar-carrito" data-id=${id}><span>DATOS DE CONTACTO</span></button>
				</div>
			</div>
		`
		
		if (index % 3 === 0) {
			const row = document.createElement('div');
			row.classList.add('row');

			listaProductos.appendChild(row);
			row.appendChild(divCard);
		} else {
			const row = document.querySelector('#lista-productos .row:last-child');
			row.appendChild(divCard);
		}

	})
}

function filtrarProductos(e) {
	e.preventDefault();

	const busqueda = $('#buscador').val();


	const resultado = Productos.filter(producto => producto.zona.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()));

	limpiarProductos();

	CargarListaProductos(resultado);

	$('#lista-productos').hide().slideDown(2000);

  	$('button.botonDetalle').on('click', DetalleDeContacto); 
	  
	$('#encabezado').hide().fadeIn(4000);

}

function agregarProducto(e) {
	
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		
		const productoSeleccionado = e.target.parentElement.parentElement;

		obtenerDatos(productoSeleccionado);

	}
}


function limpiarProductos() {
	while (listaProductos.firstChild) {
		listaProductos.removeChild(listaProductos.firstChild);
	}
}

function Calculo (e) {
	e.preventDefault();
	var cuota = parseFloat($('#monto').val()) / parseFloat($('#años').val()) / 12;
    console.log(cuota)
	$("#total").val(cuota);
    

    localStorage.setItem("Saldo", JSON.stringify(cuota)); 

}




