export function getDataJs(name) {
    return document.querySelector(`[data-js="${name}"]`)
}

export function getDataJsAll(name) {
    return document.querySelectorAll(`[data-js="${name}"]`)
}

export function getDataJsAllChildren(name) {
    return document.querySelectorAll(`[data-js="${name}"] > *`)
}

export function getDataJsInCompontent(component, name) {
    return component.querySelector(`[data-js="${name}"]`)
}