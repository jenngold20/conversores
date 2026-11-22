# Herramientas de conversión de chats para Urbetrack y SISEP

Dos herramientas para procesar chats de WhatsApp de operativos:
- **Corrector para Urbetrack**: Corrige el chat y genera Excel con incidencias clasificadas
- **Conversor para SISEP**: Convierte el chat a JSON para carga automática

## Características

- Detección automática de partidos de fútbol y eventos por nombre de archivo
- Normalización de direcciones y calles
- Validación con USIG (geocodificador de CABA)
- Interfaz web, todo se procesa en el navegador

## Detección de Partidos y Eventos

### Partidos de Fútbol
Si el archivo de chat contiene "futbol" en el nombre (ej: `dgfis futbol.txt`):

**Sin secuestro (Relevamiento)**:
- Grupo: `PARTIDO DE FUTBOL`
- Tipo Servicio: `RELEVAMIENTO`
- Detalle Servicio: `SIN INCIDENCIAS`

**Con secuestro**:
- Grupo: `PARTIDO DE FUTBOL`
- Tipo Servicio: `SECUESTRO`
- Detalle Servicio: Tipo infractor (PUESTO DE VENTA AMBULANTE, MANTERO, FOOD TRUCK, etc.)
- Código: Número de acta

### Eventos
Si el archivo contiene "evento" en el nombre, se clasifica automáticamente como EVENTO.
