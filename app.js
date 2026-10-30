(function () {
  "use strict";
  var C = window.WORKSHOP_CONFIG || {};
  var ROUTES = window.ROUTES || [];
  var REQ = window.REQUIRED_FIELDS || {};
  var params = new URLSearchParams(location.search);
  var preview = C.preview === true || params.get("preview") === "1";
  var V = C.venue || {};
  var DEST = encodeURIComponent(V.address || "");
  var LINKS = window.ROUTE_LINKS || {};

  function has(v) { return typeof v === "string" ? v.trim() !== "" : v != null; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function dirUrl(origin) {
    var u = "https://www.google.com/maps/dir/?api=1";
    if (origin) u += "&origin=" + encodeURIComponent(origin);
    return u + "&destination=" + DEST + "&travelmode=driving";
  }
  function satUrl() {
    return "https://www.google.com/maps/@?api=1&map_action=map&center=" + V.lat + "," + V.lng + "&zoom=18&basemap=satellite";
  }

  // Campos simples
  $all("[data-field]").forEach(function (el) {
    var k = el.getAttribute("data-field"), v = C[k];
    if (has(v)) { el.textContent = v; el.hidden = false; } else { el.textContent = ""; el.hidden = true; }
  });
  $all("[data-field-wrap]").forEach(function (el) { el.hidden = !has(C[el.getAttribute("data-field-wrap")]); });

  // Hero: título y organización
  if (has(C.workshopTitle)) { $("#hero-title").textContent = C.workshopTitle; }
  var org = [has(C.hostOrg) ? "Organiza: " + C.hostOrg : "", has(C.trainingCompany) ? "Adiestramiento por " + C.trainingCompany : ""].filter(has).join(" · ");
  if (org) { var ho = $("#hero-org"); ho.textContent = org; ho.hidden = false; }
  if (has(C.workshopTitle)) document.title = C.workshopTitle + " · Cómo llegar · Innovation Center";

  // Hero: fecha y hora
  var when = [C.date, C.arrivalTime ? "llegada " + C.arrivalTime : "", C.startTime ? "inicio " + C.startTime : ""].filter(has).join(" · ");
  if (when) { var hw = $("#hero-when"); hw.textContent = when; hw.hidden = false; }
  $("#horario").hidden = !(has(C.date) || has(C.startTime) || has(C.arrivalTime));
  if (has(C.arrivalTime) && has(C.startTime)) {
    var at = $("#arrival-tip");
    at.textContent = "Llega a las " + C.arrivalTime + " para estacionarte y registrarte en la entrada principal. El adiestramiento comienza puntualmente a las " + C.startTime.replace(/\.$/, "") + ".";
    at.hidden = false;
  }
  if (has(C.timeZoneLabel) && (has(C.startTime) || has(C.arrivalTime))) { var tz = $("#tz-note"); tz.textContent = "Horario en " + C.timeZoneLabel + "."; tz.hidden = false; }
  if (has(C.calendarFile) && has(C.date) && has(C.arrivalTime)) { var ics = $("#btn-ics"); ics.href = C.calendarFile; ics.hidden = false; }

  // Contacto
  var call = $("#btn-call"), mail = $("#btn-mail");
  if (has(C.phone)) {
    call.href = "tel:" + C.phone.replace(/[^\d+]/g, "");
    call.textContent = has(C.phoneDisplay) ? "Llamar al " + C.phoneDisplay : "Llamar";
    call.setAttribute("aria-label", "Llamar al " + (C.phoneDisplay || C.phone));
    call.hidden = false;
  }
  if (has(C.email)) {
    mail.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Taller de IA — consulta");
    mail.hidden = false;
  }
  var showContact = has(C.organizerName) || has(C.phone) || has(C.email);
  $all('[data-requires="contact"]').forEach(function (el) { el.hidden = !showContact; });

  // Botones de mapa
  ["#btn-here", "#btn-here-2"].forEach(function (s) { $(s).href = LINKS.currentLocation || dirUrl(null); });
  $("#btn-satellite").href = LINKS.satellite || satUrl();

  // Estacionamiento
  $("#parking-pending").hidden = has(C.parkingInfo);
  var lots = has(C.parkingInfo) ? (C.parkingLots || []) : [];
  if (lots.length) {
    var ol = $("#parking-lots");
    lots.forEach(function (t) { var li = document.createElement("li"); li.textContent = t; ol.appendChild(li); });
    ol.hidden = false;
  }
  var PI = C.parkingImage;
  if (has(C.parkingInfo) && PI && has(PI.attribution) && has(PI.alt)) {
    var img = $("#parking-img");
    $("#parking-webp").setAttribute("srcset", PI.base800 + ".webp 800w, " + PI.base1600 + ".webp 1600w");
    $("#parking-webp").setAttribute("sizes", "(min-width: 1080px) 1040px, 100vw");
    img.src = PI.base800 + ".jpg";
    img.srcset = PI.base800 + ".jpg 800w, " + PI.base1600 + ".jpg 1600w";
    img.sizes = "(min-width: 1080px) 1040px, 100vw";
    img.width = PI.width; img.height = PI.height; img.alt = PI.alt;
    $("#parking-full").href = PI.base1600 + ".jpg";
    $("#parking-full").setAttribute("aria-label", "Ver en tamaño completo: " + PI.alt);
    $("#parking-attr").textContent = PI.attribution;
    $("#parking-credit").textContent = (PI.credit || "") + " Toca la imagen para verla en tamaño completo.";
    $("#parking-figure").hidden = false;
  }
  if (preview) {
    var ul = $("#parking-findings");
    (C.parkingFindingsPreview || []).forEach(function (t) { var li = document.createElement("li"); li.textContent = t; ul.appendChild(li); });
    $("#parking-preview").hidden = !ul.children.length;
  }

  // Tarjetas de rutas
  var wrap = $("#route-cards");
  ROUTES.forEach(function (r, i) {
    var art = document.createElement("article");
    art.className = "card";
    art.setAttribute("aria-labelledby", "r-" + r.id);
    var top = document.createElement("div"); top.className = "card-top";
    top.innerHTML = '<span class="card-num" aria-hidden="true">' + (i + 1) + '</span><h3 id="r-' + r.id + '"></h3>';
    top.querySelector("h3").textContent = r.title;
    art.appendChild(top);
    function p(cls, text) { var el = document.createElement("p"); el.className = cls; el.textContent = text; art.appendChild(el); return el; }
    if (r.draft && preview) { var b = document.createElement("span"); b.className = "badge"; b.textContent = "BORRADOR INTERNO — sin verificar"; art.appendChild(b); }
    p("card-desc", (r.draft && !preview) ? "Google Maps te guiará con el tráfico del momento hasta el Fideicomiso." : r.summary);
    if (has(r.attendeeNote)) p("card-note", r.attendeeNote);
    if (preview && has(r.previewNote)) p("preview-note", "Vista previa: " + r.previewNote);
    if (preview && has(r.estimate)) p("preview-note card-meta", "Vista previa: " + r.estimate + ". No mostrar como tiempo de viaje.");
    var a = document.createElement("a");
    a.className = "btn btn-primary"; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = 'Abrir en Google Maps <span class="arrow" aria-hidden="true">↗</span>';
    a.href = r.mapsUrl || dirUrl(r.origin);
    a.setAttribute("aria-label", "Abrir en Google Maps la ruta " + r.title.toLowerCase());
    a.setAttribute("data-route", r.id);
    art.appendChild(a);
    if (preview && has(r.corridorUrl)) {
      var c = document.createElement("a");
      c.className = "card-corridor"; c.target = "_blank"; c.rel = "noopener"; c.href = r.corridorUrl;
      c.textContent = "Vista previa: " + (r.corridorLabel || "corredor sugerido") + " (con parada intermedia) ↗";
      art.appendChild(c);
    }
    wrap.appendChild(art);
  });

  // Video: YouTube (youtube-nocookie) > MP4 > póster
  var video = $("#route-video"), fb = $("#video-fallback");
  var src = C.useSampleVideo ? C.sampleVideoSrc : C.videoSrc;
  function fallback() { video.hidden = true; video.removeAttribute("src"); fb.hidden = false; }
  var ytId = has(C.youtubeId) && /^[A-Za-z0-9_-]{6,20}$/.test(C.youtubeId) ? C.youtubeId : "";
  if (ytId) {
    video.remove();
    var ifr = document.createElement("iframe");
    ifr.src = "https://www.youtube-nocookie.com/embed/" + ytId + "?rel=0&playsinline=1";
    ifr.title = "Video: las cinco rutas hacia el Innovation Center";
    ifr.loading = "lazy";
    ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    ifr.referrerPolicy = "strict-origin-when-cross-origin";
    ifr.allowFullscreen = true;
    ifr.id = "route-iframe";
    $("#video-frame").insertBefore(ifr, fb);
    $("#video-alt-link").href = "https://www.youtube.com/watch?v=" + ytId;
    $("#video-alt").hidden = false;
    if (has(C.videoSrc)) { $("#video-dl-link").href = C.videoSrc; if (has(C.videoDownloadLabel)) $("#video-dl-link").textContent = C.videoDownloadLabel; $("#video-dl").hidden = false; }
  } else {
    if (has(C.posterSrc)) video.poster = C.posterSrc;
    video.addEventListener("error", fallback);
    if (has(src)) { video.src = src; } else { fallback(); }
  }

  // Banner de vista previa
  if (preview) {
    var missing = Object.keys(REQ).filter(function (k) { return !has(C[k]); }).map(function (k) { return REQ[k]; });
    var extra = [];
    if (C.useSampleVideo) extra.push("video final (se muestra un MP4 de prueba)");
    if (ROUTES.some(function (r) { return r.draft; })) extra.push("rutas verificadas (descripciones en borrador)");
    var list = missing.concat(extra);
    if (list.length) {
      $("#preview-missing").textContent = "Pendiente: " + list.join(" · ");
      $("#preview-banner").hidden = false;
      document.body.classList.add("preview-on");
    }
    if (C.useSampleVideo) { var vn = $("#video-note"); vn.textContent = "Prueba: video de muestra CC0 (MDN «flower.mp4»), no es la animación final."; vn.hidden = false; }
  }
})();
