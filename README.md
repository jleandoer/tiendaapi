# tiendaapi
Esta es una aplicación móvil de comercio electrónico desarrollada con Ionic Framework y Angular. La app permite listar productos, filtrarlos por categoría, agregarlos a un carrito de compras y simular un proceso de compra.
Características

Pantalla de carga con un GIF animado.

Listado de productos con:

Imagen, nombre, precio y calificación.

Buscador para filtrar productos por nombre.

Botones para filtrar por categoría.

Icono de carrito con el número de productos seleccionados.

Página de detalles del producto con información completa y botón para añadir al carrito.

Página del carrito con:

Lista de productos seleccionados.

Total a pagar.

Botón para eliminar productos del carrito.

Botón para proceder al pago.

Página de resumen de compra tras el pago, mostrando los productos adquiridos y el total.

Notificaciones con Ionic Toast al agregar o eliminar productos y al finalizar la compra.

Diseño responsivo optimizado para dispositivos móviles.

🛠️ Tecnologías Utilizadas

Ionic Framework (UI y funcionalidades móviles)

Angular 17

RxJS (manejo de estados y datos asíncronos)

API Fake Store (https://fakestoreapi.com/) para obtener productos

LocalStorage para almacenar productos en el carrito

Instalación y Ejecución

Clona el repositorio:

git clone https://github.com/jleandoer/tiendaapi
cd tiendaapi

Instala las dependencias:

npm install

Ejecuta la app en el navegador:
ionic serve
API Fake Store

Esta aplicación consume los datos de la API Fake Store. Algunos endpoints utilizados:

Obtener todos los productos: GET https://fakestoreapi.com/products

Obtener un producto por ID: GET https://fakestoreapi.com/products/{id}

Obtener categorías: GET https://fakestoreapi.com/products/categories

Obtener productos por categoría: GET https://fakestoreapi.com/products/category/{category}
