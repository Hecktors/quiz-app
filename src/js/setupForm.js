import { getDataJs } from './lib'

export default function form() {
    const form = getDataJs('form')
    form.addEventListener('submit', addFormReset)

    function addFormReset(event) {
        event.preventDefault()
        form.reset();
    }
}