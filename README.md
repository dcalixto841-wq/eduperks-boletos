# Eduperks · Canje de boletos de cine

Página para redimir boletos de cine en la expo con QR que cambia cada 45 segundos.

| Archivo | Para qué es |
|---|---|
| `index.html` | Página que abre la gente al escanear: registro, botón **Redimir** y boleto con folio. |
| `stand.html` | Pantalla para el celular del stand: QR que cambia solo y contador de boletos. |
| `config.js` | Lo único que se edita: URL de Apps Script, términos y diseño del boleto. |
| `apps-script/Codigo.gs` | Backend: folios, registros y anti-duplicados (sin envío de correo). **No se sube a GitHub**, se pega en Apps Script. |

Sin `API_URL` todo funciona en **modo demo** (folios de prueba) para revisar diseño y flujo.

## 1. Google Sheet + Apps Script
1. Crea una Google Sheet nueva.
2. Extensiones → Apps Script → pega `Codigo.gs` → Guardar.
3. Selecciona la función `configurar` → **Ejecutar** → acepta permisos.
   Se crean las pestañas **Folios** y **Registros**. En *Registro de ejecución* aparece tu **CLAVE_STAND** (guárdala).
4. En la pestaña **Folios** pega los 200 folios en la columna A y escribe `Disponible` en la columna B.
5. **Implementar → Nueva implementación** → tipo *Aplicación web*
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
6. Copia la URL que termina en `/exec`.

> Si después cambias el código: Implementar → Administrar implementaciones → ✏️ → Versión: *Nueva versión*. Así la URL no cambia.

## 2. GitHub Pages
1. En `config.js` pega la URL en `API_URL` y ajusta `TERMINOS` y `AVISO_PRIVACIDAD_URL`.
2. Sube `index.html`, `stand.html` y `config.js` a un repo (la carpeta `apps-script` no es necesaria).
3. Settings → Pages → Branch `main` / root → Save.

## 3. En el stand
En el celular del stand abre:
```
https://TU-USUARIO.github.io/TU-REPO/stand.html#clave=TU_CLAVE_STAND
```
- La clave se guarda en ese celular y desaparece de la barra de direcciones.
- Toca ⛶ para pantalla completa. La pantalla se mantiene encendida en navegadores compatibles; desactiva el bloqueo automático por si acaso.
- Necesita internet (hotspot si la señal es mala).

## Cómo protege los folios
- QR válido ~90 s; al escanear se abren 10 min para registrarse. Una foto del QR enviada fuera del stand ya no sirve.
- Cada escaneo permite **un** canje.
- No repite por **celular**, **correo** ni **nombre** (sin acentos ni mayúsculas).
- El celular que ya redimió vuelve a ver su boleto en lugar del formulario.

## Poner tu diseño de boleto
1. Sube la imagen como `img/boleto.png`.
2. En `config.js`: `fondo: 'img/boleto.png'` y ajusta `folio.x` / `folio.y` (píxeles del centro donde va el folio), tamaño y color.
