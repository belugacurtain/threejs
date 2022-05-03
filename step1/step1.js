import * as THREE from 'https://cdn.skypack.dev/three@0.140.0';
console.log(THREE);

window.onload = function(){
    const canvas = document.querySelector("canvas.step1");

    const scene = new THREE.Scene();
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const mesh = new THREE.Mesh(geometry, material);

    const sizes = {
        width: 800,
        height: 800
    };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

    camera.position.z = 50;
    scene.add(mesh, camera);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

}
