export async function fetchData() {
  const url = 'https://baconipsum.com/api/?type=lucky'

  try {
    const response = await fetch(url)
    const data = await response.json()
    showData(data)
  } catch (error) {
    console.log(error)
    showData()
  }
}

const showData = (data) => {
  const descr = document.querySelector('.hero__descr')

  if (!data) {
    descr.innerHTML = 'Ошибка загрузки, попробуйте еще раз'
  }

  descr.innerHTML = data[0]
}
