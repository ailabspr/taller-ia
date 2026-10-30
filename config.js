/* ==========================================================================
   DATOS DEL EVENTO — único bloque de configuración.
   - Deja un valor en "" (cadena vacía) si no está confirmado: la página lo
     ocultará a los asistentes y lo listará en el banner de vista previa.
   - Las rutas (bloque ROUTES) se generan desde ../routes.json con scripts/merge_routes.py.
   ========================================================================== */
window.WORKSHOP_CONFIG = {
  preview: false,               // true = muestra el banner "VISTA PREVIA PRIVADA"; también ?preview=1
  useSampleVideo: false,        // PRUEBA: true = usa un MP4 de muestra CC0 en lugar del video final
  youtubeId: "",                // ID de YouTube (no listado) del video final. Si se llena, tiene prioridad; el MP4 queda como descarga. Vacío = MP4 propio.
  sampleVideoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  videoSrc: "assets/AI_Workshop_Five_Routes.mp4",
  posterSrc: "assets/video-poster-1280.jpg",
  videoDownloadLabel: "Descargar el video (MP4, 12,5 MB)",

  // --- Datos del evento. CONFIRMADOS por el organizador (30 oct 2026) donde hay valor;
  //     vacío = sin confirmar → oculto para asistentes y listado en el banner de vista previa.
  workshopTitle: "IA responsable y Copilot",
  hostOrg: "InnCapital Housing",
  trainingCompany: "PRPS",
  date: "martes, 3 de noviembre de 2026",   // verificado: 2026-11-03 es martes
  dateISO: "2026-11-03",
  startTime: "8:30 a. m.",      // hora de Puerto Rico; comienza puntualmente
  arrivalTime: "8:00 a. m.",    // llegada y registro recomendados
  timeZoneLabel: "hora de Puerto Rico",
  calendarFile: "assets/evento.ics",
  organizerName: "Eraida Sanchez",
  phone: "+19397177063",        // E.164
  phoneDisplay: "(939) 717-7063",
  email: "",                    // no aplica (el organizador no tiene correo de contacto): se oculta
  accessibilityInfo: "",        // espacios accesibles, puerta, ascensor — SIN CONFIRMAR

  // Estacionamiento — CONFIRMADO por el organizador: autorizado, sin costo, tres áreas (imagen anotada del organizador).
  parkingInfo: "El estacionamiento es gratuito. Puedes usar cualquiera de estas tres áreas:",
  parkingLots: [
    "Junto al edificio del Fideicomiso, hacia el este, a lo largo de la vía de acceso.",
    "El estacionamiento grande al sur del edificio, cerca del Paseo de las Ciencias.",
    "Un área pequeña al oeste, junto al edificio de Parallel18."
  ],
  gateInstruction: "En la entrada principal, indica que vienes a un adiestramiento.",
  parkingImage: {
    base800: "assets/parking-lots-800", base1600: "assets/parking-lots-1600",   // .webp + .jpg
    width: 1600, height: 846,
    alt: "Vista satelital del campus del Fideicomiso con tres áreas de estacionamiento marcadas en rojo: una al este del edificio del Fideicomiso, a lo largo de la vía de acceso; otra grande al sur del edificio, cerca del Paseo de las Ciencias; y una pequeña al oeste, junto al edificio de Parallel18.",
    attribution: "Imágenes ©2026 Airbus, CNES / Airbus, Maxar Technologies, Datos del mapa ©2026 Google",
    credit: "Captura de Google Maps con anotaciones del organizador."
  },

  // Notas internas de estacionamiento (solo vista previa)
  parkingFindingsPreview: [
    "Confirmado por el organizador (30 oct 2026): estacionamiento autorizado, sin costo, en las tres áreas marcadas en su imagen.",
    "Sin confirmar: espacios accesibles, puerta de entrada al edificio y ascensor al segundo piso.",
    "Imagen: captura de Google Maps (satélite) anotada por el organizador; la captura no traía la barra de atribución, así que se añadió la que muestra Google Maps hoy para esta zona."
  ],

  // --- Sede (verificada con https://prsciencetrust.org/instalaciones/) ---
  venue: {
    name: "Puerto Rico Science, Technology & Research Trust",
    building: "Innovation Center",
    floor: "Segundo piso",
    room: "Salón de Entrenamiento T2",
    address: "105 Carr. #21, Km. 0.8, Bo. Monacillo, San Juan, PR 00927",
    // Coordenadas del pin de Google Maps (resuelto desde https://maps.app.goo.gl/Mjyy23D6jSqvevh99)
    lat: 18.3900462,
    lng: -66.06806
  }
};

/* Campos obligatorios para la versión pública (etiquetas para el banner). */
window.REQUIRED_FIELDS = {
  workshopTitle: "Título del taller",
  date: "Fecha",
  startTime: "Hora de inicio",
  arrivalTime: "Hora de llegada recomendada",
  organizerName: "Nombre del contacto",
  phone: "Teléfono del contacto",
  parkingInfo: "Estacionamiento autorizado",
  accessibilityInfo: "Accesibilidad (espacios accesibles, puerta, ascensor)"
};

/* ROUTES:BEGIN — generado por scripts/merge_routes.py desde routes.json (v3.0, 2026-10-30). No editar a mano. */
window.ROUTES = [
  {
    "id": "route-1",
    "title": "Desde Bayamón",
    "origin": "Bayamón, Puerto Rico",
    "summary": "Desde Bayamón, toma el Expreso Río Hondo (PR-5) hacia el norte y entra a la Autopista José de Diego (PR-22) en dirección Este hacia San Juan. Sal hacia el Expreso Las Américas (PR-18) Sur, rumbo a Río Piedras/Caguas, y luego toma la salida hacia la PR-21 Este (Río Piedras/Cupey), en el área de Centro Médico. En la PR-21 (Av. Ing. José \"Kiko\" Custodio), gira a la derecha en el semáforo del Paseo de las Ciencias para entrar al Fideicomiso.",
    "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Bayam%C3%B3n%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving",
    "corridorUrl": "https://www.google.com/maps/dir/?api=1&origin=Bayam%C3%B3n%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving&waypoints=18.406735%2C-66.069984",
    "corridorLabel": "Corredor PR-22 → PR-18",
    "attendeeNote": "Google Maps puede sugerir otra vía según el tráfico; sigue la que te indique.",
    "previewNote": null,
    "status": "corrected-partially",
    "estimate": "Aprox. 16,09 km · ~16 min sin tráfico (OSRM, datos OSM)",
    "draft": false
  },
  {
    "id": "route-2",
    "title": "Desde Caguas",
    "origin": "Caguas, Puerto Rico",
    "summary": "Desde Caguas, sal por la PR-1 hacia el norte y entra a la Autopista Luis A. Ferré (PR-52) en dirección Norte hacia San Juan. Toma la salida hacia la PR-1 Este (Río Piedras/Carolina/Trujillo Alto) y sigue por la Carretera Central (PR-1) hasta la PR-21 (Av. Ing. José \"Kiko\" Custodio). Toma la PR-21 en dirección oeste y gira a la izquierda en el semáforo del Paseo de las Ciencias para entrar al Fideicomiso.",
    "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Caguas%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving",
    "corridorUrl": null,
    "corridorLabel": null,
    "attendeeNote": null,
    "previewNote": null,
    "status": "confirmed",
    "estimate": "Aprox. 21,88 km · ~19 min sin tráfico (OSRM, datos OSM)",
    "draft": false
  },
  {
    "id": "route-3",
    "title": "Desde Carolina",
    "origin": "Carolina, Puerto Rico",
    "summary": "Desde el centro de Carolina, toma la Avenida 65 de Infantería (PR-3) en dirección oeste hacia Río Piedras. La avenida continúa como Carretera Central (PR-1); poco después de pasar la entrada del Jardín Botánico, toma a la derecha la PR-21 (Av. Ing. José \"Kiko\" Custodio). En el semáforo del Paseo de las Ciencias, gira a la izquierda para entrar al Fideicomiso.",
    "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Carolina%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving",
    "corridorUrl": null,
    "corridorLabel": null,
    "attendeeNote": "Si sales de Isla Verde o del área del aeropuerto, deja que Google Maps elija la ruta.",
    "previewNote": "Corredor corregido: el PR-26 sugerido no conviene desde el centro de Carolina; ruta verificada Av. 65 de Infantería (PR-3) → PR-1 → PR-21.",
    "status": "corrected",
    "estimate": "Aprox. 13,0 km · ~14 min sin tráfico (OSRM, datos OSM)",
    "draft": false
  },
  {
    "id": "route-4",
    "title": "Desde Guaynabo",
    "origin": "Guaynabo, Puerto Rico",
    "summary": "Desde el centro de Guaynabo, toma la Av. Gobernador Carlos Romero Barceló (PR-199) y entra al Expreso Martínez Nadal (PR-20) en dirección Norte. Sal hacia la PR-21/Río Piedras por la Avenida Rafael Martínez Nadal y continúa por la PR-21 en dirección este, pasando el área del Hospital de Veteranos. En el semáforo del Paseo de las Ciencias, gira a la derecha para entrar al Fideicomiso.",
    "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=Guaynabo%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving",
    "corridorUrl": "https://www.google.com/maps/dir/?api=1&origin=Guaynabo%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving&waypoints=18.367313%2C-66.109257",
    "corridorLabel": "Corredor PR-20 (Expreso Martínez Nadal)",
    "attendeeNote": "Google Maps puede sugerir otra vía según el tráfico; sigue la que te indique.",
    "previewNote": null,
    "status": "confirmed-as-alternative",
    "estimate": "Aprox. 8,46 km · ~10 min sin tráfico (OSRM, datos OSM)",
    "draft": false
  },
  {
    "id": "route-5",
    "title": "Desde Río Piedras",
    "origin": "Río Piedras, San Juan, Puerto Rico",
    "summary": "Desde el centro de Río Piedras, toma la Avenida 65 de Infantería (PR-3) en dirección oeste; la vía continúa como Carretera Central (PR-1) hacia el sur. Poco después de pasar la entrada del Jardín Botánico, toma a la derecha la PR-21 (Av. Ing. José \"Kiko\" Custodio) y, en el semáforo del Paseo de las Ciencias, gira a la izquierda para entrar al Fideicomiso.",
    "mapsUrl": "https://www.google.com/maps/dir/?api=1&origin=R%C3%ADo%20Piedras%2C%20San%20Juan%2C%20Puerto%20Rico&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving",
    "corridorUrl": null,
    "corridorLabel": null,
    "attendeeNote": null,
    "previewNote": null,
    "status": "confirmed",
    "estimate": "Aprox. 2,94 km · ~4 min sin tráfico (OSRM, datos OSM)",
    "draft": false
  }
];
window.ROUTE_LINKS = {
  "currentLocation": "https://www.google.com/maps/dir/?api=1&destination=18.3900462%2C-66.06806&destination_place_id=ChIJLaxxqGdoA4wRxRigJ25Xvf0&travelmode=driving",
  "satellite": "https://www.google.com/maps/@?api=1&map_action=map&center=18.3900462%2C-66.06806&zoom=18&basemap=satellite"
};
window.ROUTE_ATTRIBUTION = "Route geometry © OpenStreetMap contributors (ODbL 1.0), computed with OSRM. Google Maps links open Google Maps; no Google imagery is reproduced.";
/* ROUTES:END */
