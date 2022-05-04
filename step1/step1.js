import * as THREE from 'https://cdn.skypack.dev/three';
console.log(THREE);

window.onload = function(){
    const CanvasWrap = document.querySelector('div.canvas_wrap');

    /* STEP1 */
    //장면생성
    const scene = new THREE.Scene();
    //카메라세팅 PerspectiveCamera( 시야(fov), 종횡비, 근거리(near), 원거리(far) )
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //렌더러 변수생성
    const renderer = new THREE.WebGLRenderer();
    //렌더러 사이즈
    renderer.setSize(window.innerWidth, window.innerHeight);
    //지정된 DOM 요소에 canvas DOM 생성
    CanvasWrap.appendChild( renderer.domElement );
}
