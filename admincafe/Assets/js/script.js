function toggleMenu() {
    let sidemenu = document.getElementById('side-menu');
    let header = document.getElementById('header');
    let container = document.getElementById('container');
    let hidden = document.getElementById('hidden-btn');
    let lgcont = document.getElementById('lg-cont');

    if((sidemenu.classList.contains('side-menu-closed') == true) && (header.classList.contains('header-closed') == true) && (container.classList.contains('container-closed') == true)) {
        if((hidden.classList.contains('btn-show') == true) && (lgcont.classList.contains('lg-cont-hide') == true)) {
        container.classList.remove('container-closed');
        hidden.classList.remove('btn-show');
        lgcont.classList.remove('lg-cont-hide');
        sidemenu.classList.remove('side-menu-closed');
        header.classList.remove('header-closed');
        console.log(`side-menu, header e container foram abertos.`)
    }} else {
        container.classList.add('container-closed');
        hidden.classList.add('btn-show');
        lgcont.classList.add('lg-cont-hide');
        sidemenu.classList.add('side-menu-closed');
        header.classList.add('header-closed');
        console.log(`side-menu, header e container foram fechados.`)
    }
}