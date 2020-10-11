import { getDataJs, getDataJsAllChildren } from './lib'

export default function nav() {
    const title = getDataJs('title')
    const pages = getDataJsAllChildren('pages')
    const navItems = getDataJsAllChildren('nav')

    navItems.forEach(addNavItemLogic)

    function addNavItemLogic(navItem) {
        navItem.addEventListener('click', (event) => {
            const clickedBtn = event.currentTarget
            const targetPageName = clickedBtn.dataset.name

            updateTitle(targetPageName)
            updateMain(targetPageName)
            updateNavItems(clickedBtn)
        })
    }

    function updateTitle(name) {
        title.innerText = name
    }

    function updateMain(targetPageName) {
        pages.forEach(page => {
            page.classList.toggle('d-none', page.dataset.name !== targetPageName)
        })
    }

    function updateNavItems(clickedBtn) {
        navItems.forEach(navItem => {
            navItem.classList.toggle('active', navItem.dataset.name === clickedBtn.dataset.name)
        })
    }
}