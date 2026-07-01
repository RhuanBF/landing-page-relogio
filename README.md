# Vanguard

A Vanguard é uma landing page desenvolvida com o objetivo de unir design moderno e interatividade, apresentando a marca de forma direta, objetiva e visualmente marcante. O projeto utiliza HTML5, CSS e JavaScript, combinando as bibliotecas GSAP e Three.js para entregar animações fluidas e elementos 3D dentro de uma experiência de rolagem única.

![Vanguard Preview](./assets/img/Captura%20de%20tela%202026-07-01%20195043.png)

O GSAP é responsável pelas animações dos elementos da página através do ScrollTrigger, criando transições suaves conforme o usuário rola a tela. Já o Three.js projeta elementos 3D utilizando WebGL, adicionando profundidade e dinamismo à interface. Juntas, essas tecnologias transformam a navegação em uma verdadeira experiência interativa, e não apenas em uma simples passagem pelo site.

## Bibliotecas utilizadas

```html
<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Three.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```