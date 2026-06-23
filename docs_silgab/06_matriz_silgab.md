# Matriz de Riesgo y Mapa de Calor

## 1. Matriz de Probabilidad vs. Impacto
A continuación se presenta la matriz de riesgo basada en las vulnerabilidades detectadas en el portal de **TurBus Digital**. Se ha evaluado la facilidad de explotación (Probabilidad) y el daño potencial a la continuidad del negocio (Impacto).

| Probabilidad \ Impacto | Bajo | Medio | Alto | Crítico |
| :--- | :---: | :---: | :---: | :---: |
| **Alta** | | | 🟠 XSS (Reflejado) | 🔴 Inyección de Comandos <br> 🔴 Inyección SQL |
| **Media** | | | | |
| **Baja** | | | | |

*(Leyenda de Colores / Mapa de Calor: 🟢 Riesgo Bajo | 🟡 Riesgo Medio | 🟠 Riesgo Alto | 🔴 Riesgo Crítico)*

## 2. Priorización de Vulnerabilidades y Justificación
La priorización establece el orden de atención urgente para el equipo de TI, basándose de manera coherente en la matriz anterior y en los puntajes CVSS calculados.

**Prioridad 1: Inyección de Comandos (Nivel 🔴 Crítico - CVSS 10.0)**
* **Justificación de Probabilidad:** Alta. Su explotación vía red no requiere autenticación y es trivial en la configuración actual.
* **Justificación de Impacto:** Crítico. Un atacante tomaría control del sistema operativo del servidor. Para TurBus, esto significa la caída total de la plataforma web, paralización en la venta electrónica de pasajes e interrupción del sistema de seguimiento de flota.

**Prioridad 2: Inyección SQL - SQLi (Nivel 🔴 Crítico - CVSS 9.8)**
* **Justificación de Probabilidad:** Alta. Existen múltiples herramientas automatizadas para explotar esta falla desde internet sin credenciales.
* **Justificación de Impacto:** Crítico. Provocaría la exposición masiva de la base de datos de pasajeros frecuentes (RUT, contactos, viajes). Además del impacto reputacional irreparable para TurBus, expondría a la empresa a graves sanciones por incumplimiento de la Ley de Protección de Datos Personales.

**Prioridad 3: Cross-Site Scripting - XSS (Nivel 🟠 Alto - CVSS 6.1)**
* **Justificación de Probabilidad:** Alta/Media. Aunque el vector es de red, requiere que el atacante engañe a un cliente para que haga clic en un enlace malicioso (phishing).
* **Justificación de Impacto:** Alto. No destruye la infraestructura central de TurBus, pero permite secuestrar la sesión de los usuarios, lo que podría derivar en el robo de pasajes comprados o accesos a tarjetas guardadas en los perfiles de los clientes afectados.