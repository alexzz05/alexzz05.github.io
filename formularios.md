# Formularios

Los **formularios** web son uno de los principales puntos de interacción entre un usuario y un sitio web o aplicación. Permiten a los usuarios la introducción de datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento.

Los campos del formulario deben ir dentro de la etiqueta `<form>`.

## Campos

La etiqueta `<input>` es el elemento principal de los formularios. Nos permite especificar el tipo de información que queremos que el usuario introduzca en el campo.
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
> Si no especificamos de qué tipo queremos que sea el `<input>` con el atributo *`type`*, HTML escogerá `type="text"` por defecto.

### Etiqueta `<label>`

La etiqueta `<label>` es un elemento en línea que  nos permite vincular el `<input>` del campo con el nombre del campo. De esta manera, el usuario puede hacer clic tanto en el nombre como en el input para rellenar la información correspondiente.

#### Ventajas de la etiqueta `<label>`:

Un uso correcto de esta etiqueta beneficiará a los siguientes usuarios:

- Usuarios con lectores de pantalla
    --> el nombre del campo se leerá en alto cuando el usuario pase por encima del elemento

- Usuarios con dificultad para marcar los campos pequeños (como los ***checkboxes***)
    --> el `<input>` se activa para escribir cuando el usuario hace clic sobre el `<label>` del elemento (lo que aumenta el área de clic)

> [!TIP]
> El atributo ***`for`*** de `<label>` debe ser igual al atributo ***`id`*** del elemento relacionado para vincularlos.
>
> ```html
> <p><label for="campo-nombre">Nombre: </label><input type="text" name="nombre" id="campo-nombre" /></p>
> ```
> También se puede vincular una etiqueta a un elemento colocando el elemento dentro de `<label>` <label>.

## Ejemplo

Este es un ejemplo de formulario:

```html
<form>
    <p><label for="campo-nombre">Nombre: </label><input type="text" name="nombre" id="campo-nombre" /></p>
    <p><label for="campo-edad">Password: </label><input type="number" name="edad" min="1" max="120" id="campo-edad" /></p>
    <p><label for="campo-nacimiento">Edad: </label><input type="date" name="nacimiento" id="campo-nacimiento" /></p>
    
    <p><input type="checkbox" name="subscribe" id="subscribe" /><label for="subscribe"> Acepto suscribirme </label></p>

    <p><input type="submit" /></p>
</form>
```
### Etiqueta interesante

Ejemplo para mostrar como hacer tablas:

| Concepto     | Descripción                                                             | Uso Principal                           |
|--------------|-------------------------------------------------------------------------|-----------------------------------------|
| **HTML**     | Lenguaje de marcado utilizado para estructurar contenido en la web.      | Crear la estructura básica de páginas.  |
| **CSS**      | Lenguaje de hojas de estilo utilizado para diseñar la apariencia de páginas. | Estilizar y dar formato a elementos.    |
| **Markdown** | Lenguaje de marcado ligero para formatear texto de manera sencilla.      | Crear documentos con formato sin complicaciones. |
