# Vanguard

A Vanguard é uma landing page desenvolvida com o objetivo de unir design moderno e interatividade, apresentando a marca de forma direta, objetiva e visualmente marcante. O projeto utiliza HTML5, CSS e JavaScript, combinando as bibliotecas GSAP e Three.js para entregar animações fluidas e elementos 3D dentro de uma experiência de rolagem única.

![Vanguard Preview](./assets/img/Captura%20de%20tela%202026-07-01%20195043.png)

O GSAP é responsável pelas animações dos elementos da página através do ScrollTrigger, criando transições suaves conforme o usuário rola a tela. Já o Three.js projeta elementos 3D utilizando WebGL, adicionando profundidade e dinamismo à interface. Juntas, essas tecnologias transformam a navegação em uma verdadeira experiência interativa, e não apenas em uma simples passagem pelo site.

## Bibliotecas utilizadas

```html
<!-- GSAP + ScrollTrigger -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>

<!-- Three.js -->
<script type="importmap">
{
"imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/"
}
}
</script>
```

Com esse projeto aprendi a mexer com o motor WebGL, compreendendo o espaço X, Y e Z de um modelo 3D e como cada eixo influencia na posição, rotação e escala dos elementos dentro da cena. Foi um aprendizado essencial para entender como o Three.js renderiza e manipula objetos tridimensionais dentro do navegador.
