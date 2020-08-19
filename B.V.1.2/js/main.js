$('.slide-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplayspeed: 2000
});

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', e => {
            if (e.target.id == modalID || e.target.classList == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}
const botao = document.getElementById('botaoContato');
botao.addEventListener('click', () => iniciaModal('modal-formulario'));