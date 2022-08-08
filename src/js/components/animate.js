export const animate = () => {
  const animationList = document.querySelector('.animation__list')

  const data = [
    { imgUrl: 'img/flag1.svg', name: 'flag' },
    { imgUrl: 'img/flag3.svg', name: 'flag' },
    { imgUrl: 'img/flag2.svg', name: 'flag' },
    { imgUrl: 'img/flag1.svg', name: 'flag' },
    { imgUrl: 'img/flag1.svg', name: 'flag' },
  ]

  data.forEach((item) => {
    const url = `
      <li class="animation__item animation__item-hidden">
        <img src="${item.imgUrl}" alt="${item.name}" />
      </li>
    `

    animationList.insertAdjacentHTML('beforeend', url)
  })

  let ms = 3000

  Array.from(animationList.children).forEach((item) => {
    ms += 400

    setTimeout(() => {
      item.classList.remove('animation__item-hidden')
      setTimeout(() => {
        animateBy()
      }, ms - 3000)
    }, ms)
  })
}

function animateBy() {
  const animationlist = document.querySelector('.animation__list')
  animationlist.style.animation = '2s ease-in-out infinite rot'
}
