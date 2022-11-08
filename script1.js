const container = document.querySelector(".data-container");
function generatebars(num = 20) {

	for (let i = 0; i < num; i += 1) {
		const value = Math.floor(Math.random() * 100) + 1;
		const bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.height = `${value * 3}px`;
		bar.style.transform = `translateX(${i * 30}px)`;
		const barLabel = document.createElement("label");
		barLabel.classList.add("bar__id");
		barLabel.innerHTML = value;
		bar.appendChild(barLabel);
		container.appendChild(bar);
	}
}
// Asynchronous function to perform "Shell Sort"
async function ShellSort(delay = 600) {
	let bars = document.querySelectorAll(".bar");
	for (var i = 10; i > 0; i = Math.floor(i / 2)) {
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);
		for (var j = i; j < 20; j++) {
			var temp = parseInt(
				bars[j].childNodes[0].innerHTML);
			var k;
			var temp1 = bars[j].style.height;
			var temp2 = bars[j].childNodes[0].innerText;

			for (k = j; k >= i && parseInt(bars[k - i].childNodes[0].innerHTML) > temp; k -= i) {
				bars[k].style.height = bars[k - i].style.height;
				bars[k].childNodes[0].innerText = bars[k - i].childNodes[0].innerText;

				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, 300)
				);
			}
			bars[j].style.backgroundColor = "darkblue";
			bars[k].style.backgroundColor = "red";
			bars[k].style.height = temp1;
			bars[k].childNodes[0].innerText = temp2;

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 600)
			);
			bars[j].style.backgroundColor = "rgb(0, 183, 255)";
			bars[k].style.backgroundColor = "rgb(255, 165, 0)";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);
		}
	}
	for (var x = 0; x < 20; x++) {
		bars[x].style.backgroundColor
			= "rgb(49, 226, 13)";
	}
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1")
		.style.backgroundColor = "#6f459e";

	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2")
		.style.backgroundColor = "#6f459e";

	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3")
		.style.backgroundColor = "#6f459e";
}
generatebars();
function generate() {
	window.location.reload();
}
function disable() {

	document.getElementById("Button1").disabled = true;
	document.getElementById("Button1")
		.style.backgroundColor = "#d8b6ff";

	document.getElementById("Button2").disabled = true;
	document.getElementById("Button2")
		.style.backgroundColor = "#d8b6ff";

	document.getElementById("Button3").disabled = true;
	document.getElementById("Button3")
		.style.backgroundColor = "#d8b6ff";
}