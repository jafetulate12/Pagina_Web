let total = 0;
      let cantidad = 0;
      function sumarPrecio() {
        total += 1100;
        cantidad++;
        document.getElementById("total").textContent = "Total: ₡" + total;
        document.getElementById("cantidad").textContent = "Cantidad: " + cantidad;
      }