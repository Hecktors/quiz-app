import { getDataJs } from './lib'
export default function darkMode() {
    const body = getDataJs('body')
    const button = getDataJs('dark-mode')

    button.addEventListener('click', addButtonLogic)

    function addButtonLogic() {
        console.log('clicik')
        body.classList.toggle('dark-mode')
    }

}