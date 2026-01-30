/**
 * PORTFOLIO JAVASCRIPT
 * ====================
 * This file adds interactivity to the website.
 * It handles logic for:
 * 1. Theme Switching (Light/Dark Mode)
 * 2. Language Switching (I18n)
 * 3. Mobile Menu Toggle
 * 4. Interactions (Modals, Buttons)
 */

// STATE MANAGEMENT
// We store the current status of the app here to persist settings.
const state = {
    lang: 'pt', // Current language: 'pt', 'en', 'es'
    theme: 'dark', // Current theme: 'light', 'dark'
};

/**
 * TRANSLATIONS DICTIONARY
 * A JavaScript Object containing all text content for the site.
 * We swap these strings based on the 'state.lang' variable.
 */
const translations = {
    pt: {
        nav_home: "Início",
        nav_portfolio: "Portfólio",
        nav_about: "Sobre",
        nav_services: "Serviços",
        nav_contact: "Contato",
        nav_clients: "Clientes",
        hero_title: "Serviços que valorizam seu tempo",
        hero_subtitle: "Edições que valorizam seus projetos",
        hero_cta: "Ver serviços",
        services_cta: "Faça seu orçamento",
        section_portfolio: "Portfólio",
        section_about: "Quem Sou",
        project_1_title: "Edição de vídeo",
        project_1_desc: "Shorts & Reels",
        project_2_title: "Identidade Visual",
        project_3_title: "Social Media",
        project_4_title: "Logo marcas",
        project_5_title: "Web sites",
        project_6_title: "Ilustrações",
        about_text_1: "Desde os 12 anos, quando criei minha primeira divulgação, o audiovisual se tornou minha paixão. Mesmo tendo iniciado minha trajetória na arquitetura, em 2022 decidi seguir de vez pelo caminho criativo do audiovisual.",
        about_text_2: "Hoje, produzo conteúdos para YouTube e redes sociais e desenvolvo sites com foco em marketing digital, sempre buscando unir estratégia e criatividade.",
        cta_title: "Vamos criar algo incrível juntos?",
        cta_button: "Fale no WhatsApp",
        section_services: "Serviços",
        service_1: "<strong>Edição de vídeo:</strong> Vídeos para YouTube, redes sociais e corporativos. Produção de vinhetas, transições e assets animados em vídeo.",
        service_2: "<strong>Design & Web:</strong> Identidade visual, logomarcas, design para interfaces e websites.",
        service_3: "<strong>Social Media:</strong> Produção de conteúdo estratégico para redes sociais e gerenciamento de perfis.",
        service_4: "<strong>Ilustrações para:</strong> Livros, estampas, stickers e arte digital."
    },
    en: {
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_clients: "Clients",
        hero_title: "Services that value your time",
        hero_subtitle: "Edits that value your projects",
        hero_cta: "View Services",
        services_cta: "Get a Quote",
        section_portfolio: "Portfolio",
        section_about: "About Me",
        project_1_title: "Video Editing",
        project_1_desc: "Shorts & Reels",
        project_2_title: "Visual Identity",
        project_3_title: "Social Media",
        project_4_title: "Logos",
        project_5_title: "Websites",
        project_6_title: "Illustrations",
        about_text_1: "Since I was 12, when I created my first promotion, audiovisuals became my passion. Although I started my path in architecture, in 2022 I decided to fully pursue the creative path of audiovisuals.",
        about_text_2: "Today, I produce content for YouTube and social media and develop websites with a focus on digital marketing, always seeking to combine strategy and creativity.",
        cta_title: "Let's create something amazing together?",
        cta_button: "Chat on WhatsApp",
        section_services: "Services",
        service_1: "<strong>Video Editing:</strong> Videos for YouTube, social media and corporate. Production of vignettes, transitions and animated video assets.",
        service_2: "<strong>Design & Web:</strong> Visual identity, logos, interface design and websites.",
        service_3: "<strong>Social Media:</strong> Strategic content production for social networks and profile management.",
        service_4: "<strong>Illustrations for:</strong> Books, prints, stickers and digital art."
    },
    es: {
        nav_home: "Inicio",
        nav_portfolio: "Portafolio",
        nav_about: "Sobre Mí",
        nav_services: "Servicios",
        nav_contact: "Contacto",
        nav_clients: "Clientes",
        hero_title: "Servicios que valoran tu tiempo",
        hero_subtitle: "Ediciones que valoran tus proyectos",
        hero_cta: "Ver Servicios",
        services_cta: "Solicitar Presupuesto",
        section_portfolio: "Portafolio",
        section_about: "Sobre Mí",
        project_1_title: "Edición de Vídeo",
        project_1_desc: "Shorts & Reels",
        project_2_title: "Identidad Visual",
        project_3_title: "Redes Sociales",
        project_4_title: "Logotipos",
        project_5_title: "Sitios Web",
        project_6_title: "Ilustraciones",
        about_text_1: "Desde los 12 años, cuando creé mi primera divulgación, el audiovisual se convirtió en mi pasión. Aunque comencé mi trayectoria en la arquitectura, en 2022 decidí seguir de lleno el camino creativo del audiovisual.",
        about_text_2: "Hoy, produzco contenidos para YouTube y redes sociales y desarrollo sitios web con enfoque en marketing digital, siempre buscando unir estrategia y creatividad.",
        cta_title: "¿Creamos algo increíble juntos?",
        cta_button: "Hablemos por WhatsApp",
        section_services: "Servicios",
        service_1: "<strong>Edición de Video:</strong> Videos para YouTube, redes sociales y corporativos. Producción de viñetas, transiciones y recursos animados en video.",
        service_2: "<strong>Diseño y Web:</strong> Identidad visual, logotipos, diseño de interfaces y sitios web.",
        service_3: "<strong>Redes Sociales:</strong> Producción de contenido estratégico para redes sociales y gestión de perfiles.",
        service_4: "<strong>Ilustraciones para:</strong> Libros, estampados, pegatinas y arte digital."
    }
};

/**
 * INIT (Initialization)
 * Runs when the browser finishes loading the HTML structure.
 * Sets up the initial state and event listeners.
 */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initEvents();
    initFab();
    initLightbox();
});

/**
 * THEME LOGIC
 * Checks if the user has a saved preference (in localStorage).
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

/**
 * Sets the theme by adding a 'data-theme' attribute to the <html> tag.
 * CSS rules inside [data-theme="dark"] will then activate.
 * @param {string} themeName - 'light' or 'dark'
 */
function setTheme(themeName) {
    state.theme = themeName;
    localStorage.setItem('theme', themeName); // Save preference
    document.documentElement.setAttribute('data-theme', themeName);

    // Update the Toggle Icon (Sun vs Moon)
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // If Dark Mode is ON, show the Sun icon (to switch back to Light)
    if (themeName === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        // If Light Mode is ON, show the Moon icon (to switch to Dark)
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

/**
 * Toggles between light and dark mode.
 */
function toggleTheme() {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

/**
 * LANGUAGE LOGIC
 * Detects current language from URL path
 */
function initLanguage() {
    // Detect language from URL path
    const currentPath = window.location.pathname;

    if (currentPath.includes('/pt/')) {
        state.lang = 'pt';
    } else if (currentPath.includes('/es/')) {
        state.lang = 'es';
    } else {
        state.lang = 'en'; // Default to English for root
    }

    updateTexts();
}

/**
 * Cycles to the next language and redirects to the appropriate subdirectory
 * PT -> EN -> ES -> PT
 * Optimized for local file system (no transition delay)
 */
function cycleLanguage() {
    // Detect current language from URL path
    const currentPath = window.location.pathname;
    let targetPath = '';

    if (currentPath.includes('/pt/')) {
        // Currently on Portuguese, go to English (root)
        targetPath = currentPath.replace('/pt/', '/');
    } else if (currentPath.includes('/es/')) {
        // Currently on Spanish, go to Portuguese
        targetPath = currentPath.replace('/es/', '/pt/');
    } else {
        // Currently on English (root), go to Spanish
        // Handle both root and index.html cases
        if (currentPath.endsWith('/')) {
            targetPath = currentPath + 'es/';
        } else if (currentPath.endsWith('index.html')) {
            targetPath = currentPath.replace('index.html', 'es/');
        } else {
            targetPath = '/portfolio-spa/es/';
        }
    }

    // Instant redirect (no setTimeout delay for local file system)
    window.location.href = targetPath;
}

/**
 * Prefetch the next language version for faster loading
 * Called on hover over the language toggle button
 */
function prefetchNextLanguage() {
    const currentPath = window.location.pathname;
    let prefetchPath = '';

    // Determine which language to prefetch
    if (currentPath.includes('/pt/')) {
        prefetchPath = currentPath.replace('/pt/', '/');
    } else if (currentPath.includes('/es/')) {
        prefetchPath = currentPath.replace('/es/', '/pt/');
    } else {
        if (currentPath.endsWith('/')) {
            prefetchPath = currentPath + 'es/';
        } else if (currentPath.endsWith('index.html')) {
            prefetchPath = currentPath.replace('index.html', 'es/');
        } else {
            prefetchPath = '/portfolio-spa/es/';
        }
    }

    // Create prefetch link if it doesn't exist
    const existingPrefetch = document.querySelector(`link[rel="prefetch"][href="${prefetchPath}"]`);
    if (!existingPrefetch) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = prefetchPath;
        prefetchLink.as = 'document';
        document.head.appendChild(prefetchLink);
    }
}

/**
 * Updates the text of every element with a 'data-i18n' attribute.
 * It looks up the key in the 'translations' object.
 */
function updateTexts() {
    // Update the button label (e.g., PT, EN)
    document.getElementById('current-lang').textContent = state.lang.toUpperCase();

    // Find all elements that need translation
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[state.lang][key]) {
            // If the text contains HTML tags (like <b>), use innerHTML
            if (translations[state.lang][key].includes('<')) {
                el.innerHTML = translations[state.lang][key];
            } else {
                el.textContent = translations[state.lang][key];
            }
        }
    });
}

/**
 * EVENT LISTENERS
 * "Listening" means waiting for a user action (clik, scroll, etc.) 
 * to execute specific code.
 */
function initEvents() {
    // Theme Button Click
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Language Button Click
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', cycleLanguage);

    // Prefetch next language on hover for faster transitions
    langToggle.addEventListener('mouseenter', prefetchNextLanguage);
    langToggle.addEventListener('touchstart', prefetchNextLanguage, { passive: true });

    // Mobile Menu Toggle (Hamburger)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active'); // Toggles the CSS slide-in class
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Modal Close Button
    const closeModalBtn = document.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', closeModal);

    // Close Modal when clicking outside the content box (on the overlay)
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') closeModal();
    });
}

/**
 * GALLERY CONFIGURATION
 * Defines the structure for all dynamic galleries (Boxes 2-6).
 * 
 * Types:
 * - 'grouped': Has subfolders. Sidebar navigation is created.
 * - 'flat': No subfolders. Just a grid of images.
 * 
 * Content Source:
 * - 'count': Assumes files are named 1.png, 2.png, etc.
 * - 'files': Explicit list of filenames (for complex names).
 */
const galleryConfig = {
    // BOX 2: Identidade Visual (Grouped)
    proj2: {
        type: 'grouped',
        basePath: 'assets/visual_id/',
        groups: [
            {
                folder: 'Karati',
                name: 'Karati',
                count: 12 // 1.png to 12.png
            },
            {
                folder: 'Senna',
                name: 'Senna Ayrton',
                files: [
                    '1_Capa.webp', '2_Descritivo.webp', '3_Persona.webp', '4_Cores.webp',
                    '5_Logo.webp', '6_Logo.webp', '7_Logo.webp', '8_Logo.webp',
                    '9_Logo.webp', '10_Logo.webp', '11_Fonte.webp', '12_Fonte.webp',
                    '13_icones.webp', '14_Texturas.webp', '15_Cartão.webp', '16_thumbnail.webp',
                    '17_Impressos.webp', '18_Impressos.webp', '19_outdoor.webp', '20_Site layout.webp'
                ]
            },
            {
                folder: 'Sonho_doce',
                name: 'Sonho Doce',
                count: 11 // 1.png to 11.png
            },
            {
                folder: 'Teacher_Mary',
                name: 'Teacher Mary',
                files: [
                    '1_Capa.webp', '2_Moodboard.webp', '3_Cores.webp', '4_Fonte_1.webp',
                    '5_fonte_2.webp', '6_fonte_3.webp', '7_Texturas.webp', '8_icones.webp',
                    '9_Carrossel.webp', '10_Carrossel.webp'
                ]
            }
        ]
    },

    // BOX 3: Social Media (Grouped)
    social: {
        type: 'grouped',
        basePath: 'assets/social_media/',
        groups: [
            {
                folder: 'Carrossel_English_Library',
                name: 'English Library',
                count: 7
            },
            {
                folder: 'Carrossel_Estratégias_para_ler_em_Inglês',
                name: 'Estratégias Inglês',
                count: 8
            },
            {
                folder: 'Carrossel_Luiza',
                name: 'Carrossel Luiza',
                count: 9
            }
        ]
    },

    // BOX 4: Logo Marcas (Flat)
    proj4: {
        type: 'flat',
        basePath: 'assets/logo_marca/',
        files: [
            'logo_bella.webp',
            'logo_cristhiane_diniz.webp',
            'logo_de_loja_de_roupas_nerd.webp',
            'logo_elo_perdido.webp',
            'logo_luiza.webp',
            'logo_minimalista.webp',
            'logo_sorveteria.webp',
            'logo_vk.webp'
        ]
    },

    // BOX 5: Web Sites (Flat - Placeholder/Empty)
    proj5: {
        type: 'flat',
        basePath: 'assets/web_site/',
        files: [] // Empty for now
    },

    // BOX 6: Ilustrações / Art (Flat)
    proj6: {
        type: 'flat',
        basePath: 'assets/art/',
        files: [
            'Back_to_black.webp',
            'Dino_Punk.webp',
            'Pizza.webp',
            'Surreal.webp'
        ]
    }
};

/**
 * MODAL LOGIC
 * Shows the project details overlay.
 * @param {string} projectId - ID to identify which project to load
 */
function openModal(projectId, titleOverride) {
    const modal = document.getElementById('project-modal');
    const viewer = document.getElementById('modal-viewer-container');
    const galleryStrip = document.querySelector('.modal-gallery-strip');

    // Reset Content
    viewer.innerHTML = '';
    galleryStrip.innerHTML = '';

    if (projectId === 'video1') {
        loadVideoGallery(viewer, galleryStrip);
    } else if (galleryConfig[projectId]) {
        // Load generic gallery based on config
        loadGenericGallery(projectId, viewer, galleryStrip);
    } else {
        // Fallback or specific custom logic
        const displayTitle = titleOverride || ('Projeto ' + projectId);
        viewer.innerHTML = `<div style="padding:20px;"><h2>${displayTitle}</h2><p>Conteúdo em breve.</p></div>`;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * Loads the Video Gallery (Box 1)
 */
function loadVideoGallery(viewer, galleryStrip) {
    const videoShorts = ['RU0mPGnfS4U', 'Y5m-z7qSNIU', 'dyZXPyF0vu0', 'uLuh6t96QmY'];

    // 1. Render Viewer
    viewer.innerHTML = `
        <div class="video-container-vertical">
            <iframe id="main-video-frame" src="" title="Video Player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;

    // 2. Render Sidebar Thumbnails
    videoShorts.forEach((vidId, index) => {
        const btn = document.createElement('button');
        btn.className = 'strip-thumb';
        btn.style.backgroundImage = `url('https://img.youtube.com/vi/${vidId}/hqdefault.jpg')`;
        btn.setAttribute('aria-label', `Play Video ${index + 1}`);

        btn.addEventListener('click', () => {
            const iframe = document.getElementById('main-video-frame');
            iframe.src = `https://www.youtube.com/embed/${vidId}?autoplay=1`;
            document.querySelectorAll('.strip-thumb').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });

        galleryStrip.appendChild(btn);

        // Auto-load first video
        if (index === 0) btn.click();
    });
}

/**
 * Loads a Dynamic Gallery (Grouped or Flat)
 */
function loadGenericGallery(projectId, viewer, galleryStrip) {
    const config = galleryConfig[projectId];

    // Detect if we are in a subdirectory (pt/ or es/) and need to go up one level for assets
    const pathPrefix = (window.location.pathname.includes('/pt/') || window.location.pathname.includes('/es/')) ? '../' : '';

    if (config.type === 'grouped') {
        // 1. Render Sidebar for Groups
        config.groups.forEach((group, index) => {
            const btn = document.createElement('button');
            btn.className = 'gallery-sidebar-item';

            // Determine Thumbnail (First image of the group)
            let firstImage = '';
            if (group.files && group.files.length > 0) {
                firstImage = group.files[0];
            } else {
                firstImage = '1.webp'; // Default for count-based
            }

            const thumbUrl = `${pathPrefix}${config.basePath}${group.folder}/${firstImage}`;
            btn.style.backgroundImage = `url('${thumbUrl}')`;
            btn.title = group.name;
            btn.setAttribute('aria-label', `View ${group.name}`);

            btn.addEventListener('click', () => {
                loadGalleryGroup(projectId, index, pathPrefix);
                // Highlight active Sidebar Item
                document.querySelectorAll('.gallery-sidebar-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });

            galleryStrip.appendChild(btn);
        });

        // 2. Load first group by default
        if (config.groups.length > 0) {
            // Trigger click on first item to load it and set active state
            galleryStrip.firstElementChild.click();
        }

    } else if (config.type === 'flat') {
        // No sidebar for flat galleries
        galleryStrip.style.display = 'none'; // Hide strip

        // Render all images in one grid
        const imagesHtml = renderImagesHtml(pathPrefix + config.basePath, config);

        if (imagesHtml) {
            viewer.innerHTML = `<div class="gallery-grid">${imagesHtml}</div>`;
        } else {
            viewer.innerHTML = `<div style="padding:20px; text-align:center;"><h3>Em construção</h3><p>Nenhuma imagem encontrada.</p></div>`;
        }
    }
}

/**
 * Loads a specific group of images into the viewer (for Grouped galleries)
 */
function loadGalleryGroup(projectId, groupIndex, pathPrefix) {
    const viewer = document.getElementById('modal-viewer-container');
    const config = galleryConfig[projectId];
    const group = config.groups[groupIndex];

    // Construct Path Base: assets/visual_id/Karati/
    // pathPrefix is passed from the caller to ensure consistency
    const groupPath = `${pathPrefix}${config.basePath}${group.folder}/`;

    // Create flexible container for this collection
    const wrapperStart = `<div class="gallery-flex-container">`;
    const wrapperEnd = `</div>`;

    const imagesHtml = renderImagesHtml(groupPath, group);

    viewer.innerHTML = `<div style="padding: 10px;">
        <h3 style="margin-bottom:10px; color:var(--text-primary);">${group.name}</h3>
        ${wrapperStart}${imagesHtml}${wrapperEnd}
    </div>`;
}

/**
 * Helper to generate HTML for a list of images
 * @param {string} basePath - URL path prefix (e.g., 'assets/art/')
 * @param {object} sourceObj - Object containing either 'files' array or 'count' number
 */
function renderImagesHtml(basePath, sourceObj) {
    let html = '';

    if (sourceObj.files) {
        // List of specific filenames
        sourceObj.files.forEach(file => {
            html += `<img src="${basePath}${file}" class="gallery-img" loading="lazy" alt="Gallery Image">`;
        });
    } else if (sourceObj.count) {
        // Numeric range 1..N
        for (let i = 1; i <= sourceObj.count; i++) {
            html += `<img src="${basePath}${i}.webp" class="gallery-img" loading="lazy" alt="Gallery Image ${i}">`;
        }
    }

    return html;
}

/**
 * Hides the modal and re-enables background scrolling.
 */
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Show gallery strip again in case it was hidden by flat gallery
    const galleryStrip = document.querySelector('.modal-gallery-strip');
    if (galleryStrip) galleryStrip.style.display = 'flex';

    // Stop Video Playback by clearing src
    const viewer = document.getElementById('modal-viewer-container');
    const iframes = viewer.querySelectorAll('iframe');
    iframes.forEach(iframe => iframe.src = "");
}

// Make openModal available globally
window.openModal = openModal;


/**
 * FAB (Floating Action Button) CONTACT WIDGET
 * Handles the logic for the expandable contact menu in the bottom right.
 */
const apps = {
    whatsapp: {
        color: '#25D366',
        iconPath: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
        link: 'https://wa.me/5531989566719'
    },
    telegram: {
        color: '#0088cc',
        iconPath: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
        link: 'https://t.me/+5531989566719'
    },
    messenger: {
        color: '#00B2FF',
        iconPath: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        link: 'https://www.facebook.com/profile.php?id=61577000556529'
    }
};

function initFab() {
    // 1. Load last selected app preference
    const savedApp = localStorage.getItem('selectedContactApp') || 'whatsapp';
    setActiveApp(savedApp);

    // 2. Setup Event Listeners
    const trigger = document.getElementById('fab-trigger');
    const menu = document.getElementById('fab-menu');
    const mainBtn = document.getElementById('fab-main');
    const options = document.querySelectorAll('.fab-option');

    // Toggle Menu Open/Close
    trigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents click from bubbling up to document
        menu.classList.toggle('active');
        const isExpanded = menu.classList.contains('active');
        // Visual feedback: Rotate the arrow icon
        trigger.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Handle Option Selection (Whatsapp vs Telegram vs Messenger)
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            const app = opt.getAttribute('data-app');
            setActiveApp(app);
            menu.classList.remove('active'); // Close menu after selection
            trigger.style.transform = 'rotate(0deg)';

            // Save choice for next visit
            localStorage.setItem('selectedContactApp', app);

            // Open link immediately after selection
            if (apps[app] && apps[app].link) {
                window.open(apps[app].link, '_blank', 'noopener,noreferrer');
            }
        });
    });

    // Main Button Click -> Open the actual link
    mainBtn.addEventListener('click', () => {
        const currentApp = localStorage.getItem('selectedContactApp') || 'whatsapp';
        const url = apps[currentApp].link;
        window.open(url, '_blank');
    });

    // Close menu when clicking anywhere else on the page
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.fab-container')) {
            menu.classList.remove('active');
            trigger.style.transform = 'rotate(0deg)';
        }
    });
}

/**
 * Updates the appearance of the main FAB button.
 * @param {string} appName - key from the 'apps' object
 */
function setActiveApp(appName) {
    if (!apps[appName]) return;

    const mainBtn = document.getElementById('fab-main');
    const iconSvg = document.getElementById('fab-icon-svg');

    // Update color and icon
    mainBtn.style.backgroundColor = apps[appName].color;
    iconSvg.innerHTML = apps[appName].iconPath;
}

/**
 * LIGHTBOX LOGIC
 * Handles the full-screen image viewer with navigation.
 */
let lightboxState = {
    images: [],
    currentIndex: 0
};

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.getElementById('lb-prev');
    const nextBtn = document.getElementById('lb-next');

    // 1. Close Actions
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    // Close on background click (but not on content/arrows)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // 2. Navigation Actions
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(-1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(1);
        });
    }

    // 3. Keyboard Support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // 4. Open Trigger (Delegation)
    const modalViewer = document.getElementById('modal-viewer-container');
    if (modalViewer) {
        modalViewer.addEventListener('click', (e) => {
            // Check if clicked element is an image inside the gallery
            if (e.target.tagName === 'IMG' && e.target.classList.contains('gallery-img')) {
                e.stopPropagation();

                // Collect all current images in the view for navigation context
                const allImages = Array.from(modalViewer.querySelectorAll('.gallery-img'));
                lightboxState.images = allImages.map(img => img.src);
                lightboxState.currentIndex = allImages.indexOf(e.target);

                openLightbox();
            }
        });
    }
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    updateLightboxImage();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    // Clear state
    lightboxState.images = [];
}

function navigateLightbox(direction) {
    if (lightboxState.images.length === 0) return;

    // Update index with wrapping
    lightboxState.currentIndex += direction;

    if (lightboxState.currentIndex < 0) {
        lightboxState.currentIndex = lightboxState.images.length - 1;
    } else if (lightboxState.currentIndex >= lightboxState.images.length) {
        lightboxState.currentIndex = 0;
    }

    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightboxImg) return;

    // Fade sequence could be added here for polish
    lightboxImg.style.opacity = '0.5';

    setTimeout(() => {
        lightboxImg.src = lightboxState.images[lightboxState.currentIndex];
        lightboxImg.onload = () => {
            lightboxImg.style.opacity = '1';
        };
    }, 150);
}


