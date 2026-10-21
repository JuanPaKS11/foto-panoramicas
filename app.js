/**
 * FOTO PANORÁMICAS PREMIUM
 * Master Interactive Logic & Studio OS Suite
 * Grand Hero Stage + Client Portal + Comprehensive Sales Quotation System + Executive Admin Demo
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initGrandHero();
  initClientPortal();
  initPortfolio();
  initSalesQuotationSystem();
  initLightbox();
  initAdminSuite();
  initProposalSystem();
});

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message, type = 'gold') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let icon = '📋';
  if (type === 'fav') icon = '❤️';
  if (type === 'success') icon = '✅';
  if (type === 'download') icon = '📥';

  toast.innerHTML = `
    <span style="font-size: 1.15rem; color: var(--gold);">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3400);
}

/* ==========================================================================
   Navbar & Mobile Responsive Off-Canvas Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('mobile-nav-toggle');
  const navCloseBtn = document.getElementById('mobile-drawer-close-btn');
  const navBackdrop = document.getElementById('mobile-nav-backdrop');
  const navContainer = document.getElementById('nav-menu-container');

  function openMenu() {
    header?.classList.add('mobile-open');
    document.body.classList.add('mobile-menu-active');
    navToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    header?.classList.remove('mobile-open');
    document.body.classList.remove('mobile-menu-active');
    navToggle?.setAttribute('aria-expanded', 'false');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  navToggle?.addEventListener('click', () => {
    if (header?.classList.contains('mobile-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navCloseBtn?.addEventListener('click', closeMenu);
  navBackdrop?.addEventListener('click', closeMenu);

  navContainer?.querySelectorAll('a, button:not(#mobile-drawer-admin-btn)').forEach(el => {
    el.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header?.classList.contains('mobile-open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   Grand Hero Stage (IMAGEN EN GRANDE INTERACTIVA)
   ========================================================================== */
function initGrandHero() {
  const switchBtns = document.querySelectorAll('.hero-switch-btn');
  const heroImg = document.getElementById('grand-hero-img');
  const captionTitle = document.getElementById('grand-caption-title');
  const captionDesc = document.getElementById('grand-caption-desc');
  const badgeText = document.getElementById('grand-badge-text');
  const zoomBtn = document.getElementById('btn-zoom-grand-hero');
  const mobileZoomBtn = document.getElementById('btn-zoom-grand-mobile');
  const triggerWrap = document.getElementById('grand-image-trigger');

  const mobileTitle = document.getElementById('mobile-caption-title');
  const mobileDesc = document.getElementById('mobile-caption-desc');
  const mobileTag = document.getElementById('mobile-dock-tag');

  let currentImgSrc = 'images/panoramic-graduation.jpg';
  let currentImgTitle = 'Fotografía Panorámica Oficial de Generación';
  let currentImgDesc = 'Toma monumental en campus de honor con gradas estructuradas para hasta 500+ alumnos.';

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const newSrc = btn.getAttribute('data-img');
      const newTitle = btn.getAttribute('data-title');
      const newDesc = btn.getAttribute('data-desc');
      const newTag = btn.getAttribute('data-tag');

      if (heroImg && newSrc) {
        heroImg.style.opacity = '0.3';
        setTimeout(() => {
          heroImg.src = newSrc;
          currentImgSrc = newSrc;
          currentImgTitle = newTitle || '';
          currentImgDesc = newDesc || '';

          if (captionTitle) captionTitle.textContent = currentImgTitle;
          if (captionDesc) captionDesc.textContent = currentImgDesc;
          if (badgeText) badgeText.textContent = `${newTag} · ENMARCADO ARTESANAL EN MADERA`;

          if (mobileTitle) mobileTitle.textContent = currentImgTitle;
          if (mobileDesc) mobileDesc.textContent = currentImgDesc;
          if (mobileTag) mobileTag.textContent = `${newTag}`;

          heroImg.style.opacity = '1';
        }, 180);
      }
    });
  });

  function openHeroLightbox() {
    openLightbox(currentImgSrc, currentImgTitle, currentImgDesc);
  }

  zoomBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openHeroLightbox();
  });

  mobileZoomBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openHeroLightbox();
  });

  triggerWrap?.addEventListener('click', (e) => {
    if (!e.target.closest('a') && !e.target.closest('button')) {
      openHeroLightbox();
    }
  });
}

/* ==========================================================================
   LOCAL STORAGE DATABASE & DATA SEEDS
   ========================================================================== */
const SEED_SESSIONS = {
  'GRADUACION-2026': {
    id: 'GRADUACION-2026',
    clientName: 'Colegio Universitario · Generación 2026',
    sessionType: 'Foto Panorámica de Generación & Toga',
    date: 'Octubre 2026',
    status: 'Galería Oficial Aprobada ✅',
    resolution: 'Ultra-HD (300 DPI Imprimible)',
    totalPhotos: 5,
    cover: 'images/panoramic-graduation.jpg',
    photos: [
      { id: 'grad-01', title: 'Foto Panorámica Oficial de Generación', file: 'images/panoramic-graduation.jpg', specs: 'Formato Panorámico · 450 Graduados' },
      { id: 'grad-02', title: 'Retrato con Toga y Diploma al Atardecer', file: 'images/graduation-solo.jpg', specs: '85mm f/1.4 · ISO 160' },
      { id: 'grad-03', title: 'Celebración y Festejo en Campus', file: 'images/graduation-group.jpg', specs: '35mm f/2.0 · ISO 250' },
      { id: 'grad-04', title: 'Retrato Formal para Título', file: 'images/portrait-female.jpg', specs: '85mm f/2.0 · ISO 100' },
      { id: 'grad-05', title: 'Retrato Ejecutivo de Egresado', file: 'images/portrait-male.jpg', specs: '85mm f/1.8 · ISO 100' }
    ]
  },
  'PREPA-TEC-2026': {
    id: 'PREPA-TEC-2026',
    clientName: 'Prepa Tec Campus Santa Fe · Gen. 42',
    sessionType: 'Panorámica Monumental & Dron 4K',
    date: 'Noviembre 2026',
    status: 'En Retoque Digital & Laboratorio ⏳',
    resolution: 'Ultra-HD (300 DPI)',
    totalPhotos: 4,
    cover: 'images/graduation-group.jpg',
    photos: [
      { id: 'tec-01', title: 'Toma General en Explanada Central', file: 'images/panoramic-graduation.jpg', specs: 'Gradas 8 Niveles · 320 Alumnos' },
      { id: 'tec-02', title: 'Lanzamiento de Birretes', file: 'images/graduation-group.jpg', specs: 'Ráfaga 20fps · Golden Hour' },
      { id: 'tec-03', title: 'Retrato de Toga Egresada con Honores', file: 'images/graduation-solo.jpg', specs: '85mm f/1.4 · Bokeh Fino' },
      { id: 'tec-04', title: 'Retrato Académico Formal', file: 'images/portrait-male.jpg', specs: 'Iluminación Clásica Rembrandt' }
    ]
  },
  'COLEGIO-ALEMAN': {
    id: 'COLEGIO-ALEMAN',
    clientName: 'Colegio Alemán Alexander von Humboldt',
    sessionType: 'Fotografía Oficial de Generación',
    date: 'Noviembre 2026',
    status: 'Galería Oficial Aprobada ✅',
    resolution: 'Ultra-HD (300 DPI)',
    totalPhotos: 3,
    cover: 'images/graduation-solo.jpg',
    photos: [
      { id: 'alm-01', title: 'Panorámica Oficial en Cancha de Honor', file: 'images/panoramic-graduation.jpg', specs: '180 Graduados' },
      { id: 'alm-02', title: 'Retrato de Egresada con Diploma', file: 'images/graduation-solo.jpg', specs: '85mm f/1.4 · ISO 100' },
      { id: 'alm-03', title: 'Festejo en Jardines', file: 'images/graduation-group.jpg', specs: '35mm f/2.8 · Luz Natural' }
    ]
  },
  'VALERIA-ESTUDIO': {
    id: 'VALERIA-ESTUDIO',
    clientName: 'Valeria Montes',
    sessionType: 'Sesión Personal en Estudio & Retrato',
    date: 'Septiembre 2026',
    status: 'Fotos Retocadas y Listas ✅',
    resolution: '48.2 Megapíxeles (300 DPI)',
    totalPhotos: 4,
    cover: 'images/portrait-female.jpg',
    photos: [
      { id: 'val-01', title: 'Retrato de Estudio en Claroscuro', file: 'images/portrait-female.jpg', specs: '85mm f/1.4 · Iluminación Suave' },
      { id: 'val-02', title: 'Perfil Creativo & Expresión', file: 'images/portrait-female.jpg', specs: '50mm f/1.4 · ISO 100' },
      { id: 'val-03', title: 'Retrato Editorial de Alta Costura', file: 'images/fashion-editorial.jpg', specs: '70mm f/2.8 · ISO 200' },
      { id: 'val-04', title: 'Plano Medio en Fondo Neutro', file: 'images/portrait-female.jpg', specs: '85mm f/2.0 · ISO 100' }
    ]
  },
  'FAMILIA-EXTERIOR': {
    id: 'FAMILIA-EXTERIOR',
    clientName: 'Familia Gómez Herrera',
    sessionType: 'Sesión Familiar al Aire Libre (Golden Hour)',
    date: 'Octubre 2026',
    status: 'Galería Lista para Descarga ✅',
    resolution: 'Ultra-HD (300 DPI)',
    totalPhotos: 4,
    cover: 'images/outdoor-sunset.jpg',
    photos: [
      { id: 'fam-01', title: 'Sesión al Atardecer en los Campos', file: 'images/outdoor-sunset.jpg', specs: '50mm f/1.2 · Luz Natural Cálida' },
      { id: 'fam-02', title: 'Retrato Espontáneo & Sonrisas', file: 'images/outdoor-sunset.jpg', specs: '85mm f/1.4 · ISO 100' },
      { id: 'fam-03', title: 'Celebración Familiar en Locación', file: 'images/graduation-group.jpg', specs: '35mm f/2.8 · ISO 200' },
      { id: 'fam-04', title: 'Instalaciones y Set del Estudio', file: 'images/studio-interior.jpg', specs: '24mm f/2.8 · Set Profesional' }
    ]
  }
};

const SEED_QUOTES = [
  {
    id: 'COT-2026-081',
    date: '21 Oct 2026',
    category: 'Escolar',
    schoolName: 'Colegio Vista Hermosa',
    level: 'Secundaria & Preparatoria',
    studentsCount: '120 alumnos',
    eventDate: 'Mayo 2026',
    city: 'Cuajimalpa, CDMX',
    contactName: 'Mtra. Carmen Delgado',
    contactRole: 'Directora de Nivel',
    contactPhone: '+52 (55) 5412-8900',
    contactEmail: 'direccion.secundaria@cvh.edu.mx',
    services: ['Toma Panorámica en Gradas', 'Retrato Individual de Toga', 'Cuadro de Caoba'],
    notes: 'Requieren presentación presencial ante el comité de padres de familia el próximo viernes.',
    status: 'En Proceso',
    estimatedTotal: '$150,000 MXN'
  },
  {
    id: 'COT-2026-082',
    date: '20 Oct 2026',
    category: 'Escolar',
    schoolName: 'Prepa Tec Campus Santa Fe',
    level: 'Bachillerato Internacional',
    studentsCount: '320 alumnos',
    eventDate: 'Junio 2026',
    city: 'Álvaro Obregón, CDMX',
    contactName: 'Lic. Fernando Morán',
    contactRole: 'Presidente Comité de Graduación',
    contactPhone: '+52 (55) 7890-1234',
    contactEmail: 'comite.grad26@itesm.mx',
    services: ['Panorámica Monumental', 'Tomas con Dron 4K', 'Toga y Birrete Platinum', 'Bóveda Digital 300 DPI'],
    notes: 'Presupuesto aprobado por directivos; coordinar fecha de montaje de gradas.',
    status: 'Aprobada',
    estimatedTotal: '$400,000 MXN'
  },
  {
    id: 'COT-2026-083',
    date: '19 Oct 2026',
    category: 'Escolar',
    schoolName: 'Universidad Panamericana',
    level: 'Facultad de Derecho',
    studentsCount: '210 alumnos',
    eventDate: 'Noviembre 2026',
    city: 'Benito Juárez, CDMX',
    contactName: 'Rodrigo Alcocer',
    contactRole: 'Representante Estudiantil',
    contactPhone: '+52 (55) 3211-9876',
    contactEmail: 'r.alcocer@alumnos.up.edu.mx',
    services: ['Toma Panorámica de Honor', 'Retrato Individual para Título', 'Carpeta Institucional'],
    notes: 'Desean muestras físicas de cuadros de caoba con marialuisa dorada.',
    status: 'Nueva',
    estimatedTotal: '$262,500 MXN'
  },
  {
    id: 'COT-2026-084',
    date: '18 Oct 2026',
    category: 'Escolar',
    schoolName: 'Colegio Alemán Alexander von Humboldt',
    level: 'Abitur / Preparatoria',
    studentsCount: '180 alumnos',
    eventDate: 'Diciembre 2026',
    city: 'Lomas Verdes, EdoMex',
    contactName: 'Sra. Patricia Von Borstel',
    contactRole: 'Comité de Padres',
    contactPhone: '+52 (55) 6543-2198',
    contactEmail: 'comite.aleman@gmail.com',
    services: ['Fotografía Panorámica', 'Enmarcado Artesanal', 'Descarga en Alta Resolución'],
    notes: 'Interesados en entrega express de fotos antes de fin de año.',
    status: 'Nueva',
    estimatedTotal: '$225,000 MXN'
  },
  {
    id: 'COT-2026-085',
    date: '18 Oct 2026',
    category: 'Escolar',
    schoolName: 'Instituto Cumbres México',
    level: 'Bachillerato Anáhuac',
    studentsCount: '220 alumnos',
    eventDate: 'Mayo 2026',
    city: 'Huixquilucan, EdoMex',
    contactName: 'Lic. Rodrigo Baillères',
    contactRole: 'Comité de Graduación',
    contactPhone: '+52 (55) 3456-7890',
    contactEmail: 'graduacion@cumbresmexico.com',
    services: ['Toma Panorámica en Gradas', 'Togas y Birretes en Préstamo', 'Cuadro de Caoba'],
    notes: 'Solicitaron visita presencial para llevar muestras de cuadros de caoba a la junta de directores y padres el miércoles a las 7:00 PM.',
    status: 'Nueva',
    estimatedTotal: '$275,000 MXN'
  }
];

function getStoredSessions() {
  try {
    const raw = localStorage.getItem('fpp_sessions_v1');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error leyendo sesiones de localStorage', e);
  }
  return SEED_SESSIONS;
}

function saveStoredSessions(sessions) {
  try {
    localStorage.setItem('fpp_sessions_v1', JSON.stringify(sessions));
  } catch (e) {
    console.error('Error guardando sesiones', e);
  }
}

function getStoredQuotes() {
  try {
    const raw = localStorage.getItem('fpp_quotes_v1');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error leyendo cotizaciones de localStorage', e);
  }
  return SEED_QUOTES;
}

function saveStoredQuote(newQuote) {
  const list = getStoredQuotes();
  list.unshift(newQuote);
  try {
    localStorage.setItem('fpp_quotes_v1', JSON.stringify(list));
  } catch (e) {
    console.error('Error guardando cotización', e);
  }
}

function updateStoredQuotesList(updatedList) {
  try {
    localStorage.setItem('fpp_quotes_v1', JSON.stringify(updatedList));
  } catch (e) {
    console.error('Error actualizando lista de cotizaciones', e);
  }
}

function resetStudioDemoData() {
  localStorage.removeItem('fpp_sessions_v1');
  localStorage.removeItem('fpp_quotes_v1');
  showToast('¡Datos demo restablecidos a valores de fábrica!', 'success');
  updateAdminStats();
  renderCrmTable();
  renderAdminVaults();
}

/* ==========================================================================
   Client Portal Database & Engine (Escolar + Personal)
   ========================================================================== */
let currentSession = null;
let currentFilter = 'all';

function initClientPortal() {
  const pinInput = document.getElementById('portal-pin-input');
  const accessBtn = document.getElementById('portal-access-btn');
  const demoPills = document.querySelectorAll('.demo-pill-btn');

  demoPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.getAttribute('data-code');
      if (pinInput && code) {
        pinInput.value = code;
        loadClientSession(code);
      }
    });
  });

  accessBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const code = pinInput?.value.trim().toUpperCase();
    if (!code) {
      showToast('Por favor escribe tu código de sesión', 'gold');
      pinInput?.focus();
      return;
    }
    loadClientSession(code);
  });

  pinInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      accessBtn?.click();
    }
  });

  pinInput?.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
  });
}

function loadClientSession(code) {
  const viewer = document.getElementById('client-session-viewer');
  showToast('Cargando galería privada en alta resolución...', 'gold');

  setTimeout(() => {
    const sessions = getStoredSessions();
    let session = sessions[code];

    if (!session) {
      session = {
        id: code,
        clientName: `Colegio / Cliente ${code}`,
        sessionType: 'Sesión Fotográfica Escolar & Retrato',
        date: 'Ciclo 2026',
        status: 'Fotos Listas para Descarga ✅',
        resolution: 'Ultra-HD (300 DPI)',
        totalPhotos: 4,
        cover: 'images/panoramic-graduation.jpg',
        photos: [
          { id: 'custom-01', title: 'Foto Principal de Generación', file: 'images/panoramic-graduation.jpg', specs: 'Formato Panorámico · 300 DPI' },
          { id: 'custom-02', title: 'Retrato de Toga en Claroscuro', file: 'images/graduation-solo.jpg', specs: '85mm f/1.4 · Iluminación Suave' },
          { id: 'custom-03', title: 'Retrato Académico Individual', file: 'images/portrait-female.jpg', specs: '85mm f/1.8 · ISO 100' },
          { id: 'custom-04', title: 'Celebración en Campus Golden Hour', file: 'images/graduation-group.jpg', specs: '50mm f/1.2 · Atardecer' }
        ]
      };
    }

    currentSession = session;
    currentFilter = 'all';

    renderSessionView(session);

    if (viewer) {
      viewer.style.display = 'block';
      viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    showToast(`¡Bienvenido(a), ${session.clientName}!`, 'success');
  }, 400);
}

function getStoredFavorites(sessionId) {
  try {
    const raw = localStorage.getItem(`fpp_fav_${sessionId}`);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveStoredFavorites(sessionId, favs) {
  try {
    localStorage.setItem(`fpp_fav_${sessionId}`, JSON.stringify(favs));
  } catch (e) {}
}

function renderSessionView(session) {
  const viewer = document.getElementById('client-session-viewer');
  if (!viewer) return;

  const favs = getStoredFavorites(session.id);

  viewer.innerHTML = `
    <div class="container">
      <div class="session-view-banner">
        <div class="session-banner-top">
          <div>
            <div class="badge-tag" style="margin-bottom: 0.6rem;">CÓDIGO: ${session.id}</div>
            <h2>${session.clientName}</h2>
            <div class="session-meta-pills">
              <span class="session-pill highlight">📷 ${session.sessionType}</span>
              <span class="session-pill">📅 ${session.date}</span>
              <span class="session-pill">💎 ${session.resolution}</span>
              <span class="session-pill" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.4);">${session.status}</span>
            </div>
          </div>
          <div>
            <button class="btn btn-outline btn-sm" id="btn-close-session">
              <span>✕</span> Salir de Galería
            </button>
          </div>
        </div>

        <div class="session-banner-toolbar">
          <div class="session-filter-group">
            <button class="filter-btn-royal active" data-filter="all">
              <span>Todas las Fotos</span>
              <span class="count-badge">${session.photos.length}</span>
            </button>
            <button class="filter-btn-royal" data-filter="favs">
              <span>❤️ Mis Favoritas</span>
              <span class="count-badge" id="badge-fav-count">${favs.length}</span>
            </button>
          </div>

          <div class="session-action-group">
            <button class="btn btn-gold btn-sm" id="btn-download-all-photos">
              <span>⬇ Descargar Todo (ZIP)</span>
            </button>
          </div>
        </div>
      </div>

      <div class="client-photo-grid" id="client-photo-grid"></div>
    </div>
  `;

  renderPhotoGrid(session, 'all');

  viewer.querySelectorAll('.filter-btn-royal').forEach(btn => {
    btn.addEventListener('click', () => {
      viewer.querySelectorAll('.filter-btn-royal').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      renderPhotoGrid(session, filter);
    });
  });

  viewer.querySelector('#btn-close-session')?.addEventListener('click', () => {
    viewer.style.display = 'none';
    const portal = document.getElementById('portal-clientes');
    portal?.scrollIntoView({ behavior: 'smooth' });
    showToast('Sesión de galería cerrada', 'gold');
  });

  viewer.querySelector('#btn-download-all-photos')?.addEventListener('click', () => {
    showToast('Preparando descarga completa en resolución 300 DPI...', 'download');
    setTimeout(() => {
      const firstPhoto = session.photos[0]?.file || 'images/panoramic-graduation.jpg';
      const tempLink = document.createElement('a');
      tempLink.href = firstPhoto;
      tempLink.download = `${session.id}_PAQUETE_OFICIAL_300DPI.jpg`;
      document.body.appendChild(tempLink);
      tempLink.click();
      tempLink.remove();
      showToast('¡Descarga de alta resolución iniciada!', 'success');
    }, 1200);
  });
}

function renderPhotoGrid(session, filterMode) {
  const grid = document.getElementById('client-photo-grid');
  if (!grid) return;

  const favs = getStoredFavorites(session.id);

  let filteredPhotos = session.photos;
  if (filterMode === 'favs') {
    filteredPhotos = session.photos.filter(p => favs.includes(p.id));
  }

  if (filteredPhotos.length === 0 && filterMode === 'favs') {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 2rem; background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--border-medium);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🤍</p>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.35rem; color: #fff;">Aún no tienes fotos favoritas marcadas</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.25rem;">Haz clic en el corazón de cualquier foto para guardarla en tu selección.</p>
        <button class="btn btn-gold btn-sm" onclick="document.querySelector('.filter-btn-royal[data-filter=\\'all\\']').click()">Ver todas las fotos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredPhotos.map(photo => {
    const isFav = favs.includes(photo.id);
    const isPano = photo.file.includes('panoramic');
    return `
      <div class="photo-card-royal" data-id="${photo.id}">
        <button class="btn-fav-heart-royal ${isFav ? 'is-favorite' : ''}" data-id="${photo.id}" title="${isFav ? 'Quitar favorita' : 'Marcar favorita'}">
          ♥
        </button>
        <div class="photo-card-img-wrap ${isPano ? 'panoramic-wrap' : ''}" data-img="${photo.file}" data-title="${photo.title}" data-specs="${photo.specs}">
          <img src="${photo.file}" alt="${photo.title}" loading="lazy">
        </div>
        <div class="photo-card-footer-royal">
          <div>
            <div class="photo-title-text">${photo.title}</div>
            <div class="photo-specs-text">${photo.specs}</div>
          </div>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn-icon-royal btn-inspect" data-img="${photo.file}" data-title="${photo.title}" data-specs="${photo.specs}" title="Ver Pantalla Completa">
              🔍
            </button>
            <a href="${photo.file}" download="${session.id}_${photo.id}.jpg" class="btn-icon-royal" title="Descargar">
              ⬇
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.btn-fav-heart-royal').forEach(heartBtn => {
    heartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const photoId = heartBtn.getAttribute('data-id');
      toggleFavorite(session.id, photoId, heartBtn);
    });
  });

  grid.querySelectorAll('.photo-card-img-wrap, .btn-inspect').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const img = trigger.getAttribute('data-img');
      const title = trigger.getAttribute('data-title');
      const specs = trigger.getAttribute('data-specs');
      openLightbox(img, title, specs);
    });
  });
}

function toggleFavorite(sessionId, photoId, buttonEl) {
  let favs = getStoredFavorites(sessionId);
  const exists = favs.includes(photoId);

  if (exists) {
    favs = favs.filter(id => id !== photoId);
    buttonEl.classList.remove('is-favorite');
    showToast('Foto eliminada de favoritas', 'gold');
  } else {
    favs.push(photoId);
    buttonEl.classList.add('is-favorite');
    showToast('¡Foto guardada en tus favoritas! ❤️', 'fav');
  }

  saveStoredFavorites(sessionId, favs);

  const badgeFavCount = document.getElementById('badge-fav-count');
  if (badgeFavCount) badgeFavCount.textContent = favs.length;

  if (currentFilter === 'favs') {
    renderPhotoGrid(currentSession, 'favs');
  }
}

/* ==========================================================================
   Public Portfolio Filter
   ========================================================================== */
function initPortfolio() {
  const tabs = document.querySelectorAll('.portfolio-tab-btn');
  const items = document.querySelectorAll('.portfolio-item-royal');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img')?.getAttribute('src');
      const title = item.querySelector('h3')?.textContent || 'Foto Panorámicas Premium';
      const meta = item.querySelector('p')?.textContent || '';
      openLightbox(img, title, meta);
    });
  });
}

/* ==========================================================================
   COMPREHENSIVE SALES QUOTATION SYSTEM (DEPARTAMENTO DE VENTAS)
   ========================================================================== */
function initSalesQuotationSystem() {
  const tabSchool = document.getElementById('tab-quote-school');
  const tabPersonal = document.getElementById('tab-quote-personal');
  const schoolGroup = document.getElementById('school-fields-group');
  const personalGroup = document.getElementById('personal-fields-group');
  const categoryInput = document.getElementById('quote-category');
  const form = document.getElementById('sales-quotation-form');
  const schoolRequiredInputs = document.querySelectorAll('.school-req');

  tabSchool?.addEventListener('click', () => {
    tabSchool.classList.add('active');
    tabPersonal?.classList.remove('active');
    if (schoolGroup) schoolGroup.style.display = 'block';
    if (personalGroup) personalGroup.style.display = 'none';
    if (categoryInput) categoryInput.value = 'Escolar';
    schoolRequiredInputs.forEach(input => input.setAttribute('required', 'required'));
  });

  tabPersonal?.addEventListener('click', () => {
    tabPersonal.classList.add('active');
    tabSchool?.classList.remove('active');
    if (schoolGroup) schoolGroup.style.display = 'none';
    if (personalGroup) personalGroup.style.display = 'block';
    if (categoryInput) categoryInput.value = 'Personal';
    schoolRequiredInputs.forEach(input => input.removeAttribute('required'));
  });

  // Handle Form Submission for Sales & Direct Sync to Admin CRM
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const category = categoryInput?.value || 'Escolar';
    const contactName = document.getElementById('contact-name')?.value || 'Contacto';
    const contactRole = document.getElementById('contact-role')?.value || 'Representante';
    const contactPhone = document.getElementById('contact-phone')?.value || '';
    const contactEmail = document.getElementById('contact-email')?.value || '';
    const quoteNotes = document.getElementById('quote-notes')?.value || 'Sin notas adicionales';

    let schoolName = '';
    let schoolLevel = '';
    let studentsCount = '';
    let eventDate = '';
    let schoolCity = '';
    let checkedServices = [];

    if (category === 'Escolar') {
      schoolName = document.getElementById('school-name')?.value || 'Colegio Particular';
      schoolLevel = document.getElementById('school-level')?.value || 'Graduación';
      studentsCount = document.getElementById('students-count')?.value || '100 alumnos';
      eventDate = document.getElementById('event-date')?.value || 'Mayo 2026';
      schoolCity = document.getElementById('school-city')?.value || 'Ciudad de México';

      document.querySelectorAll('input[name="school_services"]:checked').forEach(cb => {
        checkedServices.push(cb.value);
      });
      if (checkedServices.length === 0) {
        checkedServices = ['Toma Panorámica de Honor', 'Cuadro de Caoba Artesanal'];
      }
    } else {
      const sessionType = document.getElementById('personal-session-type')?.value || 'Sesión de Retrato en Estudio';
      const peopleCount = document.getElementById('personal-people-count')?.value || '1';
      schoolName = `${sessionType} (${contactName})`;
      schoolLevel = 'Particular / Estudio';
      studentsCount = `${peopleCount} pers.`;
      eventDate = document.getElementById('personal-date')?.value || 'Próximo mes';
      schoolCity = 'Estudio Central';
      checkedServices = [sessionType];
    }

    // Auto-calculate estimate
    let numericStudents = parseInt(studentsCount) || 120;
    let estimatedTotal = category === 'Escolar'
      ? `$${(numericStudents * 1250).toLocaleString('es-MX')} MXN`
      : '$3,800 MXN';

    const newQuote = {
      id: `COT-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }),
      category: category,
      schoolName: schoolName,
      level: schoolLevel,
      studentsCount: studentsCount,
      eventDate: eventDate,
      city: schoolCity,
      contactName: contactName,
      contactRole: contactRole,
      contactPhone: contactPhone,
      contactEmail: contactEmail,
      services: checkedServices,
      notes: quoteNotes,
      status: 'Nueva',
      estimatedTotal: estimatedTotal
    };

    saveStoredQuote(newQuote);
    updateAdminStats();
    renderCrmTable();

    showToast('¡Expediente de cotización registrado con éxito! Folio: ' + newQuote.id, 'success');

    // Build WhatsApp message
    const servicesText = checkedServices.map(s => `• ${s}`).join('%0A');
    const formattedMsg = `📋 *SOLICITUD DE COTIZACIÓN ${category.toUpperCase()}*%0A` +
      `🏢 *Foto Panorámicas Premium*%0A` +
      `🔖 *Folio:* ${newQuote.id}%0A%0A` +
      `🏫 *Institución:* ${encodeURIComponent(schoolName)}%0A` +
      `👥 *Alumnos/Personas:* ${encodeURIComponent(studentsCount)}%0A` +
      `📅 *Fecha Tentativa:* ${encodeURIComponent(eventDate)}%0A` +
      `📍 *Ubicación:* ${encodeURIComponent(schoolCity)}%0A%0A` +
      `📸 *Servicios de Interés:*%0A${servicesText}%0A%0A` +
      `👤 *Contacto:* ${encodeURIComponent(contactName)} (${encodeURIComponent(contactRole)})%0A` +
      `📱 *Teléfono:* ${encodeURIComponent(contactPhone)}%0A` +
      `✉️ *Correo:* ${encodeURIComponent(contactEmail)}%0A` +
      `📝 *Notas:* ${encodeURIComponent(quoteNotes)}%0A%0A` +
      `_Enviado desde el portal web oficial de cotizaciones_`;

    setTimeout(() => {
      const waUrl = `https://wa.me/5215500000000?text=${formattedMsg}`;
      window.open(waUrl, '_blank');
      form.reset();
    }, 1000);
  });
}

/* ==========================================================================
   FORMAL PROPOSAL / PRINTABLE GENERATOR SYSTEM
   ========================================================================== */
function initProposalSystem() {
  const btnPreview = document.getElementById('btn-preview-formal-quote');
  const modal = document.getElementById('proposal-modal');
  const btnClose = document.getElementById('btn-close-proposal');
  const btnPrint = document.getElementById('btn-print-proposal');

  btnPreview?.addEventListener('click', () => {
    const category = document.getElementById('quote-category')?.value || 'Escolar';
    const schoolName = document.getElementById('school-name')?.value || 'Colegio Universitario de México';
    const contactName = document.getElementById('contact-name')?.value || 'Comité de Graduación';
    const contactRole = document.getElementById('contact-role')?.value || 'Representante';
    const contactPhone = document.getElementById('contact-phone')?.value || '+52 (55) 8492-3100';
    const contactEmail = document.getElementById('contact-email')?.value || 'comite@colegio.edu.mx';
    const students = document.getElementById('students-count')?.value || '250 alumnos';
    const eventDate = document.getElementById('event-date')?.value || 'Mayo / Junio 2026';
    const city = document.getElementById('school-city')?.value || 'Ciudad de México';

    const checkedServices = [];
    document.querySelectorAll('input[name="school_services"]:checked').forEach(cb => {
      checkedServices.push(cb.value);
    });

    const quoteObj = {
      id: 'COT-2026-' + Math.floor(100 + Math.random() * 900),
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' }),
      category: category,
      schoolName: schoolName,
      contactName: contactName,
      contactRole: contactRole,
      contactPhone: contactPhone,
      contactEmail: contactEmail,
      studentsCount: students,
      eventDate: eventDate,
      city: city,
      services: checkedServices.length > 0 ? checkedServices : ['Toma Panorámica de Honor', 'Cuadro de Caoba con Marialuisa', 'Bóveda Digital 300 DPI'],
      notes: document.getElementById('quote-notes')?.value || 'Presupuesto oficial para comités escolares y directivos con garantía de entrega.'
    };

    openProposalModal(quoteObj);
  });

  btnClose?.addEventListener('click', closeProposalModal);
  btnPrint?.addEventListener('click', () => {
    window.print();
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeProposalModal();
  });
}

function openProposalModal(quote) {
  const modal = document.getElementById('proposal-modal');
  const content = document.getElementById('proposal-paper-content');
  if (!modal || !content) return;

  const countNum = parseInt(quote.studentsCount) || 150;
  const unitPrice = 1250;
  const subtotal = countNum * unitPrice;
  const discount = Math.round(subtotal * 0.10);
  const total = subtotal - discount;

  content.innerHTML = `
    <!-- Letterhead -->
    <div class="proposal-header-letterhead">
      <div>
        <div class="letterhead-brand-title font-serif">FOTO PANORÁMICAS MÉXICO</div>
        <div class="letterhead-brand-sub">Taller de Fotografía Panorámica Escolar, Gradas de Honor & Enmarcado Artesanal</div>
        <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.35rem;">
          Av. Insurgentes Sur #1480, Col. Actipan, Benito Juárez, CDMX · Tel: (55) 8492-3100 · RFC: FPM-120918-K82
        </div>
      </div>
      <div class="letterhead-folio-box">
        <div style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 800; color: #b45309;">${quote.id || 'COT-2026-OFICIAL'}</div>
        <div style="font-size: 0.78rem; color: #64748b; margin-top: 0.2rem;">Fecha de Expedición:</div>
        <div style="font-size: 0.82rem; font-weight: 600; color: #0f172a;">${quote.date || 'Octubre 2026'}</div>
        <div style="font-size: 0.75rem; color: #16a34a; font-weight: 700; margin-top: 0.25rem;">● Vigencia: 30 Días Naturales</div>
      </div>
    </div>

    <!-- Title Banner -->
    <div class="proposal-title-banner">
      <h2 class="font-serif">PROPUESTA TÉCNICA Y ECONÓMICA DE GRADUACIÓN ESCOLAR</h2>
      <p>Servicio Integral de Fotografía Oficial de Generación, Gradas con Certificación Estructural & Galería de Alumnos</p>
    </div>

    <!-- Client Info -->
    <div class="proposal-client-grid">
      <div class="proposal-client-col">
        <div><strong>Institución / Escuela:</strong> ${quote.schoolName}</div>
        <div><strong>Nivel / Generación:</strong> ${quote.level || 'Generación 2026'}</div>
        <div><strong>Sede / Ciudad:</strong> ${quote.city || 'Ciudad de México'}</div>
        <div><strong>Fecha Tentativa de Toma:</strong> ${quote.eventDate || 'Mayo / Junio 2026'}</div>
      </div>
      <div class="proposal-client-col">
        <div><strong>Atención a:</strong> ${quote.contactName} (${quote.contactRole || 'Comité'})</div>
        <div><strong>Teléfono de Contacto:</strong> ${quote.contactPhone}</div>
        <div><strong>Correo Electrónico:</strong> ${quote.contactEmail}</div>
        <div><strong>Volumen de Alumnos:</strong> ${quote.studentsCount}</div>
      </div>
    </div>

    <!-- Scope Breakdown Table -->
    <table class="proposal-breakdown-table">
      <thead>
        <tr>
          <th>Concepto / Especificación del Servicio</th>
          <th style="text-align: center;">Cant.</th>
          <th style="text-align: right;">P. Unitario</th>
          <th style="text-align: right;">Importe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Fotografía Panorámica Monumental en Gradas Certificadas</strong>
            <div style="font-size: 0.76rem; color: #64748b; margin-top: 0.2rem;">
              Montaje de estructura tubular con pernos de alta resistencia y barandal de seguridad. Iluminación compensada en campus y dirección escénica de graduados.
            </div>
          </td>
          <td style="text-align: center;">${countNum}</td>
          <td style="text-align: right;">$650.00</td>
          <td style="text-align: right;">$${(countNum * 650).toLocaleString('es-MX')}</td>
        </tr>
        <tr>
          <td>
            <strong>Enmarcado Artesanal en Madera Sólida de Caoba</strong>
            <div style="font-size: 0.76rem; color: #64748b; margin-top: 0.2rem;">
              Moldura de lujo con marialuisa doble dorada, placa metálica conmemorativa grabada con escudo del plantel y vidrio anti-reflejante.
            </div>
          </td>
          <td style="text-align: center;">${countNum}</td>
          <td style="text-align: right;">$420.00</td>
          <td style="text-align: right;">$${(countNum * 420).toLocaleString('es-MX')}</td>
        </tr>
        <tr>
          <td>
            <strong>Acceso Individual al Portal de Alumnos en Alta Resolución</strong>
            <div style="font-size: 0.76rem; color: #64748b; margin-top: 0.2rem;">
              Clave personalizada para que cada alumno descargue la toma panorámica y retratos individuales sin marcas de agua durante todo el ciclo escolar.
            </div>
          </td>
          <td style="text-align: center;">${countNum}</td>
          <td style="text-align: right;">$180.00</td>
          <td style="text-align: right;">$${(countNum * 180).toLocaleString('es-MX')}</td>
        </tr>
      </tbody>
    </table>

    <!-- Totals -->
    <div class="proposal-totals-box">
      <table class="proposal-totals-table">
        <tr>
          <td>Subtotal de Paquetes:</td>
          <td style="text-align: right; font-weight: 600;">$${subtotal.toLocaleString('es-MX')} MXN</td>
        </tr>
        <tr>
          <td style="color: #16a34a;">Convenio Institucional (Descuento 10%):</td>
          <td style="text-align: right; color: #16a34a; font-weight: 600;">-$${discount.toLocaleString('es-MX')} MXN</td>
        </tr>
        <tr class="total-row">
          <td>Inversión Neta por Alumno:</td>
          <td style="text-align: right; color: #b45309;">$${Math.round(total / countNum).toLocaleString('es-MX')} MXN</td>
        </tr>
        <tr class="total-row">
          <td>Total de la Generación:</td>
          <td style="text-align: right; color: #0f172a;">$${total.toLocaleString('es-MX')} MXN</td>
        </tr>
      </table>
    </div>

    <!-- Commercial Terms -->
    <div class="proposal-terms-box">
      <h4>Condiciones Comerciales & Compromiso de Calidad:</h4>
      <p>
        1. <strong>Anticipo y Facilidades:</strong> Se formaliza el apartado de fecha con el 30% de anticipo; el resto se liquida contra entrega de cuadros en el plantel.<br>
        2. <strong>Tiempos de Entrega:</strong> Retoque fotográfico fino y entrega de cuadros terminados en 15 días hábiles posteriores a la sesión.<br>
        3. <strong>Seguridad en Campus:</strong> Estructura de gradas avalada con memoria de cálculo estructural y personal técnico debidamente uniformado y asegurado.<br>
        4. <strong>Garantía de Ojos Abiertos:</strong> Si algún alumno parpadea o presenta alguna anomalía, se sustituye la toma digitalmente sin costo alguno.
      </p>
    </div>

    <!-- Signatures -->
    <div class="proposal-signatures-grid">
      <div>
        <div class="signature-line">
          <strong>Lic. Roberto Garza de la Peña</strong>
          Director de Producción y Montaje de Gradas<br>
          <em>Foto Panorámicas México</em>
        </div>
      </div>
      <div>
        <div class="signature-line">
          <strong>Claudia Méndez</strong>
          Coordinación de Colegios y Comités<br>
          <em>Tel: (55) 8492-3100</em>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProposalModal() {
  const modal = document.getElementById('proposal-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   EXECUTIVE ADMIN SUITE (STUDIO OS v3.4 DEMO DASHBOARD)
   ========================================================================= */
function initAdminSuite() {
  const modal = document.getElementById('admin-suite-modal');
  const btnOpenTop = document.getElementById('btn-open-admin-panel');
  const btnOpenNav = document.getElementById('nav-admin-btn');
  const btnOpenMobile = document.getElementById('mobile-drawer-admin-btn');
  const btnClose = document.getElementById('btn-close-admin-suite');
  const btnPublicView = document.getElementById('btn-demo-view-public');
  const btnReset = document.getElementById('btn-reset-demo-data');

  function openSuite() {
    updateAdminStats();
    renderCrmTable();
    renderAdminVaults();
    modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
    showToast('Abriendo libreta y agenda del estudio...', 'gold');
  }

  function closeSuite() {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  btnOpenTop?.addEventListener('click', openSuite);
  btnOpenNav?.addEventListener('click', openSuite);
  btnOpenMobile?.addEventListener('click', openSuite);
  btnClose?.addEventListener('click', closeSuite);

  btnPublicView?.addEventListener('click', () => {
    closeSuite();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btnReset?.addEventListener('click', () => {
    if (confirm('¿Deseas restablecer las notas de la agenda y las fotos demo a los valores de fábrica?')) {
      resetStudioDemoData();
    }
  });

  // Binder Tab Navigation (Friendly Tabs)
  const tabBtns = modal?.querySelectorAll('.binder-tab-btn, .admin-tab-btn');
  const tabPanels = modal?.querySelectorAll('.admin-tab-panel');

  tabBtns?.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels?.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Search & Filters in Agenda
  const searchInput = document.getElementById('crm-search-input');
  searchInput?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const activeFilterBtn = document.querySelector('.crm-filter-btn.active');
    const filter = activeFilterBtn?.getAttribute('data-filter') || 'all';
    renderCrmTable(filter, term);
  });

  const filterBtns = document.querySelectorAll('.crm-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      const term = searchInput?.value.toLowerCase() || '';
      renderCrmTable(filter, term);
    });
  });

  // Add Realistic Sample Quote Button
  const btnSample = document.getElementById('btn-admin-add-sample-quote');
  btnSample?.addEventListener('click', () => {
    const samples = [
      {
        school: 'Instituto Cumbres México',
        level: 'Bachillerato Anáhuac',
        students: '220 alumnos',
        city: 'Huixquilucan, EdoMex',
        name: 'Lic. Rodrigo Baillères',
        phone: '+52 (55) 3456-7890',
        note: 'Pidieron llevar muestras de marcos de caoba a la junta de directores y padres el próximo miércoles.'
      },
      {
        school: 'Colegio Madrid A.C.',
        level: 'Secundaria & Bachillerato',
        students: '160 alumnos',
        city: 'Tlalpan, CDMX',
        name: 'Mtra. Elena Gómez',
        phone: '+52 (55) 7654-3210',
        note: 'Requieren toma en cancha cívica con gradas de 6 niveles y togas institucionales en préstamo.'
      },
      {
        school: 'Universidad Panamericana',
        level: 'Facultad de Medicina',
        students: '190 alumnos',
        city: 'Mixcoac, CDMX',
        name: 'Dr. Emilio Zepeda',
        phone: '+52 (55) 9876-5432',
        note: 'Solicitan presupuesto membretado en PDF para someterlo a votación del comité de graduación.'
      }
    ];
    const picked = samples[Math.floor(Math.random() * samples.length)];

    const simulated = {
      id: `COT-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }),
      category: 'Escolar',
      schoolName: picked.school,
      level: picked.level,
      studentsCount: picked.students,
      eventDate: 'Mayo 2026',
      city: picked.city,
      contactName: picked.name,
      contactRole: 'Comité de Graduación',
      contactPhone: picked.phone,
      contactEmail: 'comite@colegio.edu.mx',
      services: ['Toma Panorámica de Honor', 'Retrato Individual de Toga', 'Cuadro de Caoba Artesanal'],
      notes: picked.note,
      status: 'Nueva',
      estimatedTotal: `$${(parseInt(picked.students) * 1250).toLocaleString('es-MX')} MXN`
    };

    saveStoredQuote(simulated);
    updateAdminStats();
    renderCrmTable();
    showToast(`¡Anotada nueva escuela: ${simulated.schoolName}!`, 'success');
  });

  // New Vault Modal Handling
  initNewVaultModal();
}

function updateAdminStats() {
  const quotes = getStoredQuotes();
  const sessions = getStoredSessions();

  const totalSchools = Object.keys(sessions).length;
  const newQuotesCount = quotes.filter(q => q.status === 'Nueva').length;

  const kpiSchools = document.getElementById('kpi-display-schools');
  if (kpiSchools) kpiSchools.textContent = `${totalSchools} Colegios`;

  const kpiQuotes = document.getElementById('kpi-display-quotes');
  if (kpiQuotes) kpiQuotes.textContent = `${quotes.length} Escuelas`;

  const kpiPendingSub = document.getElementById('kpi-subtext-quotes-pending');
  if (kpiPendingSub) kpiPendingSub.textContent = `${newQuotesCount} comités por contactar hoy`;

  const badgeCrm = document.getElementById('tab-badge-crm-count');
  if (badgeCrm) badgeCrm.textContent = quotes.length;

  const badgeVaults = document.getElementById('tab-badge-vaults-count');
  if (badgeVaults) badgeVaults.textContent = totalSchools;
}

function renderCrmTable(filter = 'all', searchTerm = '') {
  const container = document.getElementById('crm-cards-container');
  if (!container) return;

  let quotes = getStoredQuotes();

  if (filter !== 'all') {
    quotes = quotes.filter(q => q.status === filter);
  }

  if (searchTerm) {
    quotes = quotes.filter(q => {
      const full = `${q.id} ${q.schoolName} ${q.contactName} ${q.city} ${q.contactPhone}`.toLowerCase();
      return full.includes(searchTerm);
    });
  }

  if (quotes.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; background: #171310; border-radius: 16px; border: 1px dashed rgba(255,255,255,0.12);">
        <div style="font-size: 2.5rem; margin-bottom: 0.6rem;">📋</div>
        <h4 style="color: #fcf9f2; font-size: 1.15rem; margin-bottom: 0.35rem; font-family: var(--font-serif);">No hay solicitudes con ese filtro</h4>
        <p style="color: #a89d8d; font-size: 0.88rem; max-width: 440px; margin: 0 auto;">
          Intenta cambiar el término de búsqueda o haz clic en <strong>"+ Anotar Nueva Escuela"</strong> para agregar una.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = quotes.map(q => {
    let badgeClass = 'status-nueva';
    let badgeLabel = '🟡 Por llamar hoy';
    if (q.status === 'En Proceso') {
      badgeClass = 'status-proceso';
      badgeLabel = '🔵 En pláticas con el comité';
    } else if (q.status === 'Aprobada') {
      badgeClass = 'status-aprobada';
      badgeLabel = '🟢 Fecha confirmada';
    }

    const cleanPhone = (q.contactPhone || '').replace(/[^0-9]/g, '');
    const waText = encodeURIComponent(`Hola ${q.contactName}, le saluda el equipo de Foto Panorámicas México con respecto a la cotización ${q.id} para ${q.schoolName}. ¿Gusta que agendemos una visita con muestras físicas de marcos de caoba?`);

    return `
      <div class="school-request-card" data-id="${q.id}">
        <!-- Top header row -->
        <div class="request-card-header">
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.3rem;">
              <span class="request-folio-tag">${q.id}</span>
              <span class="request-date-tag">📅 Solicitud: ${q.date || 'Reciente'}</span>
            </div>
            <h4 class="request-school-name font-serif">${q.schoolName}</h4>
            <span class="request-school-sub">📍 ${q.city || 'Ciudad de México'} · Nivel: ${q.level || 'Escolar'}</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem;">
            <span class="status-pill-badge ${badgeClass}">${badgeLabel}</span>
            <span style="font-size: 0.84rem; color: var(--gold-vibrant); font-weight: 700; margin-top: 0.15rem;">Presupuesto: ${q.estimatedTotal || 'A convenir'}</span>
          </div>
        </div>

        <!-- 3 Structured human info columns -->
        <div class="request-card-grid">
          <div class="request-col">
            <span class="col-label">👤 Persona de Contacto</span>
            <span class="col-val">${q.contactName}</span>
            <span class="col-sub">${q.contactRole || 'Comité de Graduación'} · 📞 ${q.contactPhone}</span>
          </div>

          <div class="request-col">
            <span class="col-label">👥 Generación Escolar</span>
            <span class="col-val">${q.studentsCount || '150 alumnos'}</span>
            <span class="col-sub">🗓️ Fecha tentativa: ${q.eventDate || 'Mayo 2026'}</span>
          </div>

          <div class="request-col">
            <span class="col-label">🖼️ Paquete Solicitado</span>
            <span class="col-val">${(q.services && q.services[0]) || 'Panorámica en Gradas'}</span>
            <span class="col-sub">${(q.services && q.services.slice(1).join(', ')) || 'Enmarcado en Caoba'}</span>
          </div>
        </div>

        <!-- Workshop Handwritten Note -->
        <div class="request-card-note">
          <span style="font-weight: 700; color: #fff;">📝 Apunte del estudio:</span>
          <em>"${q.notes || 'Pendiente de acordar junta de presentación de muestras físicas de cuadros con directores.'}"</em>
        </div>

        <!-- Action Buttons Row -->
        <div class="request-card-actions">
          <a href="https://wa.me/${cleanPhone}?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-wa" title="Escribir por WhatsApp directo">
            <span>💬</span> <span>Escribir por WhatsApp</span>
          </a>

          <button type="button" class="btn-card-action btn-proposal btn-crm-proposal" data-id="${q.id}" title="Ver Presupuesto Formal con Hoja Membretada">
            <span>📄</span> <span>Ver Presupuesto en PDF</span>
          </button>

          <button type="button" class="btn-card-action btn-toggle-status btn-crm-status" data-id="${q.id}" title="Cambiar Estado">
            <span>🔄</span> <span>Cambiar Estado</span>
          </button>

          <button type="button" class="btn-card-action btn-delete-request btn-crm-delete" data-id="${q.id}" title="Eliminar registro">
            <span>✕</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach card action events
  container.querySelectorAll('.btn-crm-proposal').forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.getAttribute('data-id');
      const allQuotes = getStoredQuotes();
      const quote = allQuotes.find(q => q.id === qId);
      if (quote) openProposalModal(quote);
    });
  });

  container.querySelectorAll('.btn-crm-status').forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.getAttribute('data-id');
      const allQuotes = getStoredQuotes();
      const quote = allQuotes.find(q => q.id === qId);
      if (!quote) return;

      if (quote.status === 'Nueva') quote.status = 'En Proceso';
      else if (quote.status === 'En Proceso') quote.status = 'Aprobada';
      else quote.status = 'Nueva';

      updateStoredQuotesList(allQuotes);
      updateAdminStats();
      renderCrmTable(filter, searchTerm);
      showToast(`Estado de ${quote.schoolName}: ${quote.status}`, 'success');
    });
  });

  container.querySelectorAll('.btn-crm-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.getAttribute('data-id');
      if (confirm(`¿Eliminar la solicitud de ${qId}?`)) {
        let allQuotes = getStoredQuotes();
        allQuotes = allQuotes.filter(q => q.id !== qId);
        updateStoredQuotesList(allQuotes);
        updateAdminStats();
        renderCrmTable(filter, searchTerm);
        showToast('Solicitud eliminada de la agenda', 'gold');
      }
    });
  });
}

function renderAdminVaults() {
  const container = document.getElementById('admin-vaults-grid');
  if (!container) return;

  const sessions = getStoredSessions();
  const keys = Object.keys(sessions);

  container.innerHTML = keys.map(key => {
    const s = sessions[key];
    const coverImg = s.cover || s.photos[0]?.file || 'images/panoramic-graduation.jpg';
    return `
      <div class="vault-card-admin">
        <div class="vault-card-cover">
          <img src="${coverImg}" alt="${s.clientName}" loading="lazy">
          <div class="vault-pin-overlay">
            <span>🔑</span> <span>${s.id}</span>
          </div>
          <div class="vault-status-overlay">
            <span class="status-pill-badge status-aprobada">${s.status || 'Publicada'}</span>
          </div>
        </div>

        <div class="vault-card-body">
          <div class="vault-card-title">${s.clientName}</div>
          <div class="vault-card-desc">📸 ${s.sessionType}</div>

          <div class="vault-card-stats-row">
            <span>Fotos: <strong>${s.photos?.length || 4} HD</strong></span>
            <span>Fecha: <strong>${s.date}</strong></span>
            <span>Res: <strong>300 DPI</strong></span>
          </div>

          <div class="vault-card-actions">
            <button class="btn btn-gold btn-sm btn-vault-test-client" data-code="${s.id}" style="flex: 1; justify-content: center;">
              <span>👁️ Probar como Alumno</span>
            </button>
            <button class="btn btn-outline-gold btn-sm btn-vault-toggle-status" data-code="${s.id}" title="Cambiar Estado">
              <span>⚙️</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach events
  container.querySelectorAll('.btn-vault-test-client').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      // Close admin suite modal
      const modal = document.getElementById('admin-suite-modal');
      modal?.classList.remove('active');
      document.body.style.overflow = '';

      // Scroll to client portal section
      const portal = document.getElementById('portal-clientes');
      const pinInput = document.getElementById('portal-pin-input');
      if (pinInput && code) {
        pinInput.value = code;
        portal?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          loadClientSession(code);
        }, 350);
      }
    });
  });

  container.querySelectorAll('.btn-vault-toggle-status').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      const sessions = getStoredSessions();
      if (sessions[code]) {
        if (sessions[code].status.includes('Aprobada')) {
          sessions[code].status = 'En Retoque Digital & Laboratorio ⏳';
        } else {
          sessions[code].status = 'Galería Oficial Aprobada ✅';
        }
        saveStoredSessions(sessions);
        renderAdminVaults();
        showToast(`Estado de la bóveda ${code} actualizado`, 'success');
      }
    });
  });
}

function initNewVaultModal() {
  const modal = document.getElementById('modal-new-vault');
  const btnOpen = document.getElementById('btn-open-new-vault-modal');
  const btnClose = document.getElementById('btn-close-new-vault-modal');
  const btnCancel = document.getElementById('btn-cancel-new-vault');
  const form = document.getElementById('form-new-vault');

  btnOpen?.addEventListener('click', () => {
    modal?.classList.add('active');
  });

  function closeModal() {
    modal?.classList.remove('active');
    form?.reset();
  }

  btnClose?.addEventListener('click', closeModal);
  btnCancel?.addEventListener('click', closeModal);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('new-vault-name')?.value.trim();
    const rawCode = document.getElementById('new-vault-code')?.value.trim().toUpperCase();
    const category = document.getElementById('new-vault-category')?.value;
    const students = document.getElementById('new-vault-students')?.value || '200 alumnos';
    const status = document.getElementById('new-vault-status')?.value || 'Galería Oficial Aprobada ✅';

    if (!name || !rawCode) {
      showToast('Por favor completa el nombre y el código PIN', 'gold');
      return;
    }

    const sessions = getStoredSessions();

    sessions[rawCode] = {
      id: rawCode,
      clientName: name,
      sessionType: category,
      date: new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' }),
      status: status,
      resolution: 'Ultra-HD (300 DPI Imprimible)',
      totalPhotos: 4,
      cover: 'images/panoramic-graduation.jpg',
      photos: [
        { id: `${rawCode}-01`, title: 'Fotografía Panorámica Oficial', file: 'images/panoramic-graduation.jpg', specs: `Formato Panorámico · ${students}` },
        { id: `${rawCode}-02`, title: 'Retrato con Toga al Atardecer', file: 'images/graduation-solo.jpg', specs: '85mm f/1.4 · Iluminación Suave' },
        { id: `${rawCode}-03`, title: 'Celebración y Festejo en Campus', file: 'images/graduation-group.jpg', specs: '35mm f/2.0 · ISO 250' },
        { id: `${rawCode}-04`, title: 'Retrato Académico Individual', file: 'images/portrait-male.jpg', specs: '85mm f/1.8 · ISO 100' }
      ]
    };

    saveStoredSessions(sessions);
    updateAdminStats();
    renderAdminVaults();
    closeModal();
    showToast(`¡Bóveda ${rawCode} creada exitosamente! Ya está activa en el portal de alumnos.`, 'success');
  });
}

/* ==========================================================================
   Lightbox
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');

  closeBtn?.addEventListener('click', closeLightbox);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function openLightbox(src, title, specs) {
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const specsEl = document.getElementById('lightbox-specs');
  const downloadLink = document.getElementById('lightbox-download-link');

  if (!modal || !imgEl) return;

  imgEl.src = src;
  if (titleEl) titleEl.textContent = title;
  if (specsEl) specsEl.textContent = specs;
  if (downloadLink) {
    downloadLink.href = src;
    downloadLink.setAttribute('download', `FOTO_PANORAMICAS_PREMIUM_${Date.now()}.jpg`);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
