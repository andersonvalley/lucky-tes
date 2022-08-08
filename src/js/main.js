import { animate } from './components/animate'
import { openMenu } from './components/burger'
import { fetchData } from './components/fetchData'
import { formSubmit } from './components/formSubmit'

fetchData()

document.addEventListener('DOMContentLoaded', () => {
  animate()
  formSubmit()
  openMenu()
})
