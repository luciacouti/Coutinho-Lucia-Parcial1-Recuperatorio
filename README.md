# Aplicaciones Híbridas

## Parcial 1 - Recuperatorio
Alumna: Lucía Coutinho
Comisión: DWM4AV
Docente: Brian Lara
Año: 2023

### Modificaciones desde la entrega anterior
-Agregué la función isValidId para que valide si un ID que se recibe por URL sea válido o no.
-Agregué validaciones para que si se pasa un ID por URL, por ejemplo al querer agregar un proyecto a un cliente, se verifique que exista ese cliente.
-Agregué try catch dentro de las funciones para handlear mejor los errores.
-Agregué clients.api.controller.js y clients.api.routes.js dentro de /api y clients.services.js dentro de /services con las funcionalidades pedidas en la consigna.
-Agregué la verificación "Se deben asegurar que los campos enviados desde el cliente sean los que necesite el sistema" que figuraba en la consigna con las const newClient y newProject
