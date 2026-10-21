# Foto Panorámicas Premium · Studio OS Suite (Enterprise Demo)

Plataforma web de alta fidelidad y presentación ejecutiva para estudios fotográficos especializados en fotografía escolar, tomas panorámicas monumentales de generación y retratos de estudio.

Diseñada con estética de lujo (Azul Rey Profundo, Zafiro y Oro Cepillado), 100% frontend estático para despliegue sin costo en **GitHub Pages**.

---

## 🌟 Características de la Demostración

### 1. Experiencia Pública para Colegios y Alumnos
- **Escenario Hero Dinámico:** Conmutador interactivo entre Panorámicas Escolares, Retratos de Estudio y Sesiones Familiares.
- **Bóveda Digital de Clientes:** Acceso protegido por código PIN (ej: `GRADUACION-2026`, `PREPA-TEC-2026`, `COLEGIO-ALEMAN`, `VALERIA-ESTUDIO`, `FAMILIA-EXTERIOR`) con galería en alta resolución (300 DPI), selección de favoritas ❤️ y descarga.
- **Cotizador de Ventas en Vivo:** Formulario adaptativo para comités escolares y sesiones personales con conexión directa a WhatsApp.
- **Generador de Propuesta Formal:** Botón para expedir una cotización ejecutiva membretada con desglose comercial y lista para imprimir o guardar en PDF (`Ctrl + P`).

### 2. Panel de Control de Estudio (Studio OS Admin Demo)
- **Acceso con 1 Clic:** Botón permanente `👑 Panel de Estudio (Admin Demo)` en la barra superior y navegación.
- **KPIs Ejecutivos en Tiempo Real:** Métricas de generaciones activas, graduados con acceso digital, solicitudes en CRM y facturación proyectada.
- **Bandeja de Cotizaciones (CRM):** Sincronizada automáticamente con el formulario web vía `localStorage`. Permite cambiar estatus (`Nueva`, `En Proceso`, `Aprobada`), contactar por WhatsApp o expedir la propuesta formal.
- **Gestor de Bóvedas & Generaciones:** Permite dar de alta nuevas escuelas y probar al instante la experiencia desde el punto de vista del alumno.
- **Calculadora de Rentabilidad:** Deslizador interactivo para proyectar ganancias netas del estudio según el número de alumnos contratados.
- **Restablecimiento Rápido:** Botón para reiniciar todos los datos de demostración a su estado de fábrica en cualquier momento.

---

## 🚀 Cómo Desplegar en GitHub Pages (Paso a Paso)

Este proyecto está 100% listo para publicarse en GitHub Pages sin necesidad de instalar dependencias ni correr builds:

1. **Crear el Repositorio en GitHub:**
   - Ve a [github.com/new](https://github.com/new)
   - Nómbralo (por ejemplo: `foto-panoramicas` o `estudio-fotografico`).
   - Déjalo como **Público** (Public) y no marques "Add README" (ya tenemos uno).

2. **Subir los Archivos desde tu Terminal:**
   ```bash
   git add .
   git commit -m "feat: Studio OS enterprise client demo"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/foto-panoramicas.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, haz clic en **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
   - En **Build and deployment > Source**, selecciona **Deploy from a branch**.
   - En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).

4. **¡Listo!** En 1-2 minutos GitHub te entregará tu enlace público:
   `https://TU-USUARIO.github.io/foto-panoramicas/`

---

## 💼 Guía Rápida para la Presentación con el Cliente

1. **Abre el enlace público:** Muéstrale primero la página principal como si fueras un padre de familia o director escolar entrando a cotizar.
2. **Prueba el Portal de Alumnos:** Escribe `GRADUACION-2026` en la Bóveda Digital para que vea cómo sus alumnos descargan sus fotos oficiales en 300 DPI y eligen sus favoritas.
3. **Llena el formulario de cotización:** Escribe datos de prueba y envíala.
4. **Da el golpe de efecto ("El Wow Factor"):** Haz clic en **"👑 Panel de Estudio (Admin Demo)"** en la barra superior.
   - Muéstrale cómo la cotización que acabas de enviar ya apareció en su bandeja CRM.
   - Abre la pestaña de **Generaciones** y muéstrale cómo él mismo puede crear códigos para nuevos colegios.
   - Abre la **Calculadora de Ganancias** y mueve el deslizador para mostrarle cuánto dinero proyecta ganar en la temporada escolar.
   - Abre la **Propuesta Formal** y haz clic en "Imprimir / Guardar PDF" para que vea cómo se generan presupuestos automáticos con membrete.

---

© 2026 Foto Panorámicas Premium. Todos los derechos reservados.
