// tg
const tgBolder = document.querySelector('.tgBolder')
const tgItalic = document.querySelector('.tgItalic')
const tgInvis = document.querySelector('.tgInvis')

// inputs
const bolder = document.querySelector('.bolder')
const italic = document.querySelector('.italic')
const invis = document.querySelector('.invis')

// buttons
const btnBolder = document.querySelector('.btnBolder')
const btnItalic = document.querySelector('.btnItalic')
const btnInvis = document.querySelector('.btnInvis')

// texts
const bolderText = document.querySelector('.bolderText')
const italicText = document.querySelector('.italicText')
const invisText = document.querySelector('.invisText')

const dataBolder = []
btnBolder.addEventListener('click', () => {
    if(bolder.value.includes('**')){
        dataBolder.push(bolder.value)
        const test = dataBolder.toString()
        if(test.startsWith('**') && test.endsWith('**')) {
            const testReplaceValue = '**'
            const testReplace = test.replace(testReplaceValue, '')
            const testReplace2 = testReplace.replace(testReplaceValue, '')
            bolderText.style.fontWeight = '900'
            bolderText.textContent = testReplace2
        }
        else{
            bolderText.textContent = 'Error'
        }
    }
})

const dataItalic = []
btnItalic.addEventListener('click', () => {
    if(italic.value.includes('__')){
        dataItalic.push(italic.value)
        const test = dataItalic.toString()
        if(test.startsWith('__') && test.endsWith('__')) {
            const testReplaceValue = '__'
            const testReplace = test.replace(testReplaceValue, '')
            const testReplace2 = testReplace.replace(testReplaceValue, '')
            italicText.style.fontStyle = 'Italic'
            italicText.textContent = testReplace2
        }
        else{
            italicText.textContent = 'Error'
        }
    }
})


const dataInvis = []
btnInvis.addEventListener('click', () => {
    if(invis.value.includes('||')){
        dataInvis.push(invis.value)
        const test = dataInvis.toString()
        if(test.startsWith('||') && test.endsWith('||')) {
            const testReplaceValue = '||'
            const testReplace = test.replace(testReplaceValue, '')
            const testReplace2 = testReplace.replace(testReplaceValue, '')
            // invisText.style.filter = 'blur(1.6px)'
            invisText.style.cursor = 'pointer'
            invisText.textContent = testReplace2
            invisText.addEventListener('click', (e) => {
                invisText.classList.toggle('invisText2')
                // if(e.target.style.filter == 'blur(1.6px)') {
                //     invisText.style.filter = 'blur(0px)'
                // }
                // else{
                //     invisText.style.filter = 'blur(1.6px)'
                // }
            })
        }
        else{
            invisText.textContent = 'Error'
        }
    }
})