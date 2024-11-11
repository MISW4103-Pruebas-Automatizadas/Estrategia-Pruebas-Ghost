# Diseñar una estrategia de pruebas para la plataforma GHOST

## i. Integrantes

| Nombre completo                 | Correo Uniandes                 |
| ------------------------------- | ------------------------------- |
| Juan Manuel González Garzón     | jm.gonzalez1844@uniandes.edu.co |
| Daniel Felipe Urrego            | d.urregor@uniandes.edu.co       |
| Daniel Sierra Rincon            | dani-sie@uniandes.edu.co        |
| Helberth Leonardo Monroy Bustos | h.monroy@uniandes.edu.co        |

## ii. Paso a paso para la instalación y ejecución de la aplicación bajo pruebas **Ghost**

```shell
cd GHOST
docker compose up --build
```


## iii. Paso a paso para la instalación y ejecución de las pruebas en Kraken

```shell
cd KRAKEN
# Nos toco usar docker en Kraken para poder garantizar la existencia de una corrección en el codigo de kraken-node
docker compose up --build -d ghost db
# Esperar a que ghost este listo
docker compose up --build e2e-kraken
`

### iv. Paso a paso para la instalación y ejecución de las pruebas en la otra herramienta de su elección (**Cypress**)

Esta guia le ayudará a ejecutar el set de pruebas en Cypress sobre Ghost.
Este repositorio contiene tanto la instalacion de Cypress como la de Ghost

1. Verifique que no tiene corriendo Ghost en su máquina y que el puerto 2368 está disponible. en su defecto con la instruccion "sudo lsof -i :2368" liste los procesos que lo estén ejecutando y posteriormente con la siguiente instruccion "sudo kill -9 <PID>" detengalo. <PID> is el id del proceso que está ocupando el puerto 2368

2. inicialice un proyecto con la instrucción "npm init"

3. Instale Ghost con la instrucción "npm install ghost-cli@latest"

4. Elimine el archivo que se encuentra en la ruta "GHOST/content/data/ghost-local.db"

5. Inicie Ghost ejecutando la instruccion "ghost start" en la carpeta "/GHOST" de este repositorio

6. Ejecutar las pruebas mediante el comando "cypress run --headless" sobre la carpeta "/CYPRESS"

7. Cada vez que se desee recrear el conjunto de escenarios de pruebas, debe detenerse la ejecución de GHOST con el comando:
   "ghost stop"
   Posteriormente repetir los pasos 4 a 6
