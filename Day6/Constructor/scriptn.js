const heading = document.getElementById('hea')
console.log(heading.innerText)
heading.innerText ='hello'

heading.setAttribute('class','min-Heading')
console.log(heading.getAttribute('id'))
heading.removeAttribute('id')
console.log(heading)

const np = document.createElement('p')
np.innerText ='hello para'
console.log(np)

// document.body.removeChild(np)


