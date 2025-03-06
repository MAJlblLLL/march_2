function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

document.getElementById("submit").addEventListener("click", async function () {
	const input = document.getElementById("answer").value

	if (input === "26 06 2023") {
		document.getElementById("answer").value = "Умничка моя"
		document.getElementById("answer").style.backgroundColor = "green"
		let resetBtn = document.getElementById("submit")
		let resetTb = document.getElementById("answer")
		resetBtn.disabled = "disabled"
		resetTb.disabled = "disabled"
	} else {
		for (let i = 0; i < 3; i++) {
			document.getElementById("answer").value = "Не понял..."
			document.getElementById("answer").style.backgroundColor = "#851d1d"
			await sleep(300)
			document.getElementById("answer").style.backgroundColor = "#e4aeb4"
			await sleep(300)
			document.getElementById("answer").style.backgroundColor = "#851d1d"
		}
	}
})

document.getElementById("submit_two").addEventListener("click", async function () {
	const inputs = document.getElementById("answer_two").value

	if (inputs === "622") {
		document.getElementById("answer_two").value = "Моя ты бусинка"
		document.getElementById("answer_two").style.backgroundColor = "green"
		let resetBtn = document.getElementById("submit_two")
		let resetTb = document.getElementById("answer_two")
		resetBtn.disabled = "disabled"
		resetTb.disabled = "disabled"
	} else {
		for (let i = 0; i < 3; i++) {
			document.getElementById("answer_two").value = "Не понял..."
			document.getElementById("answer_two").style.backgroundColor = "#851d1d"
			await sleep(300)
			document.getElementById("answer_two").style.backgroundColor = "#e4aeb4"
			await sleep(300)
			document.getElementById("answer_two").style.backgroundColor = "#851d1d"
		}
		document.querySelector(".zov").classList.remove("d-none")
		document.querySelector(".zov").classList.add("d-grid")
	}
})

document.getElementById("letsBody").addEventListener("click", function () {
	confirm("Ты точно уверена?")
	if ((confirm = "true")) {
		window.open("present.html")
	}
})
