function modalModule() {
	const modalTrigger = document.querySelectorAll("[data-modal]");
	const modal = document.querySelector(".modal");

	modalTrigger.forEach(btn => btn.addEventListener("click", openModal));

	modal.addEventListener("click", (e) => {
		if (e.target === modal || e.target.getAttribute("data-close") == "") {
			closeModal();
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal.matches(".show")) {
			closeModal();
		}
	});

	// const modalTimerId = setTimeout(openModal, 600000);

	function showModalByScroll() {
		if (window.scrollY >= 1000) {
			openModal();
			window.removeEventListener("scroll", showModalByScroll);
		}
		// if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
		// 	openModal();
		// 	window.removeEventListener("scroll", showModalByScroll);
		// }
	}

	window.addEventListener("scroll", showModalByScroll);

	function openModal() {
		modal.classList.add("show");
		modal.classList.remove("hide");
		document.body.style.overflow = "hidden";
		// clearTimeout(modalTimerId);
	}

	function closeModal() {
		modal.classList.remove("show");
		modal.classList.add("hide");
		document.body.removeAttribute("style");
	}
}

// module.exports = modalModule;
export default modalModule;