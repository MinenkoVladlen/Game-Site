const theStory = document.querySelector('.header_the_story'),
    headerMenu = document.querySelector('.header_menu'),
    about = document.getElementById('about'),
    features = document.getElementById('features'),
    system = document.getElementById('system'),
    quotos = document.getElementById('quotos'),
    buttonLanguageLink = document.querySelector('.header_menu_language_link'),
    headerMenuLanguageSelect = document.querySelector('.header_menu_language_select'),
    headerMenuLanguageThis = document.querySelector('.header_menu_language_this'),
    burger = document.querySelector('.burger');

function slideDown(event) {
    event.preventDefault();
    const target = event.target.innerHTML.toLowerCase();
    if (target == 'about') {
        about.scrollIntoView({block: "center", behavior: "smooth"});
    } else if (target == 'game features') {
        features.scrollIntoView({block: "center", behavior: "smooth"});
    } else if (target == 'system requirements') {
        system.scrollIntoView({block: "center", behavior: "smooth"});
    } else if (target == 'quotes') {
        quotos.scrollIntoView({block: "center", behavior: "smooth"});
    } else if (target == 'the story') {
        about.scrollIntoView({block: "center", behavior: "smooth"});
    }
}

function openLanguage(event) {
    const target = event.target;
    if (target.classList.value === 'header_menu_language_link' || target.classList.value === 'header_menu_language_this') {
        headerMenuLanguageSelect.classList.toggle('active')
    } else if (event.target.closest('.header_menu_name_language')) {
        const nameLang = headerMenuLanguageThis.innerHTML;
        headerMenuLanguageThis.innerHTML = target.textContent;
        target.textContent = nameLang;
        headerMenuLanguageSelect.classList.toggle('active')
    } else {
        headerMenuLanguageSelect.classList.remove('active');
    }
}

function openMenu() {
    headerMenu.classList.toggle('active_flex');
}

theStory.addEventListener('click', slideDown);
headerMenu.addEventListener('click', slideDown);
headerMenu.addEventListener('click', openMenu);
buttonLanguageLink.addEventListener('click', openLanguage);
burger.addEventListener('click', openMenu)
