import { getDataJsAllChildren } from './lib'

export default function card() {
    const cards = getDataJsAllChildren('cards')

    cards.forEach(addCardLogic)
}

function addCardLogic(card) {
    const bookmark = card.querySelector('[data-js="bookmark"]')

    addBookmarkLogic(bookmark)
}

function addBookmarkLogic(bookmark) {
    bookmark.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle("marked")
    })
}