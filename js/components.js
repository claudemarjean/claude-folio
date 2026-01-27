/**
 * Components - Fonctions pour générer les composants du portfolio
 */

/**
 * Génère une carte de projet
 * @param {Object} project - Les données du projet
 * @returns {string} HTML de la carte
 */
function createProjectCard(project) {
    const toolsHTML = project.tools.map(tool => 
        `<span class="tech-badge">${tool}</span>`
    ).join('');

    return `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}" onerror="this.src='assets/images/placeholder-project.jpg'">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" title="Voir le projet">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                        ${project.code ? `
                            <a href="${project.code}" target="_blank" rel="noopener noreferrer" class="project-link" title="Voir le code">
                                <i class="fab fa-github"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-role">${project.role}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${toolsHTML}
                </div>
            </div>
        </div>
    `;
}

/**
 * Génère un pill titre d'article pour le ticker
 */
function createArticlePill(article) {
    return `<button class="article-pill" data-article-id="${article.id}">${article.title}</button>`;
}

/**
 * Génère une carte de compétence
 * @param {string} skill - Le nom de la compétence
 * @returns {string} HTML de la carte
 */
function createSkillCard(skill) {
    // Mapping des icônes pour chaque compétence
    const skillIcons = {
        'Angular': 'fab fa-angular',
        'Bootstrap': 'fab fa-bootstrap',
        'CSS': 'fab fa-css3-alt',
        'Docker': 'fab fa-docker',
        'Firebase': 'fas fa-fire',
        'Flutter': 'fas fa-mobile-alt',
        'Git': 'fab fa-git-alt',
        'HTML': 'fab fa-html5',
        'Javascript': 'fab fa-js',
        'MySQL': 'fas fa-database',
        'Next JS': 'fas fa-forward',
        'Photoshop': 'fas fa-palette',
        'PostgreSQL': 'fas fa-database',
        'Premiere Pro': 'fas fa-video',
        'Python': 'fab fa-python',
        'React': 'fab fa-react',
        'Tailwind': 'fas fa-wind',
        'Typescript': 'fas fa-code',
        'Vue': 'fab fa-vuejs',
        'Wordpress': 'fab fa-wordpress'
    };

    const icon = skillIcons[skill] || 'fas fa-code';

    return `
        <div class="skill-card" data-aos="zoom-in">
            <div class="skill-icon">
                <i class="${icon}"></i>
            </div>
            <p class="skill-name">${skill}</p>
        </div>
    `;
}

/**
 * Génère un élément de la timeline d'expérience
 * @param {Object} experience - Les données de l'expérience
 * @param {number} index - L'index de l'expérience
 * @returns {string} HTML de l'élément
 */
function createExperienceItem(experience, index) {
    return `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}" data-aos="fade-up">
            <div class="timeline-content">
                <div class="timeline-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="timeline-card">
                    <span class="timeline-duration">${experience.duration}</span>
                    <h3 class="timeline-title">${experience.title}</h3>
                    <h4 class="timeline-company">
                        <i class="fas fa-building"></i>
                        ${experience.company}
                    </h4>
                    ${experience.location ? `
                        <p class="timeline-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${experience.location}
                        </p>
                    ` : ''}
                    ${experience.description ? `
                        <p class="timeline-description">${experience.description}</p>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

/**
 * Génère une carte de formation
 * @param {Object} education - Les données de la formation
 * @returns {string} HTML de la carte
 */
function createEducationCard(education) {
    return `
        <div class="education-card" data-aos="fade-up">
            <div class="education-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-content">
                <span class="education-duration">${education.duration}</span>
                <h3 class="education-title">${education.title}</h3>
                <h4 class="education-institution">
                    <i class="fas fa-university"></i>
                    ${education.institution}
                </h4>
                ${education.location ? `
                    <p class="education-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${education.location}
                    </p>
                ` : ''}
                ${education.description ? `
                    <p class="education-description">${education.description}</p>
                ` : ''}
            </div>
        </div>
    `;
}

/**
 * Charge et affiche tous les projets
 */
function loadProjects(projects = []) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => 
            createProjectCard(project)
        ).join('');
    }
}

/**
 * Formatage de la date d'un article
 */
function formatArticleDate(date) {
    if (!date) return '';
    const locale = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'fr';
    const parsed = new Date(date);
    if (Number.isNaN(parsed)) return '';
    return parsed.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function getArticleLocale() {
    return typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'fr';
}

/**
 * Carte aperçu sur la page principale
 */
function createArticlePreviewCard(article) {
    const ctaLabel = getArticleLocale() === 'en' ? 'Read article' : "Lire l'article";
    return `
        <article class="article-preview-card" data-article-id="${article.id}" data-aos="fade-up">
            <div class="article-preview-image">
                <img src="${article.image}" alt="${article.title}" onerror="this.src='assets/images/placeholder-project.jpg'">
                <span class="article-badge">${article.category || 'Article'}</span>
            </div>
            <div class="article-preview-content">
                <div class="article-preview-meta">
                    ${article.date ? `<span class="article-date">${formatArticleDate(article.date)}</span>` : ''}
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt || ''}</p>
                <a href="#articles-page" class="article-link" data-article-id="${article.id}">${ctaLabel}</a>
            </div>
        </article>
    `;
}

/**
 * Carte d'article pour la page dédiée
 */
function createArticleCard(article) {
    const ctaLabel = getArticleLocale() === 'en' ? 'Read article' : "Lire l'article";
    return `
        <article class="article-card" data-article-id="${article.id}" data-category="${(article.category || 'Article').toLowerCase()}">
            <div class="article-card__image">
                <img src="${article.image}" alt="${article.title}" onerror="this.src='assets/images/placeholder-project.jpg'">
                <span class="article-badge">${article.category || 'Article'}</span>
            </div>
            <div class="article-card__body">
                <div class="article-card__meta">
                    ${article.date ? `<span class="article-date">${formatArticleDate(article.date)}</span>` : ''}
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt || ''}</p>
                <button class="article-card__cta" type="button" data-article-id="${article.id}">
                    ${ctaLabel} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </article>
    `;
}

/**
 * Affiche le détail d'un article dans le panneau dédié
 */
function showArticleDetail(article) {
    const panel = document.getElementById('articleDetailPanel');
    if (!panel || !article) return;

    const cover = document.getElementById('articleDetailCover');
    const category = document.getElementById('articleDetailCategory');
    const date = document.getElementById('articleDetailDate');
    const title = document.getElementById('articleDetailTitle');
    const excerpt = document.getElementById('articleDetailExcerpt');
    const body = document.getElementById('articleDetailBody');

    if (cover) {
        cover.src = article.image;
        cover.alt = article.title;
    }
    if (category) category.textContent = article.category || 'Article';
    if (date) date.textContent = formatArticleDate(article.date);
    if (title) title.textContent = article.title;
    if (excerpt) excerpt.textContent = article.excerpt || '';
    if (body) body.innerHTML = (article.body || []).map(p => `<p>${p}</p>`).join('');

    panel.classList.remove('hidden');
    requestAnimationFrame(() => {
        panel.classList.add('visible');
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function closeArticleDetail() {
    const panel = document.getElementById('articleDetailPanel');
    if (!panel) return;
    panel.classList.remove('visible');
    panel.classList.add('hidden');
}

function renderArticlesPreview(articles = []) {
    const preview = document.getElementById('articlesPreview');
    if (!preview) return;

    const sorted = [...articles].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    const limited = sorted.slice(0, 3);
    preview.innerHTML = limited.map(createArticlePreviewCard).join('');

    preview.onclick = (event) => {
        const link = event.target.closest('.article-link');
        if (!link) return;
        window.__pendingArticleId = link.dataset.articleId;
    };
}

function renderArticlesPage(articles = []) {
    const grid = document.getElementById('articlesGrid');
    const filter = document.getElementById('articlesFilter');
    if (!grid) return;

    const locale = getArticleLocale();
    const allLabel = locale === 'en' ? 'All' : 'Tous';
    const categories = [allLabel, ...new Set(articles.map(a => a.category || 'Article'))];
    if (filter) {
        filter.innerHTML = categories.map((cat, index) => `
            <button class="filter-chip ${index === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
        `).join('');
    }

    const render = (category = allLabel) => {
        const filtered = category === allLabel ? articles : articles.filter(a => (a.category || 'Article') === category);
        grid.innerHTML = filtered.map(createArticleCard).join('');
        grid.onclick = (event) => {
            const target = event.target.closest('.article-card, .article-card__cta');
            if (!target || !grid.contains(target)) return;
            const card = target.classList.contains('article-card') ? target : target.closest('.article-card');
            const id = card?.dataset.articleId || target.dataset.articleId;
            const article = filtered.find(item => item.id === id) || articles.find(item => item.id === id);
            showArticleDetail(article);
        };
    };

    render();

    if (filter) {
        filter.onclick = (event) => {
            const btn = event.target.closest('.filter-chip');
            if (!btn) return;
            filter.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.dataset.filter);
        };
    }

    const closeBtn = document.querySelector('.article-detail-close');
    if (closeBtn) {
        closeBtn.onclick = () => closeArticleDetail();
    }

    if (window.__pendingArticleId) {
        const pending = articles.find(a => a.id === window.__pendingArticleId);
        if (pending) showArticleDetail(pending);
        window.__pendingArticleId = null;
    }
}

/**
 * Charge et affiche les articles (aperçu + page dédiée)
 */
function loadArticles(articles = []) {
    const normalized = (articles || []).map((article, index) => ({
        ...article,
        category: article.category || 'Article',
        date: article.date || `2024-01-${String(index + 10).padStart(2, '0')}`
    }));

    renderArticlesPreview(normalized);
    renderArticlesPage(normalized);
}

/**
 * Charge et affiche toutes les compétences
 */
function loadSkills(skills = []) {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const mid = Math.ceil(skills.length / 2);
    const firstRow = skills.slice(0, mid);
    const secondRow = skills.slice(mid);

    const scrollHTML = `
        <div class="skills-scroll-wrapper" id="skillsGrid">
            <div class="skills-row">
                <div class="skills-track">
                    ${[...firstRow, ...firstRow].map(skill => createSkillCard(skill)).join('')}
                </div>
            </div>
            <div class="skills-row">
                <div class="skills-track">
                    ${[...secondRow, ...secondRow].map(skill => createSkillCard(skill)).join('')}
                </div>
            </div>
        </div>
    `;

    skillsGrid.outerHTML = scrollHTML;
}

/**
 * Charge et affiche toutes les expériences
 */
function loadExperiences(experiencesList = []) {
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = experiencesList.map((experience, index) => 
            createExperienceItem(experience, index)
        ).join('');
    }
}

/**
 * Charge et affiche toutes les formations
 */
function loadEducation(educationList = []) {
    const educationGrid = document.getElementById('educationGrid');
    if (educationGrid) {
        educationGrid.innerHTML = educationList.map(education => 
            createEducationCard(education)
        ).join('');
    }
}

/**
 * Initialise tous les composants
 */
function initComponents(data = {}) {
    loadProjects(data.projectsData || []);
    loadArticles(data.articlesData || []);
    loadSkills(data.skillsData || []);
    loadExperiences(data.experiences || []);
    loadEducation(data.educations || []);
}

/**
 * Animation spécifique pour les skill cards avec effet cascade
 */
function initSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.dataset.skillIndex) || 0;
                const delay = index * 50; // 50ms de délai entre chaque carte
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    entry.target.classList.add('animate-in');
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    skillCards.forEach(card => observer.observe(card));
}

/**
 * Animation au scroll - Simple Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec l'attribut data-aos
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}
