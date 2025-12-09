console.log("Portfólio carregado com sucesso!");

// 1. DADOS DOS PROJETOS 
const projectsData = [
    {
        id: 0,
        title: "Skedou",
        icon: "assets/imagens/icons/skedouIcon.svg",
        desc: "Transforme a forma como você gerencia seus agendamentos. Com o Skedou, você economiza tempo: agenda serviços, acompanha seus ganhos e gerencia tudo em um só lugar. O Skedou é o app ideal para profissionais independentes de cuidados com pets.",
        challenge: "Organização das camadas de dados devido à escalabilidade. Foi necessário reavaliar estratégias de arquitetura, onde tivemos que estruturar melhor o SwiftData para separar sua lógica da View.",
        tags: ["iOS", "Swift", "SwiftData", "SwiftUI", "CloudKit", "UIKit"],
        codeLink: "",
        storeLink: "https://apps.apple.com/br/app/skedou/id6754465958?l=en-GBSkedou",
        screenshots: [
            "assets/imagens/imageApps/skedou/skedou1.png",
            "assets/imagens/imageApps/skedou/skedou2.png",
            "assets/imagens/imageApps/skedou/skedou3.png",
            "assets/imagens/imageApps/skedou/skedou4.png",
            "assets/imagens/imageApps/skedou/skedou5.png",
            "assets/imagens/imageApps/skedou/skedou6.png"
        ]
    },
    {
        id: 1,
        title: "Underlined",
        icon: "assets/imagens/icons/underlinedIcon.svg",
        desc: "Underlined é um jogo de investigação que desafia sua lógica, memória e atenção aos detalhes. Assuma o papel de um detetive e utilize seu raciocínio para solucionar casos complexos com base em conexões contextuais.",
        challenge: "Sendo um jogo todo em UIKit e SpriteKit o maior desafio foi o desempenho e ciclo de vida do app, tivemos problemas com threads que travavam a UI.",
        tags: ["iOS", "SpriteKit", "UIKit", "CloudKit", "MVVM"],
        codeLink: "#",
        storeLink: "https://apps.apple.com/br/app/underlined/id6745526553?l=en-GBUnderlined",
        screenshots: [
            "assets/imagens/imageApps/underlined/underlined6.svg",
            "assets/imagens/imageApps/underlined/underlined1.svg",
            "assets/imagens/imageApps/underlined/underlined2.svg",
            "assets/imagens/imageApps/underlined/underlined3.svg",
            "assets/imagens/imageApps/underlined/underlined4.svg",
            "assets/imagens/imageApps/underlined/underlined5.svg"
        ]
    },
    {
        id: 2,
        title: "Nutricam",
        icon: "assets/imagens/icons/nutricamIcon.svg",
        desc: "Transforme tabelas difíceis de ler em informações claras e acessíveis com o NutriCam! Basta apontar a câmera para uma tabela nutricional e deixar o app fazer o resto.",
        challenge: "Implementar o CoreML e treinar um modelo. A parte de integração com a câmera e a saída de dados foi complexa para garantir precisão.",
        tags: ["iOS", "VisionKit", "SwiftUI", "UIKit", "CoreML"],
        codeLink: "#",
        storeLink: "https://apps.apple.com/br/app/nutricam/id6504928875?l=en-GBNutriCam",
        screenshots: [
            "assets/imagens/imageApps/nutricam/nutricam1.png",
            "assets/imagens/imageApps/nutricam/nutricam2.png",
            "assets/imagens/imageApps/nutricam/nutricam3.png",
            "assets/imagens/imageApps/nutricam/nutricam4.png",
            "assets/imagens/imageApps/nutricam/nutricam5.png"
        ]
    },
    {
        id: 3,
        title: "Spacetime",
        icon: "assets/imagens/icons/SpaceTimeIcon.svg",
        desc: "Organize sua ToDo list com um app simples e eficiente, focado em produtividade e usabilidade, viaje pelo espaço ao completar suas tarefas diárias.",
        challenge: "Com um sistema de produtividade com LOCK de apps tivemos problemas com permissões, foco em animações suaves e usabilidade.",
        tags: ["iOS", "SwiftUI", "SwiftData", "Rive", "FamilyControls"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/spacetime/spacetime1.svg",
            "assets/imagens/imageApps/spacetime/spacetime2.png",
            "assets/imagens/imageApps/spacetime/spacetime3.png",
            "assets/imagens/imageApps/spacetime/spacetime4.png"
        ]
    },
    {
        id: 4,
        title: "LNE",
        icon: "assets/imagens/icons/LNEIcon.jpeg",
        desc: "Projeto multiplataforma LNE é focado em acessibilidade, um jogo educativo de química para pessoas do ensino médio com deficiência auditiva, com integração Vlibras.",
        challenge: "Gerenciamento das views usando React e problemas com atualização de componentes e renderização de estados.",
        tags: ["Web","Mobile","Supabase","React", "TypeScript",  "Vlibras", "HTML", "iOS"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/LNE/lne1.PNG",
            "assets/imagens/imageApps/LNE/lne2.PNG",
            "assets/imagens/imageApps/LNE/lne3.PNG",
            "assets/imagens/imageApps/LNE/lne4.PNG",
            "assets/imagens/imageApps/LNE/lne5.PNG",
        ]
    },
    {
        id: 5,
        title: "Saporo",
        icon: "assets/imagens/icons/SaporoIcon.svg",
        desc: "Aplicativo focado em iPad sobre receitas culinárias com foco em facilidade de uso com a Siri.",
        challenge: "Tivemos problemas com a Siri, onde algumas vezes ela não reconhecia os comandos, tivemos que reavaliar a estrutura de intents.",
        tags: ["SwiftUI", "iPadOS", "SiriKit", "AppIntents", "API REST"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/saporo/saporo1.svg",
            "assets/imagens/imageApps/saporo/saporo2.svg",
            "assets/imagens/imageApps/saporo/saporo3.svg"
        ]
    },
    {
        id: 6,
        title: "Marples",
        icon: "assets/imagens/icons/marples3d.png",
        desc: "Aplicativo para VisionPro focado em distração de forma satisfatória. Manipule bolinhas em realidade aumentada.",
        challenge: "Manipulação de objetos 3D em um ambiente real, reconhecimento de superfícies, colisão e reconhecimento da mão do usuário.",
        tags: ["RealityKit", "VisionOS", "ARKit", "UIKit", "iOS"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/marples/marples1.png",
            "assets/imagens/imageApps/marples/marples2.png",
            "assets/imagens/imageApps/marples/marples3.png"
        ]
    },
    {
        id: 7,
        title: "Bora!",
        icon: "assets/imagens/icons/logo-bora.svg",
        desc: "Aplicativo focado em esportes, uma plataforma social onde usuários podem marcar jogos e campeonatos.",
        challenge: "O mapa foi o maior desafio, pinagem manual em várias localizações e sistema de comunicação.",
        tags: ["MapKit", "SwiftUI", "iOS", "SwiftData"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/bora/bora1.svg",
            "assets/imagens/imageApps/bora/bora2.svg",
            "assets/imagens/imageApps/bora/bora3.svg"
        ]
    },
    {
        id: 8,
        title: "TutorEasy",
        icon: "assets/imagens/icons/tutoreasy.png",
        desc: "Plataforma de vídeos curtos ensinando diversos assuntos do dia a dia.",
        challenge: "Pensar em um sistema que abrigasse muitos dados e vídeos, otimização de storage.",
        tags: ["API REST", "SwiftUI", "iOS", "AVFoundation", "SwiftData"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/tutoreasy/tuto1.png",
            "assets/imagens/imageApps/tutoreasy/tuto2.png",
            "assets/imagens/imageApps/tutoreasy/tuto3.png"
        ]
    }
];

// 2. FUNÇÕES DE LÓGICA (UI)

function createBentoMenu() {
    const menuContainer = document.getElementById('bento-menu');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';

    projectsData.forEach((project, index) => {
        const button = document.createElement('button');
        button.className = `bento-item ${index === 0 ? 'active' : ''}`;
        button.onclick = () => updateProject(index);

        const img = document.createElement('img');
        img.src = project.icon;
        img.alt = project.title;
        // Adiciona um fallback caso o ícone não carregue
        img.onerror = function () { this.src = 'assets/imagens/icons/default.png'; };

        const span = document.createElement('span');
        span.innerText = project.title;

        button.appendChild(img);
        button.appendChild(span);
        menuContainer.appendChild(button);
    });
}

function updateProject(index) {
    const project = projectsData[index];
    const display = document.getElementById('project-display');
    const gallery = document.querySelector('.display-gallery');

    if (!display) return;

    display.classList.add('fade-out');
   
    setTimeout(() => {
        document.getElementById('p-icon').src = project.icon;
        document.getElementById('p-title').innerText = project.title;
        document.getElementById('p-desc').innerText = project.desc;
        document.getElementById('p-challenge').innerText = project.challenge;

        // Atualiza botões
        const btnCode = document.getElementById('btn-code');
        const btnLink = document.getElementById('btn-link');

        if (project.codeLink && project.codeLink !== "#") {
            btnCode.href = project.codeLink;
            btnCode.style.display = "flex";
        } else {
            btnCode.style.display = "none";
        }

        if (project.storeLink && project.storeLink !== "#") {
            btnLink.href = project.storeLink;
            btnLink.style.display = "flex";
        } else {
            btnLink.style.display = "none";
        }

        const tagsContainer = document.getElementById('p-tags');
        tagsContainer.innerHTML = '';
        if (project.tags) {
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.innerText = tag;
                tagsContainer.appendChild(span);
            });
        }

        gallery.innerHTML = '';
        if (project.screenshots && project.screenshots.length > 0) {
            project.screenshots.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'app-screen';
                img.alt = `Tela do ${project.title}`;
                img.onerror = function () { this.style.display = 'none'; };
                gallery.appendChild(img);
            });
        } else {
            gallery.innerHTML = '<p style="color:#64748b; font-size:12px;">Sem pré-visualização disponível.</p>';
        }

        const buttons = document.querySelectorAll('.bento-item');
        buttons.forEach(btn => btn.classList.remove('active'));
        if (buttons[index]) buttons[index].classList.add('active');

        display.classList.remove('fade-out');
         setTimeout(() => { setupImageZoom(); }, 50);
    }, 300);
}

function renderFeaturedProjects() {
    const container = document.getElementById('featured-container');
    if (!container) return;
    const idsDestaque = [0, 1, 4];

    const featuredProjects = projectsData.filter(project => idsDestaque.includes(project.id));

    container.innerHTML = '';

    featuredProjects.forEach(project => {
        const shortDesc = project.desc.length > 120
            ? project.desc.substring(0, 120) + '...'
            : project.desc;

        const shortTags = project.tags.slice(0, 3).map(tag => `<span class="feat-tag">${tag}</span>`).join('');

        const coverImage = project.screenshots && project.screenshots.length > 0
            ? project.screenshots[0]
            : project.icon;

        const storeBtn = project.storeLink && project.storeLink !== '#'
            ? `<a href="${project.storeLink}" target="_blank" class="btn-feat-primary"><i class="fab fa-app-store"></i> Baixar</a>`
            : '';

        const html = `
            <div class="featured-card">
                <div class="feat-header">
                    <img src="${project.icon}" alt="${project.title}" class="feat-icon">
                    <div class="feat-title-group">
                        <h3>${project.title}</h3>
                        <div class="feat-tags">${shortTags}</div>
                    </div>
                </div>
                <p class="feat-desc">${shortDesc}</p>
                <div class="feat-image-wrapper">
                    <img src="${coverImage}" alt="Tela do App">
                </div>
                <div class="feat-footer">
                    <button onclick="scrollToProject(${project.id})" class="btn-feat-outline">
                        Ver Detalhes
                    </button>
                    ${storeBtn}
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
    setupImageZoom();
}

function scrollToProject(id) {
    const section = document.getElementById('projetos');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateProject(id);
    }
}

// 3. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    createBentoMenu();
    renderFeaturedProjects();
    updateProject(0);
});

// ==========================================
// 4. LÓGICA DO MODAL DE ZOOM (Lightbox)
// ==========================================

// Pega os elementos do modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const span = document.getElementsByClassName("close-modal")[0];

// Função para abrir o modal com a imagem clicada
function openModal(imgSrc) {
    modal.style.display = "flex";
    modalImg.src = imgSrc; // Usa o src da imagem clicada na imagem grande
    // Desabilita o scroll da página de trás
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
span.onclick = function () {
    modal.style.display = "none";
    // Habilita o scroll de volta
    document.body.style.overflow = 'auto';
}

// Fecha se clicar fora da imagem (no fundo preto)
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}

function setupImageZoom() {
    // Seleciona todas as imagens de destaque e da galeria
    const clickableImages = document.querySelectorAll('.feat-image-wrapper img, .app-screen');

    clickableImages.forEach(img => {
        img.onclick = function () {
            openModal(this.src);
        }
    });
}