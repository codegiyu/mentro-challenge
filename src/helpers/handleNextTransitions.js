import DATA from "../data/data"

const handleNextTransitions = (
  setStarsProps, index, namePlate0, namePlate1, centerImg0, centerImg1, rating0, rating1, stars0, stars1,
  job0, job1, desc0, desc1, button0, button1, name0, name1,
  ) => {
  let newIndex = index - 1 >= 0 ? index - 1 : 4
  const background = DATA[newIndex].darkGreen ? "#609B6C" : "#4CAF50"

  if (rating0.current !== null) {
    if (rating0.current.getAttribute("data-status") === "active") {
      rating0.current.dataset.status = "inactive-from-next"
      rating1.current.dataset.status = "ready-for-next"
      stars0.current.dataset.status = "inactive-from-next"
      stars1.current.dataset.status = "ready-for-next"
      name0.current.dataset.status = "inactive-from-next"
      name1.current.dataset.status = "ready-for-next"
      job0.current.dataset.status = "inactive-from-next"
      job1.current.dataset.status = "ready-for-next"
      desc0.current.dataset.status = "inactive-from-next"
      desc1.current.dataset.status = "ready-for-next"
      button0.current.dataset.status = "inactive-from-next"
      button1.current.dataset.status = "ready-for-next"
      centerImg0.current.dataset.status = "inactive-from-next"
      namePlate0.current.dataset.status = "inactive-from-next"
      namePlate1.current.dataset.status = "ready-for-next"
  
      rating1.current.innerHTML = DATA[newIndex].rating
      setStarsProps((prevState) => {
        return { ...prevState, rating1: { rating: DATA[newIndex].rating, dark: DATA[newIndex].darkGreen } }
      })
      name1.current.innerHTML = DATA[newIndex].name
      job1.current.innerHTML = DATA[newIndex].job
      desc1.current.innerHTML = DATA[newIndex].description
      button1.current.style.background = background
      centerImg1.current.src = DATA[newIndex].image
      centerImg1.current.setAttribute("alt", DATA[newIndex].name)
      namePlate1.current.children[0].innerHTML = DATA[newIndex].name
  
      setTimeout(() => {
        rating1.current.dataset.status = "active"
        stars1.current.dataset.status = "active"
        name1.current.dataset.status = "active"
        job1.current.dataset.status = "active"
        desc1.current.dataset.status = "active"
        button1.current.dataset.status = "active"
        centerImg1.current.dataset.status = "active"
        namePlate1.current.dataset.status = "active"
      })
    } else {
      rating1.current.dataset.status = "inactive-from-next"
      rating0.current.dataset.status = "ready-for-next"
      stars1.current.dataset.status = "inactive-from-next"
      stars0.current.dataset.status = "ready-for-next"
      name1.current.dataset.status = "inactive-from-next"
      name0.current.dataset.status = "ready-for-next"
      job1.current.dataset.status = "inactive-from-next"
      job0.current.dataset.status = "ready-for-next"
      desc1.current.dataset.status = "inactive-from-next"
      desc0.current.dataset.status = "ready-for-next"
      button1.current.dataset.status = "inactive-from-next"
      button0.current.dataset.status = "ready-for-next"
      centerImg1.current.dataset.status = "inactive-from-next"
      namePlate1.current.dataset.status = "inactive-from-next"
      namePlate0.current.dataset.status = "ready-for-next"
  
      rating0.innerHTML = DATA[newIndex].rating
      setStarsProps((prevState) => {
        return { ...prevState, rating0: { rating: DATA[newIndex].rating, dark: DATA[newIndex].darkGreen } }
      })
      name0.current.innerHTML = DATA[newIndex].name
      job0.current.innerHTML = DATA[newIndex].job
      desc0.current.innerHTML = DATA[newIndex].description
      button0.current.style.background = background
      centerImg0.current.src = DATA[newIndex].image
      centerImg0.current.setAttribute("alt", DATA[newIndex].name)
      namePlate0.current.children[0].innerHTML = DATA[newIndex].name
  
      setTimeout(() => {
        rating0.current.dataset.status = "active"
        stars0.current.dataset.status = "active"
        name0.current.dataset.status = "active"
        job0.current.dataset.status = "active"
        desc0.current.dataset.status = "active"
        button0.current.dataset.status = "active"
        centerImg0.current.dataset.status = "active"
        namePlate0.current.dataset.status = "active"
      })
    }
  }
}

export default handleNextTransitions