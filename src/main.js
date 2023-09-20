const list = document.getElementById('list')
var count = 0
var lastInput
createTextInput({key: 'Enter'})

function createTextInput(event) {
    if (event.key !== 'Enter') {
        return
    }

    //criar novo li
    let newLi = document.createElement('li')
    newLi.className = 'flex gap-2 mb-2 items-center'
    list.appendChild(newLi)

    //criar novo botão
    let newButton = document.createElement('button')
    newButton.id = `button_${count}`
    newButton.onclick = function(){
        if (this.parentNode.parentNode.childElementCount > 1) {
            this.parentNode.remove()
        }
    }
    
    newLi.appendChild(newButton)

    //criar novo icon
    let newIcon = document.createElement('span')
    newIcon.className = 'material-symbols-outlined text-red-600 opacity-80'
    newIcon.innerText = 'delete'
    newButton.appendChild(newIcon)

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

    lastInput.removeEventListener('keydown', createTextInput)
    newInput.addEventListener('keydown', createTextInput)

    lastInput = newInput
    lastInput.focus()
    count++
}
