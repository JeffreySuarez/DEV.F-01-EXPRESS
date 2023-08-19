# BoilerPlateSQL

Template SQL sequilize

0- Crear un archivo `index.js`
1- `npm init` - creamos el package.json y lo editamos con la info que queríamos.
{
"name": "01-class",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"start": "node --watch index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
"dependencies": {
}
}

2- `npm instal express --save` --> se crea package-lock.json y la carpeta node_modules e instalmos express como dependencia.

{
"name": "01-class",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"start": "node --watch index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC",
"dependencies": {
"express": "^4.18.2",
"node": "^20.5.0"
}
}
3- Creamos un archivo llamado `.gitignore`, el cual ingora node_modules y package-lock.json en los push
