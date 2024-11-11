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

1. Verifique que no tiene corriendo Ghost en su máquina y que el puerto 2368 está disponible. en su defecto con la instruccion
   ```shell
   grupo12@uniandes:~/home$ sudo lsof -i :2368
   ```
   la cuál lista los procesos que podrían estar ocupando el puerto, en caso tal que no sea posible determinar por consola el proceso que ocupa el puerto, emplear el comando contra el PID sospechoso así:
   ```shell
   grupo12@uniandes:~/home$ sudo kill -9 <PID> 
   ```
    Donde <PID> is el id del proceso que está ocupando el puerto 2368
   
3. Dirigiéndose a un directorio de proyecto inicialice con la instrucción (para el ejemplo hemos creado el directorio - pruebas_e2e_ghost -)
   ```shell
   grupo12@uniandes:~/home$ mkdir pruebas_e2e_ghost
   grupo12@uniandes:~/home$ cd pruebas_e2e_ghost
   grupo12@uniandes:~/home/pruebas_e2e_ghost$ npm init
   ```
4. Instale ghost con la instrucción
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost$ npm install ghost-cli@latest
   ```
5. Elimine el archivo que se encuentra en la ruta ~/<instalacion ghost>/content/data/ghost-local.db
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost$ rm -rf GHOST/content/data/ghost-local.db
   ```
6. Inicie ghost ejecutando la instruccion "ghost start" en la carpeta "/GHOST" de este repositorio

7. Ejecutar las pruebas mediante el comando "cypress run --headless" sobre la carpeta "/CYPRESS"

8. Cada vez que se desee recrear el conjunto de escenarios de pruebas, debe detenerse la ejecución de GHOST con el comando:
   "ghost stop"
   Posteriormente repetir los pasos 4 a 6
