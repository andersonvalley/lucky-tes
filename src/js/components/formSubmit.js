export const formSubmit = () => {
  const form = document.forms.search
  const error = document.querySelector('.error')

  if (!form) return

  validateInput(form.elements.searchInput, error)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const { searchInput } = Object.fromEntries(new FormData(e.target).entries())
    if (searchInput.length < 4 || searchInput.length > 12) {
      error.innerHTML = 'Минимальная длина: 4, максимальная: 12'
      return
    }

    form.reset()
  })
}

function validateInput(input, error) {
  const regex = /[!@#$%^&*()]/g

  input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(regex, '')

    if (e.target.value.length >= 4) {
      error.innerHTML = ''
    }
  })
}
