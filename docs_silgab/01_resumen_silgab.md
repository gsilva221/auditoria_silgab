# Resumen Ejecutivo: Auditoría de Seguridad Web
**Empresa Auditada:** TurBus Digital
**Auditor:** [Gabriel Silva]

## 1. Contexto de la Empresa
TurBus es una de las empresas líderes en el rubro de transporte interurbano de pasajeros, logística de encomiendas y servicios de carga en Chile. Debido a la alta demanda y la digitalización de sus servicios, la continuidad operativa y la seguridad de su infraestructura tecnológica son pilares fundamentales para mantener la confianza de sus millones de usuarios a nivel nacional.

## 2. El Portal de Clientes
El objeto de esta auditoría controlada es el "Portal de Clientes" de TurBus Digital. Esta aplicación web es el canal principal de interacción digital entre los usuarios y la empresa. Sus funciones críticas y procesos de negocio incluyen:
* Búsqueda de itinerarios, destinos y horarios de buses en tiempo real.
* Compra y reserva de pasajes online (procesamiento de transacciones).
* Gestión de perfiles de usuarios (donde los clientes guardan su información personal, métodos de contacto y preferencias para compras rápidas).
* Rastreo y seguimiento de envíos y encomiendas.

## 3. Enfoque y Justificación de la Auditoría
Dado el rubro logístico y de transporte de la empresa, el portal maneja **activos de información altamente sensibles**, tales como datos personales y de contacto de los pasajeros (RUT, nombres, correos, teléfonos), historiales de viaje, rutas frecuentes y datos de facturación. 

El objetivo de esta auditoría es evaluar la seguridad de este portal frente a vectores de ataque comunes (Inyección SQL, Cross-Site Scripting e Inyección de Comandos) en un ambiente controlado. Se medirá cómo estas vulnerabilidades técnicas se traducen en un riesgo real de negocio para TurBus (como la filtración de la base de datos de pasajeros o la toma de control del servidor) para luego proponer las respectivas medidas de prevención, mitigación y recuperación acorde a los estándares de la industria.