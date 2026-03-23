// AOS
AOS.init({ duration: 900, once: true });

// 3D
const canvas = document.getElementById("bg3d");

if (canvas) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geo = new THREE.TorusKnotGeometry(2, 0.6, 100, 16);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x6366f1,
    wireframe: true
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(10,10,10);
  scene.add(light);

  camera.position.z = 6;

  function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.003;
    mesh.rotation.y += 0.004;
    renderer.render(scene, camera);
  }
  animate();
}

// TYPING (SLOW)
const words = ["Web Developer","BCA Student","Tech Enthusiast"];
let i=0,j=0,text="",del=false;

function type(){
  let el=document.getElementById("typing");
  if(!el) return;

  if(!del){
    text=words[i].substring(0,j++);
    if(j>words[i].length) del=true;
  } else{
    text=words[i].substring(0,j--);
    if(j<0){ del=false; i=(i+1)%words.length; }
  }

  el.innerHTML=text;
  setTimeout(type, del?100:220);
}
type();

// FORM
document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  document.getElementById("formMsg").innerText="Message sent!";
});

// INTRO FIXED
window.onload=function(){

  const logo=document.getElementById("introLogo");
  const nav=document.getElementById("navLogo");
  const intro=document.getElementById("intro");

  if(!logo||!nav||!intro) return;

  setTimeout(()=>{
    let pos=nav.getBoundingClientRect();

    logo.style.top=pos.top+pos.height/2+"px";
    logo.style.left=pos.left+pos.width/2+"px";
    logo.style.transform="translate(-50%,-50%) scale(0.5)";
  },1500);

  setTimeout(()=>{
    intro.style.opacity="0";
  },2600);

  setTimeout(()=>{
    intro.style.display="none";
  },3200);
};