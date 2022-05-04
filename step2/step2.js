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

    /* STEP2 */
    //객체생성 ( BoxGeometry = 박스객체 )
    const geometry = new THREE.BoxGeometry();
    //재료생성 ( MeshBasicMaterial = 기본재료(색상) )
    //재료생성 ( MeshLambertMaterial = 기본재료(빛을 받을 수 있음) )
    const materiral = new THREE.MeshBasicMaterial({color:0xffffff});
    //큐브변수 ( Mesh = 생성한 객체에 재료 적용(혼합) )
    const cube = new THREE.Mesh(geometry, materiral);
    //기존에 만든 장면에 큐브 삽입
    scene.add(cube);
    //기존에 생성한 카메라 z축 각도 조절
    camera.position.z = 5;

    console.dir(scene);
    console.dir(camera);
    console.dir(cube);


    function animate(){
        //requestAnimationFrame를 사용, 화면 새로고침시 마다 렌더러변수가 장면을 그릴수 있게 만들어주기
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        //렌더러 변수 렌더링하기(장면, 카메라)
        renderer.render(scene, camera);
    }
    animate();
}
