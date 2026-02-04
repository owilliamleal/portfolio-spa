/**
 * PORTFOLIO MAIN LOGIC
 * ====================
 * Consolidated Logic for Theme, Language, Gallery, Modals, and Interactions.
 */

const state = {
    lang: 'en', // Default
    theme: 'dark'
};

/* --- 1. CONFIGURATION --- */

// Translation Dictionary
const translations = {
    pt: {
        nav_home: "Início", nav_portfolio: "Portfólio", nav_about: "Sobre", nav_services: "Serviços", nav_contact: "Contato", nav_clients: "Clientes",
        hero_title: "Serviços que valorizam seu tempo", hero_subtitle: "Edições que valorizam seus projetos", hero_cta: "Ver serviços", services_cta: "Faça seu orçamento",
        section_portfolio: "Portfólio", section_about: "Quem Sou",
        project_1_title: "Edição de vídeo", project_1_desc: "Shorts & Reels", project_2_title: "Identidade Visual", project_3_title: "Social Media",
        project_4_title: "Logo marcas", project_5_title: "Web sites", project_6_title: "Ilustrações",
        about_text_1: "Transformar ideias em visuais tem sido minha motivação desde os 12 anos. Em 2022, migrei da arquitetura para abraçar de vez a produção audiovisual e o web design.",
        about_text_2: "Meu foco é construir conexões autênticas através de conteúdo estratégico e interfaces digitais memoráveis.",
        cta_title: "Vamos criar algo incrível juntos?", section_services: "Serviços",
        service_1: "<strong>Edição de vídeo:</strong> Vídeos para YouTube, redes sociais e corporativos. Produção de vinhetas, transições e assets animados em vídeo.",
        service_2: "<strong>Design & Web:</strong> Identidade visual, logomarcas, design para interfaces e websites.",
        service_3: "<strong>Social Media:</strong> Produção de conteúdo estratégico para redes sociais e gerenciamento de perfis.",
        service_4: "<strong>Ilustrações para:</strong> Livros, estampas, stickers e arte digital."
    },
    en: {
        nav_home: "Home", nav_portfolio: "Portfolio", nav_about: "About", nav_services: "Services", nav_contact: "Contact", nav_clients: "Clients",
        hero_title: "Services that value your time", hero_subtitle: "Edits that value your projects", hero_cta: "View Services", services_cta: "Get a Quote",
        section_portfolio: "Portfolio", section_about: "About Me",
        project_1_title: "Video Editing", project_1_desc: "Shorts & Reels", project_2_title: "Visual Identity", project_3_title: "Social Media",
        project_4_title: "Logos", project_5_title: "Websites", project_6_title: "Illustrations",
        about_text_1: "Turning ideas into visuals has been my drive since age 12. In 2022, I moved from architecture to fully embrace media production and web design.",
        about_text_2: "I focus on building authentic connections through strategic content and memorable digital interfaces.",
        cta_title: "Let's create something amazing together?", section_services: "Services",
        service_1: "<strong>Video Editing:</strong> Videos for YouTube, social media and corporate. Production of vignettes, transitions and animated video assets.",
        service_2: "<strong>Design & Web:</strong> Visual identity, logos, interface design and websites.",
        service_3: "<strong>Social Media:</strong> Strategic content production for social networks and profile management.",
        service_4: "<strong>Illustrations for:</strong> Books, prints, stickers and digital art."
    },
    es: {
        nav_home: "Inicio", nav_portfolio: "Portafolio", nav_about: "Sobre Mí", nav_services: "Servicios", nav_contact: "Contacto", nav_clients: "Clientes",
        hero_title: "Servicios que valoran tu tiempo", hero_subtitle: "Ediciones que valoran tus proyectos", hero_cta: "Ver Servicios", services_cta: "Solicitar Presupuesto",
        section_portfolio: "Portafolio", section_about: "Sobre Mí",
        project_1_title: "Edición de Vídeo", project_1_desc: "Shorts & Reels", project_2_title: "Identidad Visual", project_3_title: "Redes Sociales",
        project_4_title: "Logotipos", project_5_title: "Sitios Web", project_6_title: "Ilustraciones",
        about_text_1: "Convertir ideas en imágenes ha sido mi motivación desde los 12 años. En 2022, pasé de la arquitectura a dedicarme plenamente a la producción audiovisual y el diseño web.",
        about_text_2: "Me enfoco en construir conexiones auténticas a través de contenido estratégico e interfaces digitales memorables.",
        cta_title: "¿Creamos algo increíble juntos?", section_services: "Servicios",
        service_1: "<strong>Edición de Video:</strong> Videos para YouTube, redes sociales y corporativos. Producción de viñetas, transições y recursos animados en video.",
        service_2: "<strong>Diseño y Web:</strong> Identidad visual, logotipos, diseño de interfaces y sitios web.",
        service_3: "<strong>Redes Sociales:</strong> Producción de contenido estratégico para redes sociales y gestión de perfiles.",
        service_4: "<strong>Ilustraciones para:</strong> Libros, estampados, pegatinas y arte digital."
    }
};

// Gallery Configuration
const galleryConfig = {
    proj2: {
        type: 'grouped', basePath: 'assets/visual_id/',
        groups: [
            { folder: 'Karati', name: 'Karati', count: 12 },
            { folder: 'Senna', name: 'Senna Ayrton', files: ['1_Capa.webp', '2_Descritivo.webp', '3_Persona.webp', '4_Cores.webp', '5_Logo.webp', '6_Logo.webp', '7_Logo.webp', '8_Logo.webp', '9_Logo.webp', '10_Logo.webp', '11_Fonte.webp', '12_Fonte.webp', '13_icones.webp', '14_Texturas.webp', '15_Cartão.webp', '16_thumbnail.webp', '17_Impressos.webp', '18_Impressos.webp', '19_outdoor.webp', '20_Site layout.webp'] },
            { folder: 'Sonho_doce', name: 'Sonho Doce', count: 11 },
            { folder: 'Teacher_Mary', name: 'Teacher Mary', files: ['1_Capa.webp', '2_Moodboard.webp', '3_Cores.webp', '4_Fonte_1.webp', '5_fonte_2.webp', '6_fonte_3.webp', '7_Texturas.webp', '8_icones.webp', '9_Carrossel.webp', '10_Carrossel.webp'] }
        ]
    },
    social: {
        type: 'grouped', basePath: 'assets/social_media/',
        groups: [
            { folder: 'Carrossel_English_Library', name: 'English Library', count: 7 },
            { folder: 'Carrossel_Estratégias_para_ler_em_Inglês', name: 'Estratégias Inglês', count: 8 },
            { folder: 'Carrossel_Luiza', name: 'Carrossel Luiza', count: 9 },
            {
                folder: 'Sindico_Instagram', name: 'Sindico Instagram',
                files: [
                    'Carrossel_1/1.webp', 'Carrossel_1/2.webp', 'Carrossel_1/3.webp',
                    'Carrossel_2/4.webp', 'Carrossel_2/5.webp', 'Carrossel_2/6.webp', 'Carrossel_2/7.webp',
                    'Carrossel_3/8.webp', 'Carrossel_3/9.webp', 'Carrossel_3/10.webp',
                    'Carrossel_4/11.webp', 'Carrossel_4/12.webp', 'Carrossel_4/13.webp',
                    'Carrossel_5/14.webp', 'Carrossel_5/15.webp', 'Carrossel_5/16.webp',
                    'Carrossel_6/17.webp', 'Carrossel_6/18.webp', 'Carrossel_6/19.webp',
                    'Carrossel_7/20.webp', 'Carrossel_7/21.webp',
                    'Carrossel_8/22.webp', 'Carrossel_8/23.webp',
                    'Carrossel_9/24.webp', 'Carrossel_9/25.webp',
                    'Carrossel_10/26.webp', 'Carrossel_10/27.webp', 'Carrossel_10/28.webp'
                ]
            }
        ]
    },
    proj4: { type: 'flat', basePath: 'assets/logo_marca/', files: ['logo_bella.webp', 'logo_cristhiane_diniz.webp', 'logo_de_loja_de_roupas_nerd.webp', 'logo_elo_perdido.webp', 'logo_luiza.webp', 'logo_minimalista.webp', 'logo_sorveteria.webp', 'logo_vk.webp'] },
    proj5: { type: 'flat', basePath: 'assets/web_site/', files: [] },
    proj6: { type: 'flat', basePath: 'assets/art/', files: ['Back_to_black.webp', 'Dino_Punk.webp', 'Pizza.webp', 'Surreal.webp'] }
};

// Contact Apps
const apps = {
    whatsapp: { color: '#25D366', iconPath: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', link: 'https://wa.me/5531989566719' },
    telegram: { color: '#0088cc', iconPath: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', link: 'https://t.me/+5531989566719' },
    messenger: { color: '#00B2FF', iconPath: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', link: 'https://www.facebook.com/profile.php?id=61577000556529' }
};

/* --- 2. INITIALIZATION --- */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initGlobalEvents();
    initFab();
    initLightbox();
});

/* --- 3. THEME & LANGUAGE --- */

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(themeName) {
    state.theme = themeName;
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);

    // Toggle Icon visibility
    const sun = document.querySelector('.sun-icon');
    const moon = document.querySelector('.moon-icon');
    if (sun && moon) {
        sun.style.display = themeName === 'dark' ? 'block' : 'none';
        moon.style.display = themeName === 'dark' ? 'none' : 'block';
    }
}

function initLanguage() {
    const path = window.location.pathname;
    if (path.includes('/pt/')) state.lang = 'pt';
    else if (path.includes('/es/')) state.lang = 'es';
    else state.lang = 'en';

    updateTexts();
}

function cycleLanguage() {
    const path = window.location.pathname;
    let target = '';

    // Pattern: pt -> root(en) -> es -> pt
    if (path.includes('/pt/')) target = path.replace('/pt/', '/');
    else if (path.includes('/es/')) target = path.replace('/es/', '/pt/');
    else {
        // From root/en to es
        if (path.endsWith('index.html')) target = path.replace('index.html', 'es/');
        else if (path.endsWith('/')) target = path + 'es/';
        else target = '/portfolio-spa/es/';
    }
    window.location.href = target;
}

function updateTexts() {
    const elLang = document.getElementById('current-lang');
    if (elLang) elLang.textContent = state.lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[state.lang][key]) {
            // Handle HTML content
            if (translations[state.lang][key].includes('<')) el.innerHTML = translations[state.lang][key];
            else el.textContent = translations[state.lang][key];
        }
    });
}

/* --- 4. EVENTS --- */

function initGlobalEvents() {
    // Theme Toggle
    document.getElementById('theme-toggle')?.addEventListener('click', () => setTheme(state.theme === 'light' ? 'dark' : 'light'));

    // Language Toggle
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', cycleLanguage);
        // Instant Hover Prefetching
        langBtn.addEventListener('mouseenter', () => {
            // Simplified prefetch logic
            // (Implementation omitted for brevity, browser handles caching well usually)
        });
    }

    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    menuBtn?.addEventListener('click', () => {
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }));

    // Modal Close
    document.querySelector('.close-modal')?.addEventListener('click', closeModal);
    document.getElementById('project-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') closeModal();
    });
}

/* --- 5. MODAL & GALLERY --- */

window.openModal = function (projectId, titleOverride) {
    const modal = document.getElementById('project-modal');
    const viewer = document.getElementById('modal-viewer-container');
    const strip = document.querySelector('.modal-gallery-strip');

    if (!modal || !viewer) return;

    viewer.innerHTML = '';
    if (strip) strip.innerHTML = '';

    if (projectId === 'video1') loadVideoGallery(viewer, strip);
    else if (galleryConfig[projectId]) loadGallery(projectId, viewer, strip);
    else {
        viewer.innerHTML = `<div style="padding:20px;"><h2>${titleOverride || 'Project'}</h2><p>Coming Soon.</p></div>`;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Stop Videos
    const viewer = document.getElementById('modal-viewer-container');
    viewer.querySelectorAll('iframe').forEach(i => i.src = "");
}

function loadVideoGallery(viewer, strip) {
    const videos = ['RU0mPGnfS4U', 'Y5m-z7qSNIU', 'dyZXPyF0vu0', 'uLuh6t96QmY'];

    viewer.innerHTML = `<div class="video-container-vertical"><iframe id="main-iframe" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;

    videos.forEach((vid, idx) => {
        const btn = document.createElement('button');
        btn.className = 'strip-thumb';
        btn.style.backgroundImage = `url('https://img.youtube.com/vi/${vid}/hqdefault.jpg')`;
        btn.onclick = () => {
            document.getElementById('main-iframe').src = `https://www.youtube.com/embed/${vid}?autoplay=1`;
            document.querySelectorAll('.strip-thumb').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        if (strip) strip.appendChild(btn);
        if (idx === 0) btn.click();
    });
}

function loadGallery(pid, viewer, strip) {
    const config = galleryConfig[pid];
    const pathPrefix = (window.location.pathname.includes('/pt/') || window.location.pathname.includes('/es/')) ? '../' : '';

    if (config.type === 'grouped') {
        config.groups.forEach((g, idx) => {
            const btn = document.createElement('button');
            btn.className = 'gallery-sidebar-item';
            const thumb = (g.files && g.files.length) ? g.files[0] : '1.webp';
            btn.style.backgroundImage = `url('${pathPrefix}${config.basePath}${g.folder}/${thumb}')`;
            btn.onclick = () => {
                loadGroupImages(pid, idx, pathPrefix, viewer);
                document.querySelectorAll('.gallery-sidebar-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            };
            if (strip) strip.appendChild(btn);
        });
        if (strip && strip.firstElementChild) strip.firstElementChild.click();
    } else {
        if (strip) strip.style.display = 'none';
        viewer.innerHTML = `<div class="gallery-grid">${generateImagesHtml(pathPrefix + config.basePath, config)}</div>`;
    }
}

function loadGroupImages(pid, grpIdx, prefix, viewer) {
    const grp = galleryConfig[pid].groups[grpIdx];
    const basePath = `${prefix}${galleryConfig[pid].basePath}${grp.folder}/`;
    viewer.innerHTML = `<div class="gallery-grid">${generateImagesHtml(basePath, grp)}</div>`;
}

function generateImagesHtml(path, sourceSrc) {
    let html = '';
    if (sourceSrc.files) {
        sourceSrc.files.forEach(f => html += `<img src="${path}${f}" class="gallery-img" loading="lazy">`);
    } else if (sourceSrc.count) {
        for (let i = 1; i <= sourceSrc.count; i++) html += `<img src="${path}${i}.webp" class="gallery-img" loading="lazy">`;
    }
    return html;
}

/* --- 6. LIGHTBOX --- */
let lbState = { imgs: [], curr: 0 };

function initLightbox() {
    const lb = document.getElementById('lightbox');
    const viewer = document.getElementById('modal-viewer-container');

    if (!lb) return;

    // Open (Delegation)
    viewer?.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('gallery-img')) {
            e.stopPropagation();
            const all = Array.from(viewer.querySelectorAll('.gallery-img'));
            lbState.imgs = all.map(i => i.src);
            lbState.curr = all.indexOf(e.target);
            openLightbox();
        }
    });

    // Close
    lb.querySelector('.close-lightbox')?.addEventListener('click', closeLightbox);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

    // Nav
    document.getElementById('lb-prev')?.addEventListener('click', (e) => { e.stopPropagation(); navLb(-1); });
    document.getElementById('lb-next')?.addEventListener('click', (e) => { e.stopPropagation(); navLb(1); });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navLb(-1);
        if (e.key === 'ArrowRight') navLb(1);
    });
}

function openLightbox() {
    const lb = document.getElementById('lightbox');
    updateLbImage();
    lb.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function navLb(dir) {
    lbState.curr += dir;
    if (lbState.curr < 0) lbState.curr = lbState.imgs.length - 1;
    if (lbState.curr >= lbState.imgs.length) lbState.curr = 0;
    updateLbImage();
}

function updateLbImage() {
    const img = document.getElementById('lightbox-img');
    img.src = lbState.imgs[lbState.curr];
}

/* --- 7. FAB --- */
function initFab() {
    const saved = localStorage.getItem('contactApp') || 'whatsapp';
    setFab(saved);

    const trigger = document.getElementById('fab-trigger');
    const menu = document.getElementById('fab-menu');

    trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    document.querySelectorAll('.fab-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const app = opt.dataset.app;
            setFab(app);
            localStorage.setItem('contactApp', app);
            menu.classList.remove('active');
            window.open(apps[app].link, '_blank');
        });
    });

    document.getElementById('fab-main')?.addEventListener('click', () => {
        const curr = localStorage.getItem('contactApp') || 'whatsapp';
        window.open(apps[curr].link, '_blank');
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.fab-container')) menu?.classList.remove('active');
    });
}

function setFab(appName) {
    const main = document.getElementById('fab-main');
    const icon = document.getElementById('fab-icon-svg');
    if (main && icon && apps[appName]) {
        main.style.backgroundColor = apps[appName].color;
        icon.innerHTML = apps[appName].iconPath;
    }
}
