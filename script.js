console.log("Portfólio carregado com sucesso!");


// DADOS DOS PROJETOS
const projectsData = [
    {
        id: 0,
        title: "Skedou",
        icon: "assets/imagens/icons/skedouIcon.svg",
        desc: "Transforme a forma como você gerencia seus agendamentos. Com o Skedou, você economiza tempo: agenda serviços, acompanha seus ganhos e gerencia tudo em um só lugar. O Skedou é o app ideal para profissionais independentes de cuidados com pets, como tosadores, treinadores, passeadores de cães e pet sitters, que desejam se manter organizados e criar conexões mais fortes com seus clientes.",
        challenge: "Organização das camadas de dados devido à escalabilidade, Foi necessário reavaliar estratégias de arquitetura, onde tivemos que estruturar melhor o swiftData para separar sua logica da View, garantindo melhor facilidade de criação de nova features, e tambem na comunicação de swuiftUI com UIKit.",
        tags: ["iOS", "Swift", "SwiftData", "SwiftUI", "CloudKit", "UIKit", "PDFKit", "Clear Architecture(adaptado)"],
        codeLink: "",
        storeLink: "https://apps.apple.com/br/app/skedou/id6754465958?l=en-GBSkedou",
        screenshots: [
            "assets/imagens/imageApps/skedou/skedoul1.svg",
            "assets/imagens/imageApps/skedou/skedoul2.svg",
            "assets/imagens/imageApps/skedou/skedoul3.svg",
            "assets/imagens/imageApps/skedou/skedoul4.svg",
            "assets/imagens/imageApps/skedou/skedoul5.svg"
        ]
    },
    {
        id: 1,
        title: "Underlined",
        icon: "assets/imagens/icons/underlinedIcon.svg",
        desc: "Underlined é um jogo de investigação que desafia sua lógica, memória e atenção aos detalhes. Assuma o papel de um detetive e utilize seu raciocínio para solucionar casos complexos com base em conexões contextuais, não em semelhanças visuais. A cada partida, você é apresentado a uma seleção de cartas contendo pistas — locais, suspeitos, métodos e motivações. Sua missão é encontrar as combinações corretas por contexto para responder às perguntas centrais de cada caso: Onde ocorreu? Como foi feito? Quem é o responsável? Qual o motivo?",
        challenge: "Sendo um jogo todo em UIKit e SpriteKit o maior desafio foi o desempenho e ciclo de vida do app, tivemos problemas com thread que travavam a UI e causavam travamento e ate crashes, tivemos que rever o codigo para desocupar a main thread apenas com processos importantes no momento.",
        tags: ["iOS", "SpriteKit", "UIKit","CloudKit", "MVVM(adaptado)", "CoreData"],
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
        desc: "Transforme tabelas difíceis de ler em informações claras e acessíveis com o NutriCam! Basta apontar a câmera para uma tabela nutricional e deixar o app fazer o resto. Agora, com suporte aprimorado para acessibilidade, o NutriCam garante que qualquer pessoa possa interpretar rótulos com facilidade.",
        challenge: "Implementar o coreML e treinar um modelo, a parte de integração com a camera e a saida de dados foi meio conturbada, o maior desafio foi a saida de dados do modelo, para que seja com os minimos erros possiveis, tivemos mexer com cordenadas dos reconhecimentos para garantir melhor captura.",
        tags: ["CoreML", "VisionKit", "SwiftUI", "UIKit", "iOS", "Accessibility", "AVFoundation"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/nutricam/nutricam1.svg",
            "assets/imagens/imageApps/nutricam/nutricam2.svg",
            "assets/imagens/imageApps/nutricam/nutricam3.svg",
            "assets/imagens/imageApps/nutricam/nutricam4.svg",
            "assets/imagens/imageApps/nutricam/nutricam5.svg"
        ]
    },
    {
        id: 3,
        title: "Spacetime",
        icon: "assets/imagens/icons/SpaceTimeIcon.svg",
        desc: "Organize sua ToDo list com um app simples e eficiente, focado em produtividade e usabilidade, viage pelo espaço ao completar suas tarefas diárias.",
        challenge: "Com um sistema de produtividade com LOCK de apps tivemos problemas com permissões, de modo que tentamos deixar o app confiavel e menos agressivo, com foco em animacoes suaves e usabilidade.",
        tags: ["IOS", "swiftUI", "swiftData","Rive", "AVFoundation", "FamilyControls"],
        codeLink: "#",
        storeLink: "#",
         screenshots: [
            "assets/imagens/imageApps/spacetime/spacetime1.svg",
            "assets/imagens/imageApps/spacetime/spacetime2.png",
            "assets/imagens/imageApps/spacetime/spacetime3.png",
            "assets/imagens/imageApps/spacetime/spacetime4.png",
        ]
    },
    {
        id: 4,
        title: "LNE",
        icon: "assets/imagens/icons/LNEIcon.jpeg",
        desc: "Projeto multiplataforma LNE é focado em accessibilidade, um jogo educativo de quimica para pessoa do ensino medio com deficiencia auditiva, o jogo consta integracao com Vlibras para auxiliar nos estudos.",
        challenge: "meu maior desafio foi o regenciamento das view usando react, tive problemas com atualização de componentes, as vezes alguns estados ficavam travados, foi ai que pedi ajuda com um amigo e aprendi a redezirar componentes.",
        tags: ["React", "TailwindCSS", "TypeScript", "HTML","Next","Vlibras", "Supabase", "Vercel", "IOS", "Flutter", "Dart"],
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
        desc: "Aplicativo focado em IPAD sobre receitas culinarias com foco em facilidade de uso com a Siri, o intuito do app é facilitar na cozinha com instruções apartir da voz.",
        challenge: "Tivemos problemas com a siri, onde algumas vezes ela nao reconhecia os comandos, tivemos que reavaliar a estrutura de intents e melhorar a comunicação entre app e siri.",
        tags: ["SwiftUI", "IpadOS", "SiriKit", "APPIntents", "API REST", "iOS"],
        codeLink: "#",
        storeLink: "#",
        screenshots: [
            "assets/imagens/imageApps/saporo/saporo1.svg",
            "assets/imagens/imageApps/saporo/saporo2.svg",
            "assets/imagens/imageApps/saporo/saporo3.svg",
        ]
    },
    {
        id: 6,
        title: "Marples",
        icon: "assets/imagens/icons/marples3d.png",
        desc: "Aplicativo para VisionPro focado em distração de forma satisfatória, o usuario pode criar varias bolinhas e ficar rebatendo elas nas paredes da propia casa ou em outra bolinhas.",
        challenge: "Manipulação de objetos 3D em um ambiente real, tivemos que estudar bastante o ARKit e RealityKit para conseguir uma boa experiencia, o maior desafio foi o reconheicmento de superficies, colisão, fisica de objetos e reconhimento da mão do usuario.",
        tags: ["RealityKit", "VisionOS", "ARKit", "UIKit", "iOS"],
        codeLink: "#",
        storeLink: "#", 
        screenshots: [
            "assets/imagens/imageApps/marples/marples1.png",
            "assets/imagens/imageApps/marples/marples2.png",
            "assets/imagens/imageApps/marples/marples3.png",
        ]
    },
    {
        id: 7,
        title: "Bora!",
        icon: "assets/imagens/icons/logo-bora.svg",
        desc: "Aplicativo focado em esportes, uma plataforma de social onde usuarios podem marcar jogos, encontrar parceiros e organizar campeonatos.",
        challenge: "O mapa foi o maior desafio, onde tivemos que colocar pins manuais em varias localizações, e fazer um sistema de comunicação entre o organizador do campeonato e os participantes.",
        tags: ["MapKit", "SwiftUI", "iOS", "SwiftData"],
        codeLink: "#",
        storeLink: "#",
         screenshots: [
            "assets/imagens/imageApps/bora/bora1.svg",
            "assets/imagens/imageApps/bora/bora2.svg",
            "assets/imagens/imageApps/bora/bora3.svg",
        ]
    },
    {
        id: 8,
        title: "TutorEasy",
        icon: "assets/imagens/icons/tutoreasy.png",
        desc: "Aplicativo focado em ensinamentos gerais, uma plataforma onde pessoas postam videos ensinando diversos asunstos do dia a dia, seja trocar uma lampada ate fazer uma papelada para algo espeficico, tudo em videos curtos e diretos.",
        challenge: "Ao decorrer do projeto ele poderia conter muitos videos postados, tivemos que pensar em um sistema que abrigase muitos dados, como e um projeto de estudo, optamos por tecnologias nativas, porem foi pensando em AWS ou Firebase.",
        tags: ["API REST", "swiftUI", "iOS", "AVFoundation", "SwiftData"],
        codeLink: "#",
        storeLink: "#",
         screenshots: [
            "assets/imagens/imageApps/tutoreasy/tuto1.png",
            "assets/imagens/imageApps/tutoreasy/tuto2.png",
            "assets/imagens/imageApps/tutoreasy/tuto3.png",
        ]
    }
];

function updateProject(index) {
    const project = projectsData[index];
    const display = document.getElementById('project-display');
    const gallery = document.querySelector('.display-gallery'); // Seleciona a galeria

    // Efeito visual de troca
    display.classList.add('fade-out');

    setTimeout(() => {
        // Atualiza textos e ícones
        document.getElementById('p-icon').src = project.icon;
        document.getElementById('p-title').innerText = project.title;
        document.getElementById('p-desc').innerText = project.desc;
        document.getElementById('p-challenge').innerText = project.challenge;
        document.getElementById('btn-code').href = project.codeLink;
        document.getElementById('btn-link').href = project.storeLink;

        // Atualiza Tags
        const tagsContainer = document.getElementById('p-tags');
        tagsContainer.innerHTML = '';
        if(project.tags) {
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.innerText = tag;
                tagsContainer.appendChild(span);
            });
        }

        // --- ATUALIZA A GALERIA DE IMAGENS (NOVO) ---
        gallery.innerHTML = ''; // Limpa as "telas placeholder" antigas

        if (project.screenshots && project.screenshots.length > 0) {
            project.screenshots.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'app-screen'; // Classe CSS para estilizar
                img.alt = `Tela do ${project.title}`;
                
                // Adiciona proteção caso a imagem não carregue
                img.onerror = function() { this.style.display = 'none'; }; 
                
                gallery.appendChild(img);
            });
        } else {
            // Se não tiver imagens, avisa ou deixa vazio
            gallery.innerHTML = '<p style="color:#64748b; font-size:12px;">Sem pré-visualização disponível.</p>';
        }

        // Atualiza classe Active no Menu
        const buttons = document.querySelectorAll('.bento-item');
        buttons.forEach(btn => btn.classList.remove('active'));
        if(buttons[index]) buttons[index].classList.add('active');

        // Remove o efeito de fade
        display.classList.remove('fade-out');
    }, 300);
}

// Inicializa com o primeiro projeto ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateProject(0);
});