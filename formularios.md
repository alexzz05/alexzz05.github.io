# Formularios

Los **formularios** web son uno de los principales puntos de interacción entre un usuario y un sitio web o aplicación. Permiten a los usuarios la introducción de datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento.

Los campos del formulario deben ir dentro de la etiqueta `<form>`.

## Campos

La etiqueta `<input>` es el elemento principal de los formularios. Nos permite especificar el tipo de informacion que queremos que el usuario introduzca en el campo.
El `<input>` puede tomar formas distintas dependiendo del atributo *`type`*.

Existen varios tipos de `<input>`:

```html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text"> (valor por defecto)
<input type="time">
<input type="url">
<input type="week">
```
> [!NOTE]
> Si no especificamos de que tipo queremos que sea el `<input>` con el atributo *`type`*, HTML escogera `type="text"` por defecto.

### Etiqueta `<label>`

La etiqueta `<label>` es un elemento en linea que  nos permite vincular el `<input>` del campo con el nombre del campo. De esta manera el usuario puede hacer clic tanto en el nombre como en el input para rellenar la informacion correspondiente.

#### Ventajas de la etiqueta `<label>`

Un uso correcto de esta etiqueta beneficiara a los siguientes usuarios:

- Usuarios con lectores de pantalla
    --> el nombre del campo se leera en alto cuando el usuario pase por encima del elemento

- Usuarios con dificultad para marcar los campos pequenos (como los ***checkboxes***)
    --> el `<input>` se activa para escribir cuando el usuario hace clic sobre el `<label>` del elemento (lo que aumenta el area de clic)

> [!TIP]
> El atributo ***`for`*** de `<label>` debe ser igual al atributo ***`id`*** del elemento relacionado para vincularlos.
>
> ```html
> <p><label for="campo-nombre">Nombre: </label><input type="text" name="nombre" id="campo-nombre" /></p>
> ```
> También se puede vincular una etiqueta a un elemento colocando el elemento dentro del elemento <label>.
>
>```html
><p><input type="checkbox" name="subscribe" id="subscribe" /><label for="subscribe"> Acepto suscribirme </label></p>
>```
