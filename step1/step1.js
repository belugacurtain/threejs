import * as THREE from 'https://cdn.skypack.dev/three@0.140.0';
console.log(THREE);

window.onload = function(){
    const step1 = document.querySelector('div.step1');

    //장면생성
    const scene = new THREE.Scene();

    //카메라세팅 PerspectiveCamera(시야, 종횡비, 근거리, 원거리)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //렌더러 변수생성
    const renderer = new THREE.WebGLRenderer();

    //렌더러 사이즈
    renderer.setSize(window.innerWidth, window.innerHeight);

    //지정된 DOM 요소에 canvas DOM 생성
    step1.appendChild( renderer.domElement );
}
