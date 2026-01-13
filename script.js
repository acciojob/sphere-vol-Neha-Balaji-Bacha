const radius = document.querySelector("#radius");
const volume = documnet.querSelector("#volume");
let result;
function volume_sphere() {
    let r = radius.value;
	if(r >= 0 && (!isNaN)){
		result = Math.round((Math.floor(4/3)) / 3.14 * Math.pow(r,3));
	}
   return result;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
