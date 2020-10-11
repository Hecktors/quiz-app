import { getDataJsAllChildren, getDataJsInCompontent } from './lib'

export default function card() {
    const cards = getDataJsAllChildren('cards')

    cards.forEach(addCardLogic)

    function addCardLogic(card) {
        const bookmark = getDataJsInCompontent(card, 'bookmark')
        const answerBtn = getDataJsInCompontent(card, 'answer-btn')
        const answer = getDataJsInCompontent(card, 'answer')

        addBookmarkLogic(bookmark)
        addAnswerBtnLogic(answerBtn, answer)
    }

    function addBookmarkLogic(bookmark) {
        bookmark.addEventListener('click', (event) => {
            event.currentTarget.classList.toggle("marked")
        })
    }

    function addAnswerBtnLogic(answerBtn, answer) {
        answerBtn.addEventListener('click', (event) => {
            answer.classList.toggle('full-opacity')
            const oldLabel = event.target.innerText.toLowerCase()
            event.target.innerText = oldLabel === 'show answer' ? 'hide answer' : 'show answer'
        })
    }
}