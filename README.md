# Sweepstouch Microservices

Servidor para hacer solicitudes a APIs de terceros en aplicaciones de Sweepstouch de uso interno.

Creado con Node.js y Express.js

Las solicitudes se hacen a los siguientes servicios:
- Notion
- Bandwidth

## Notion

Se creo una integracion de Notion con el nombre "CopyMaker" y se conecto a la base de datos de las tiendas en el workspace.
Para mas detalles sobre como funcionan las integraciones de Notion ver la [documentación](https://developers.notion.com/docs/getting-started) oficial.

## Bandwidth

Se utiliza la API de Bandwidth para automatizar servicios relacionados con los numeros de telefono tollfree.
El endpoint principal es para enviar el formulario de verificacion para numeros tollfree.
Para mas detalles ver la [documentacion](https://dev.bandwidth.com/apis/numbers/#tag/Toll-Free-Verification/operation/requestVerification) oficial.