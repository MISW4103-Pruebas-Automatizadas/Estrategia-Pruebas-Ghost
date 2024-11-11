# Diseñar una estrategia de pruebas para la plataforma GHOST

## i. Integrantes

| Nombre completo                 | Correo Uniandes                 |
| ------------------------------- | ------------------------------- |
| Juan Manuel González Garzón     | jm.gonzalez1844@uniandes.edu.co |
| Daniel Felipe Urrego            | d.urregor@uniandes.edu.co       |
| Daniel Sierra Rincon            | dani-sie@uniandes.edu.co        |
| Helberth Leonardo Monroy Bustos | h.monroy@uniandes.edu.co        |

## ii. Paso a paso para la instalación y ejecución de las pruebas en Kraken

```shell
cd KRAKEN
docker compose up --build
```

### iii. Paso a paso para la instalación y ejecución de las pruebas en la otra herramienta de su elección (**Cypress**)

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
6. En la carpeta de instalación de ghost, inicialice la aplicación ejecutando la instruccion "ghost start" (para el ejemplo en la carpeta "/GHOST" de este repositorio)
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost/GHOST$ ghost start
   ```
**Para la ejecución de pruebas con CYPRESS!!!** 
7. Instalamos la aplicación cypress en la carpeta del proyecto ghost con el comando
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost/GHOST$ npm install -g cypress
   ```
8. Una vez haya finalizado la instalación de cypress, abrimos la interfaz gráfica GUI para verificar el correcto funcionamiento de la misma:
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost/GHOST$ cd CYPRESS
   grupo12@uniandes:~/home/pruebas_e2e_ghost/GHOST/CYPRESS$ cypress open
   ```
9. Copiamos mediante git o directamente los escenarios creados en este repositorio a la carpeta  ~/<instalacion ghost>/CYPRESS/cypress/e2e.
10. Ejecutamos las pruebas mediante el comando
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost/GHOST/CYPRESS$ cypress run --headless
   ``` 
11. Cada vez que se desee recrear el conjunto de escenarios de pruebas, debe detenerse la ejecución de GHOST con el comando:
   ```shell
   grupo12@uniandes:~/home/pruebas_e2e_ghost/GHOST$ ghost stop
   ``` 
   Posteriormente repetir los pasos 5,6,10
