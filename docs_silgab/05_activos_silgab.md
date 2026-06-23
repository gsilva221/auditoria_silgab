# Activos de Información y Riesgos del Negocio

## 1. Identificación y Clasificación de Activos
En el contexto del portal web de TurBus Digital (industria de transporte interurbano de pasajeros y logística), se han identificado los siguientes activos de información críticos para la continuidad operativa del negocio:

1. **Base de Datos de Clientes:** Contiene información personal de los pasajeros (RUT, nombres, apellidos, correos electrónicos, teléfonos). *Clasificación: Confidencial.*
2. **Historial de Viajes y Encomiendas:** Registros de rutas frecuentes, orígenes, destinos y seguimiento logístico de paquetes. *Clasificación: Interno/Confidencial.*
3. **Credenciales de Acceso:** Usuarios, contraseñas y tokens de sesión de los clientes registrados en la plataforma. *Clasificación: Estrictamente Confidencial.*
4. **Infraestructura del Servidor (Sistema Operativo):** El entorno virtual y sistema operativo que aloja la aplicación web y permite el funcionamiento 24/7 del portal. *Clasificación: Crítico/Operacional.*
5. **Módulo de Integración de Pagos:** Datos temporales y tokens de conexión con pasarelas de pago para la venta de pasajes online. *Clasificación: Estrictamente Confidencial.*

## 2. Asociación de Vulnerabilidades y Activos
Las vulnerabilidades demostradas en el entorno de pruebas exponen directamente los activos de TurBus de la siguiente manera:

* **Inyección SQL (SQLi):** Pone en riesgo crítico la **Base de Datos de Clientes**, el **Historial de Viajes** y las **Credenciales de Acceso**. Un atacante puede extraer, modificar o eliminar todos estos registros desde el backend de TurBus.
* **Cross-Site Scripting (XSS Reflejado):** Compromete las **Credenciales de Acceso** (mediante el robo de cookies de sesión) y potencialmente el **Módulo de Integración de Pagos** si el atacante logra ejecutar scripts en el navegador de un cliente mientras intenta comprar un pasaje.
* **Inyección de Comandos (Command Injection):** Pone en riesgo total la **Infraestructura del Servidor (Sistema Operativo)**. El atacante obtiene control absoluto de la máquina subyacente, lo que compromete la confidencialidad, integridad y disponibilidad de todos los demás activos descritos, paralizando la venta digital de TurBus.