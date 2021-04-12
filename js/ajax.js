document.addEventListener('DOMContentLoaded', () => {

    $.ajax({
    
        type:"GET",
        dataType:"json",
        url:"./productos.json",

        success: function(data,status,xhr){

            Productos = data;
            
            CargarListaProductos(data);

            $('#encabezado').hide().fadeIn(4000);

            $('#lista-productos').hide().slideDown(2000);

  	        $('button.botonDetalle').on('click', DetalleDeContacto); 

            function showModal(img) {    
                var modal = document.getElementById('myModal');
                modal.style.display = "block";
                var modalImg = document.getElementById("img01");
                modalImg.src = img.src;
                var modalCaption = document.getElementById("caption");
                modalCaption.innerHTML = img.alt;
            }
            
            imgs.forEach(function(imgId) {
                var img = document.getElementById(imgId);
                img.onclick = function(event) {
                    showModal(event.target);
                }
            });
            
            span.onclick = function() { 
              modal.style.display = "none";
            }

        }

    });

});

