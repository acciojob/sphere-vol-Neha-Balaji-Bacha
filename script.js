const radius = document.querySelector("#radius");
const volume = documnet.querSelector("#volume");
let result;
function volume_sphere() {
    let r = Number(radius.value);
	if(r < 0 && isNaN(r){
		result = NaN;
	}
    else{
		result = ((4/3) * Math.PI * Math.pow(r,3).toFixed(4));
	}
	volume.value = result;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
