# PPAI Backend

### Como correr el proyecto?

- Para correr la aplicacion primero se deben instalar las dependencias y despues se puede iniciar el servidor:

  ```bash
  npm install
  npm run dev
  ```

### **Explicacion basica de la distribucion y la arquitectura del proyecto**:

<img src="images/README/1715470819302.png" width="300">

La arquitectura del proyecto esta separada en 4 capas:

- El **Router**(carpeta router): contiene todos los archivos de rutas divididos por interfaz. Son archivos con el formato [interfaz_nombre].router.js; que contienen todas las rutas posibles para esa interfaz.
- El **Controller**(carpeta controller): tiene todas las definciones de las clases controller que se derivan directamente del modelo de clases. Implementa todos los metodos que dan soporte a las rutas de alguna de las interfaces.
- El **Service Layer**(carpeta services): tiene todas las clases entity que se derivan del modelo de clase. Tienen todos los metodos que llevan a cabo la logica de negocio y la interaccion con la capa de datos.
- La Data Access Layer(carpeta database d): contiene las clases que se ocupan de la interaccion con la BD local. Ademas podemos definir los modelos de datos de sequalize aca.

### Ayuda y documentacion sobre Clases y POO en JavaScript

- Esto esta piola: [MDN Web Docs - Clases en JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

##### Json para datos a generar:

1 json con bodegas(según clase bodega) sacar de la lista que generé yo.
1 json con vinos(según clase vino) con nombres de bodegas de la lista del json bodegas.
4 json de actualización:

```json
 {
          id: 8,
          nombre: "Vino Espumoso Seco",
          añada: 2018,
          varietal: "Chardonnay",
          precio: 28.75,
          nota_de_cata: 4.2,
        },
```
