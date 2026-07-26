/*
 * Zentrale Einstellungen: Nur diese Werte auf allen Unterseiten pflegen.
 */
const SITE = {
  name: 'Luxus by Marc',
  whatsappNumber: '491636437385',
  bannerText: 'Uhrenspecial im Juli! Solange Angebot reicht – schreibt schnell via WhatsApp!',
  navigation: [
    ['Startseite', 'index.html'],
    ['Kleidung', 'kleidung.html'],
    ['Schuhe', 'schuhe.html'],
    ['Taschen', 'bag.html'],
    ['Uhren', 'uhren.html'],
    ['Trikots', 'trikot.html']
  ]
};

const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}`;
const currentPage = location.pathname.split('/').pop() || 'index.html';

document.head.insertAdjacentHTML('beforeend', `
  <style>
    :root { --site-header-height: 108px; }
    body { padding-top: var(--site-header-height); }
    .site-header { position: fixed; inset: 0 0 auto; z-index: 9999; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,.08); }
    .site-banner { overflow: hidden; background: #b30000; color: #fff; font-size: 1rem; padding: 10px 0; }
    .site-banner__text { display: inline-block; padding-left: 100%; white-space: nowrap; animation: site-scroll-left 15s linear infinite; }
    @keyframes site-scroll-left { to { transform: translateX(-100%); } }
    .site-nav { display: flex; justify-content: center; flex-wrap: wrap; gap: 4px 22px; padding: 11px 20px; }
    .site-nav a { color: #222; font-size: .9rem; font-weight: 600; text-decoration: none; }
    .site-nav a:hover, .site-nav a[aria-current='page'] { color: #b30000; }
    .site-whatsapp { position: fixed; right: 20px; bottom: 20px; z-index: 9998; background: #25d366; color: #fff; padding: 14px 22px; border-radius: 40px; box-shadow: 0 4px 10px rgba(0,0,0,.2); font-weight: bold; text-decoration: none; transition: .3s; }
    .site-whatsapp:hover { background: #1ebe5d; transform: scale(1.05); }
    .site-footer { padding: 40px 20px; text-align: center; background: #fff; }
    .site-footer p { margin: 8px 0; color: #555; }
    .site-footer a { color: #111; text-decoration: none; }
    @media (max-width: 620px) { :root { --site-header-height: 130px; } .site-nav { gap: 5px 13px; padding-block: 9px; } .site-whatsapp { right: 14px; bottom: 14px; padding: 12px 17px; } }
  </style>
`);

document.body.insertAdjacentHTML('afterbegin', `
  <header class="site-header">
    <div class="site-banner"><div class="site-banner__text">${SITE.bannerText}</div></div>
    <nav class="site-nav" aria-label="Hauptnavigation">
      ${SITE.navigation.map(([label, url]) => `<a href="${url}"${url === currentPage ? " aria-current=\"page\"" : ''}>${label}</a>`).join('')}
    </nav>
  </header>
`);

document.body.insertAdjacentHTML('beforeend', `
  <a class="site-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener" aria-label="WhatsApp Support öffnen">WhatsApp Support</a>
  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${SITE.name} – Alle Rechte vorbehalten</p>
    <p><a href="${whatsappUrl}" target="_blank" rel="noopener">Kontakt via WhatsApp</a></p>
  </footer>
`);
