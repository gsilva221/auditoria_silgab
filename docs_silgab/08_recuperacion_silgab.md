# Mejoras Tecnológicas y Recuperación ante Desastres (DR)

## 1. Mejoras Tecnológicas Estructurales
Para elevar la madurez de seguridad del portal de TurBus Digital más allá de las mitigaciones puntuales, se proponen las siguientes mejoras a nivel de arquitectura:

* **Segmentación de Redes:** Separar físicamente o mediante VLANs el servidor web (frontend) del servidor de base de datos (backend). Si un atacante logra una Inyección de Comandos en el servidor web, no tendrá conexión de red directa para extraer la base de datos de clientes, conteniendo el ataque.
* **Monitoreo Continuo y SIEM:** Implementar un sistema de Gestión de Eventos e Información de Seguridad (SIEM) para centralizar los registros (logs) del servidor web y la base de datos. Esto permitirá detectar anomalías (como un escaneo masivo de vulnerabilidades o intentos de inyección) y alertar al equipo de ciberseguridad en tiempo real.

## 2. Plan de Recuperación ante Desastres (Disaster Recovery - DR)
En caso de que un ataque crítico (como el secuestro del servidor o el borrado de la base de datos) tenga éxito, TurBus debe activar el siguiente plan de recuperación alineado a estándares de la industria:

* **Estrategia de Respaldo (Backup):** 
  * Realizar copias de seguridad incrementales cada 4 horas y copias completas diarias de la base de datos de clientes y del código fuente del portal.
  * Los respaldos deben almacenarse cifrados y fuera de línea (offline) o en una región de nube geográficamente distinta (aislamiento), para evitar que sean destruidos junto con el servidor principal.
* **Proceso de Restauración:** 
  * Se debe establecer un **RTO** (Objetivo de Tiempo de Recuperación) máximo de 2 horas para restaurar el portal de ventas utilizando servidores de contingencia (failover), garantizando que TurBus no pierda ingresos significativos por la caída de la venta de pasajes.
  * El **RPO** (Objetivo de Punto de Recuperación) debe ser mínimo, asegurando que no se pierdan transacciones de clientes recientes.
* **Protocolo de Notificación (Gestión de Incidentes):** 
  * Si la Inyección SQL resulta en la filtración de datos de los pasajeros, el equipo legal y de seguridad de TurBus debe notificar el incidente al **CSIRT de Gobierno** y a las autoridades competentes (como el SERNAC, por afectación a consumidores) dentro de las primeras 72 horas.
  * Se debe enviar un comunicado transparente a los clientes afectados, indicando qué datos se vieron comprometidos y solicitando un cambio de contraseñas preventivo.