# Procesador de Imágenes con JIMP

Este proyecto es un servidor web que permite a los usuarios ingresar la URL de una imagen y procesarla para convertirla en blanco y negro.

## Descripción

 El objetivo es proporcionar una herramienta que permita a los usuarios procesar imágenes en blanco y negro a través de una interfaz web sencilla.

## Características

1. **Formulario de entrada de URL**: Los usuarios pueden ingresar la URL de una imagen que deseen procesar.
2. **Procesamiento de imágenes**: Las imágenes se procesan en escala de grises y se redimensionan a 350px de ancho utilizando la biblioteca JIMP.
3. **Almacenamiento de imágenes**: Las imágenes procesadas se almacenan en el servidor con un nombre de archivo único que incluye una porción de un UUID y la extensión ".jpg".

## Cómo usar

1. Navega a la ruta raíz del servidor para ver el formulario de entrada de URL.
2. Ingresa la URL de la imagen que deseas procesar.
3. Haz clic en el botón de enviar. Serás redirigido a una nueva página que mostrará tu imagen procesada.

## Instalación

Para instalar y ejecutar este proyecto, necesitarás Node.js y npm instalados en tu sistema. Luego, puedes clonar este repositorio y instalar las dependencias con los siguientes comandos:

```bash
git clone https://github.com/Juan-Zuniga-Codoceo/desafio-blackandwhite
cd desafio-blackandwhite
npm install

Para iniciar el servidor, usa el siguiente comando:
npm start

## Contribuir
Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request con tus cambios.

# Licencia
Este proyecto está licenciado bajo la licencia MIT.