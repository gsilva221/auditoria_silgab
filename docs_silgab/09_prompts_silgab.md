# Bitácora de Uso de Inteligencia Artificial

## 1. Herramienta Utilizada
* **IA:** Gemini
* **Propósito:** Apoyo en la redacción técnica, cálculo de métricas CVSS y contextualización de riesgos al modelo de negocio asignado (TurBus Digital).

## 2. Prompts Destacados (Ejemplos)

**Prompt 1: Contextualización del Negocio (Sección Activos y Resumen)**
> "Actúa como auditor de ciberseguridad. Estoy haciendo una evaluación sobre la empresa ficticia 'TurBus Digital' (transporte y logística). Ayúdame a redactar el resumen ejecutivo y a identificar al menos 4 activos de información críticos que estarían en riesgo si el portal web sufre un ataque de Inyección SQL y XSS. Clasifica los activos."

**Prompt 2: Mitigación Técnica (Sección Controles)**
> "Para el ataque de Command Injection ejecutado en DVWA (usando el payload `127.0.0.1; ls -la`), redacta las políticas de prevención y los controles de mitigación. Necesito que los controles referencien explícitamente un marco de trabajo de ciberseguridad, como OWASP o NIST, y que apliquen el principio de mínimo privilegio en el servidor."

## 3. Qué se aceptó y qué se corrigió
* **Se aceptó:** La estructura general de las explicaciones técnicas, la redacción formal de las políticas de prevención y el mapeo preciso de los vectores de ataque según la calculadora CVSS v3.1.
* **Se corrigió/Ajustó:** En algunas respuestas generadas por la IA, el impacto era demasiado genérico ("robo de datos"). Se intervino y modificó el texto para asegurar que siempre se mencionara explícitamente el impacto directo sobre TurBus (ej: "exposición de la base de datos de pasajeros frecuentes y rutas"). 

## 4. Reflexión Final
El uso de la Inteligencia Artificial demostró ser una herramienta muy poderosa cuando se le entrega un contexto de negocio específico. Aprendí que la IA no reemplaza la ejecución del ataque ni el entendimiento de la vulnerabilidad, pero es excelente para "traducir" un hallazgo netamente técnico (como un payload de SQLi) en un lenguaje de riesgo corporativo que la gerencia pueda entender. La clave para obtener resultados de alta calidad fue especificar siempre la empresa, el tipo de vulnerabilidad exacta y el estándar de seguridad esperado en el prompt.