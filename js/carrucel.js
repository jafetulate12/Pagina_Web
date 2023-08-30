
  $(document).ready(function(){
    $('#myCarousel').carousel();
  })

  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  $(document).ready(function(){
    $('.parallax').parallax();
  });


  AOS.init();


  ///
  function actualizarCarrito() {
    const carrito = document.getElementById("carrito");
    carrito.innerHTML = "";
    let totalCompra = 0;
    productos.forEach((producto) => {
      if (producto.cantidad > 0) {
        const item = document.createElement("li");
        item.innerText = `${producto.nombre} x ${producto.cantidad}`;
        carrito.appendChild(item);
        totalCompra += producto.cantidad * producto.precio;
      }
    });
    const total = document.getElementById("totalCompra");
    total.innerText = `Total de la compra: ${totalCompra}`;
  }
