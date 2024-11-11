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

```shell
cd CYPRESS
npm install -g cypress
npm run cypress:open
```