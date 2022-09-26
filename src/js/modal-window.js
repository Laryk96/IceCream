(() => {
  //перменные (константы), которые связываны с элементами, на которых есть соответствующие атрибуты
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  //эдвэнтлистэнэр, который при клике активирует функцию "переключения"
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  //функция переключения классов
  function toggleModal() {
    //вешает на боди 'modal-open'
    document.body.classList.toggle("modal-open");
    //вешает на бєкдроп 'is-hidden'
    refs.backdrop.classList.toggle("is-hidden");
  }
})();
