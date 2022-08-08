export function openMenu() {
  const burger = document.querySelector('.burger')
  const headerContainer = document.querySelector('.header__container')

  function showMenu() {
    burger.classList.add('burger--active')
    headerContainer.classList.add('header-mobile')
    document.body.style.overflow = 'hidden'
  }

  function closeMenu() {
    burger.classList.remove('burger--active')
    headerContainer.classList.remove('header-mobile')
    document.body.style.overflow = ''
  }

  if (burger) {
    burger.addEventListener('click', () => {
      if (burger.classList.contains('burger--active')) {
        closeMenu()
        return
      }

      showMenu()
    })
  }
}