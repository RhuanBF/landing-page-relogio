import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

//objeto cena, onde o modelo 3d irá ficar
const cena = new THREE.Scene();

//objeto camera, oferece a perpectiva do modelo 3d (FOV de 45)
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5); 

//Moto gráfico WEBGL que mostrará todos os objeots junto com o modelo 3d
const render = new THREE.WebGLRenderer({ antialias: true , alpha: true});
render.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".relogio-3d").appendChild(render.domElement); //div relogio-3d (espaço)

// objeto iluminação, feixe de luz dentro da cena
const luzAmbiente = new THREE.AmbientLight(0xffffff, 1);
cena.add(luzAmbiente);

const luzDirecional = new THREE.DirectionalLight(0xffffff, 2);
luzDirecional.position.set(5, 10, 7);
cena.add(luzDirecional);

//O loader carrega o modelo 3d de um extensão de exportação do Blender
let relogio;
const loader = new GLTFLoader();
loader.load(
    "assets/models/relogio_black.glb",
    (relogio3d) => {
        relogio = relogio3d.scene;
        cena.add(relogio); 
        const config = configurarResponsividade();
        relogio.scale.setScalar(config.escala);
        relogio.position.y = config.posicaoY;
        relogio.position.z = config.posicaoZ;

        camera.fov = config.fov;
        camera.updateProjectionMatrix();
        animarRelogio(); //Segue as instruções do ScrollTrigger do gsap para se movimentar no cenário
    },
    undefined,
    (erro) => console.error("Erro ao carregar o modelo:", erro)
);

animarIntroSaida(); 
animarImagemSaida();
animarVendaSaida();

//Funções para animação
function animarRelogio(){
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".secHistoria",
            start: "top bottom",
            endTrigger: ".rodape",
            end: "bottom top",
            scrub: 1,
        }
    });

    tl.to(relogio.rotation, {
        y: -1,
        x: -0.5,
        
    })
    .to(relogio.rotation, {
        y: 1,
        x: -0.5,
        ease: "power1.inOut",
        duration: 1,
    })
    .to(relogio.rotation, {
        y: 0,
        x: 0,
    })
    .to(relogio.position, {
        z: 0.2,
    })
    .to(relogio.rotation, {
        y: 0,
        x: 0,
    })
    .to(relogio.rotation, {
        y: 1,
        x: 0,
    })
    .to(relogio.position, {
        z: -4,
        x: -4,
    }) 
    .to(relogio.rotation, {
        y: -1,
    }) 
    .to(relogio.position, {
        z: -4,
        x: -5,
        y: 1.3,
    }, "<"); 
}
function animarIntroSaida(){
    gsap.to(".container_introducao h1", {
        y: -200,       
        opacity: 0,      
        scrollTrigger: {
            trigger: ".secHistoria",
            start: "top bottom",
            end: "top center",  
            scrub: 1,
        }
    });
}
function animarHistoriaDoisSaida(){
    gsap.to(".container_historia", {
        y: -200,       
        opacity: 0,      
        scrollTrigger: {
            trigger: ".secHistoriaDois",
            start: "top bottom",
            end: "top center",  
            scrub: 1,
        }
    });
}
function animarImagemSaida(){
    gsap.to(".container_historia", {
        y: -200,       
        opacity: 0,      
        scrollTrigger: {
            trigger: ".secImagens",
            start: "top bottom",
            end: "top center",  
            scrub: 1,
        }
    });
}
function animarVendaSaida(){
    gsap.to(".container_imagens", {
        y: -200,       
        opacity: 0,      
        scrollTrigger: {
            trigger: ".secVenda",
            start: "top bottom",
            end: "top center",  
            scrub: 1,
        }
    });
}

//Função para resposividade do modelo 3d
function configurarResponsividade(){
    const largura = window.innerWidth;

    if (largura < 600) {
        // celular
        return {
            escala: 0.6,
            posicaoY: 1.2,
            posicaoZ: -2.5,
            fov: 50,
        };
    } else {
        // pc
        return {
            escala: 1,
            posicaoY: 1,
            posicaoZ: -3,
            fov: 45,
        };
    }
}

//Função para acionar as animações junto com a cena e a camera
function animar() {
    //A função será funcionará de acordo com a quantidade de frame do usuário 
    requestAnimationFrame(animar);
    render.render(cena, camera);
}
animar();

