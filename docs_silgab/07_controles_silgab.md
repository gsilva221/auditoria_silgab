# Políticas de Prevención y Controles de Mitigación

## 1. Políticas de Prevención
Para abordar los hallazgos críticos detectados en el portal de TurBus Digital, se deben establecer las siguientes normativas internas de desarrollo seguro:

* **Política de Abstracción de Base de Datos (Prevención SQLi):** Se prohíbe la concatenación directa de entradas de usuarios en consultas a la base de datos. Todo el equipo de desarrollo de TurBus debe utilizar Consultas Parametrizadas (Prepared Statements) de forma obligatoria, especialmente en los módulos de búsqueda de pasajes, facturación y autenticación de clientes.
* **Política de Codificación de Salida (Prevención XSS):** Cualquier dato ingresado por el usuario (como nombres en los perfiles de pasajero frecuente o números de seguimiento de encomiendas) debe ser tratado como no confiable y someterse a una rigurosa codificación de entidades (Output Encoding) antes de ser renderizado en el navegador.
* **Política de Restricción de Llamadas al Sistema (Prevención Inyección de Comandos):** Queda estrictamente prohibido el uso de funciones que ejecuten comandos a nivel de sistema operativo (como `system()` o `exec()`) en el código web. Las funcionalidades de diagnóstico o integración deben realizarse exclusivamente mediante APIs nativas del lenguaje de programación.

## 2. Controles de Mitigación (Marcos OWASP y NIST)
Para contener el impacto de los riesgos clasificados como Críticos (Rojos) y Altos (Naranjos) en la matriz de riesgo, se proponen los siguientes controles técnicos:

* **Implementación de un WAF (Web Application Firewall):** Desplegar un firewall de aplicaciones web perimetral para inspeccionar el tráfico entrante al portal de TurBus. **Referencia: OWASP Top 10 (A03:2021-Injection)**. El WAF mitigará de forma inmediata los intentos de Inyección SQL y de Comandos bloqueando patrones maliciosos en tiempo real.
* **Despliegue de Cabeceras Content Security Policy (CSP):** Configurar una política CSP estricta en las respuestas HTTP del servidor. **Referencia: OWASP Secure Headers Project**. Esto evitará que el navegador del cliente ejecute scripts de fuentes no autorizadas, mitigando el XSS Reflejado en caso de que un cliente de TurBus sea víctima de un enlace fraudulento (phishing).
* **Aplicación del Principio de Mínimo Privilegio en Servidores:** Configurar los servicios web del portal para que se ejecuten con una cuenta de sistema operativo con permisos mínimos. **Referencia: Framework NIST CSF (PR.AC-4) / CIS Control 5**. De esta forma, si la inyección de comandos es explotada, el atacante quedará confinado en un entorno restringido y no podrá comprometer el servidor completo ni acceder a los registros centrales de la empresa.