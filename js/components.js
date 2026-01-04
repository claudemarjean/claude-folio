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
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => 
            createProjectCard(project)
        ).join('');
    }
}

/**
 * Charge et affiche les articles
 */
function loadArticles() {
    const ticker = document.getElementById('articlesTicker');
    const articleDetail = document.getElementById('articleDetail');
    const detailTitle = document.getElementById('articleDetailTitle');
    const detailBody = document.getElementById('articleDetailBody');
    const detailImage = document.getElementById('articleDetailImage');
    const closeBtn = document.querySelector('.article-close');

    if (!ticker || !articleDetail) return;

    const mid = Math.ceil(articlesData.length / 2);
    const firstRow = articlesData.slice(0, mid);
    const secondRow = articlesData.slice(mid);

    const renderRow = (items, direction) => `
        <div class="articles-row ${direction === 'right' ? 'reverse' : ''}">
            <div class="articles-track ${direction === 'right' ? 'scroll-right' : 'scroll-left'}">
                ${[...items, ...items].map(createArticlePill).join('')}
            </div>
        </div>
    `;

    ticker.innerHTML = renderRow(firstRow, 'left') + renderRow(secondRow.length ? secondRow : firstRow, 'right');

    // Activer le drag pour scroller et pauser l'animation
    ticker.querySelectorAll('.articles-row').forEach(row => {
        let isDown = false;
        let startX = 0;
        let scrollStart = 0;
        let hasMoved = false;

        const pause = () => row.classList.add('user-dragging');
        const resume = () => row.classList.remove('user-dragging');

        row.addEventListener('pointerdown', (e) => {
            isDown = true;
            startX = e.pageX - row.offsetLeft;
            scrollStart = row.scrollLeft;
            hasMoved = false;
            row.setPointerCapture(e.pointerId);
        });

        row.addEventListener('pointermove', (e) => {
            if (!isDown) return;
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * -1;
            if (Math.abs(walk) > 5) {
                hasMoved = true;
                pause();
                row.scrollLeft = scrollStart + walk;
            }
        });

        const endDrag = (e) => {
            if (!isDown) return;
            isDown = false;
            resume();
            if (e.pointerId) row.releasePointerCapture(e.pointerId);

            // Si le doigt/souris n'a pas réellement glissé, on considère que c'est un clic
            if (!hasMoved) {
                const pillFromTarget = e.target.closest('.article-pill');
                const pillFromPoint = document.elementFromPoint(e.clientX, e.clientY)?.closest('.article-pill');
                const pill = pillFromTarget || pillFromPoint;
                if (pill) {
                    showArticle(pill.dataset.articleId);
                }
            }
        };

        row.addEventListener('pointerup', endDrag);
        row.addEventListener('pointerleave', endDrag);
    });

    const showArticle = (articleId) => {
        const article = articlesData.find(item => item.id === articleId);
        if (!article) return;
        detailTitle.textContent = article.title;
        detailImage.src = article.image;
        detailImage.alt = article.title;
        detailBody.innerHTML = article.body.map(p => `<p>${p}</p>`).join('');
        articleDetail.classList.remove('hidden');
        requestAnimationFrame(() => {
            articleDetail.classList.add('visible');
            articleDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    ticker.addEventListener('click', (event) => {
        const pill = event.target.closest('.article-pill');
        if (!pill) return;
        showArticle(pill.dataset.articleId);
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            articleDetail.classList.remove('visible');
            articleDetail.classList.add('hidden');
        });
    }

    // Ne pas afficher automatiquement d'article au chargement
    // L'utilisateur doit cliquer sur un article pour l'afficher
}

/**
 * Charge et affiche toutes les compétences
 */
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    // Diviser les compétences en deux groupes
    const mid = Math.ceil(skillsData.length / 2);
    const firstRow = skillsData.slice(0, mid);
    const secondRow = skillsData.slice(mid);
    
    // Créer le HTML pour le défilement
    const scrollHTML = `
        <div class="skills-scroll-wrapper">
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
    
    // Remplacer le contenu de skillsGrid seulement
    skillsGrid.outerHTML = scrollHTML;
}

/**
 * Charge et affiche toutes les expériences
 */
function loadExperiences() {
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = experiences.map((experience, index) => 
            createExperienceItem(experience, index)
        ).join('');
    }
}

/**
 * Charge et affiche toutes les formations
 */
function loadEducation() {
    const educationGrid = document.getElementById('educationGrid');
    if (educationGrid) {
        educationGrid.innerHTML = educations.map(education => 
            createEducationCard(education)
        ).join('');
    }
}

/**
 * Initialise tous les composants
 */
function initComponents() {
    loadProjects();
    loadArticles();
    loadSkills();
    loadExperiences();
    loadEducation();
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
