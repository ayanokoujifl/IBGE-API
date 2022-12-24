const body = document.querySelector('body')
body.style.background = '#000'
const select = document.querySelector('#combobox')

fetch(
  `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AC/municipios`
)
  .then((response) => response.json())
  .then((citys) => {
    citys.map((city) => {
      optionCity = document.createElement('option')
      select.appendChild(optionCity)
      optionCity.innerText = city.nome
    })
  })

const states = [
  { name: 'AC' },
  { name: 'AL' },
  { name: 'AP' },
  { name: 'AM' },
  { name: 'BA' },
  { name: 'CE' },
  { name: 'DF' },
  { name: 'ES' },
  { name: 'GO' },
  { name: 'MA' },
  { name: 'MT' },
  { name: 'MS' },
  { name: 'MG' },
  { name: 'PA' },
  { name: 'PB' },
  { name: 'PR' },
  { name: 'PE' },
  { name: 'PI' },
  { name: 'RJ' },
  { name: 'RN' },
  { name: 'RS' },
  { name: 'RO' },
  { name: 'RR' },
  { name: 'SC' },
  { name: 'SP' },
  { name: 'SE' },
  { name: 'TO' }
]

var selectState = document.querySelector('#uf')
states.map((state) => {
  let optionState = document.createElement('option')
  selectState.appendChild(optionState)
  optionState.innerText = state.name
})

function buscaCidades() {
  limpaSelect()
  console.log('vamo ver oq q ta selecionado')
  let opcaoTexto = selectState.options[selectState.selectedIndex].text
  console.log('beleza ' + opcaoTexto)
  const citys = fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${opcaoTexto}/municipios`
  ).then((response) => response.json())
  citys.then((citys) => {
    citys.map((city) => {
      optionCity = document.createElement('option')
      select.appendChild(optionCity)
      optionCity.innerText = city.nome
    })
  })
}

function limpaSelect() {
  let options = document.querySelectorAll('#combobox option')
  options.forEach((option) => {
    option.remove()
  })
}
