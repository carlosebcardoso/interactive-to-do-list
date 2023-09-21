const list = document.getElementById('list')
var count = 0
var lastInput
createTextInput()

function checkEnterKey(event) {
    if (event.key === 'Enter') {
        createTextInput()
    }
}

function moveItem(item, direction) {
    let li = item.parentNode.parentNode
    if (direction === -1 && li.previousElementSibling) {
        li.parentNode.insertBefore(li, li.previousElementSibling)
    } else if (direction === 1 && li.nextElementSibling) {
        li.parentNode.insertBefore(li, li.nextElementSibling.nextElementSibling)
    }
}

function createTextInput() {
    //criar novo li
    let newLi = document.createElement('li')
    newLi.className = 'flex gap-2 mb-2 items-center'
    list.appendChild(newLi)

    //criar novo botão de delete
    let newButton = document.createElement('button')
    newButton.id = `button_${count}`
    newButton.className = 'material-symbols-outlined text-red-600 opacity-80 scale-[0.90]'
    newButton.innerText = 'delete'
    newButton.onclick = function(){
        if (this.parentNode.parentNode.childElementCount > 1) {
            this.parentNode.remove()
        }
    }
    newLi.appendChild(newButton)

    //criar nova div
    let newDiv = document.createElement('div')
    newDiv.className = 'flex flex-col'
    newLi.appendChild(newDiv)

    //criar novo botão de subir e descer
    let newUpButton = document.createElement('button')
    let newDownButton = document.createElement('button')

    function upDownButtons(button, str) {
        button.className = 'material-symbols-outlined scale-[0.7] text-gray-700'
        button.innerText = `keyboard_arrow_${str}`
        newDiv.appendChild(button)
    }
    upDownButtons(newUpButton, 'up')
    upDownButtons(newDownButton, 'down')

    newUpButton.addEventListener('click',() => moveItem(newUpButton, -1))
    newDownButton.addEventListener('click',() => moveItem(newDownButton, 1))

    //criar novo input
    let newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.className = 'outline-none bg-transparent border-gray-600 border-b-[1px] w-full'
    newInput.name = `item_${count}`
    newInput.id = `item_${count}`
    newLi.appendChild(newInput)

    //criar nova checkbox
    let newCheckBox = document.createElement('input')
    newCheckBox.type = 'checkbox'
    newCheckBox.name = `check_${count}`
    newCheckBox.id = `check_${count}`
    newLi.appendChild(newCheckBox)

    if (count == 0) {
        lastInput = newInput
    }

    lastInput.removeEventListener('keydown', checkEnterKey)
    newInput.addEventListener('keydown', checkEnterKey)

    lastInput = newInput
    lastInput.focus()
    count++
}
