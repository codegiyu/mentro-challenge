import DATA from "../data/data"

const handleNextTransitions = (
  index, namePlate0, namePlate1, centerImg0, centerImg1, rating0, rating1, stars0, stars1, name0, name1, button0Status, button1Status,
    job0, job1, desc0, desc1, buttonBg0, buttonBg1, rating0Status, rating1Status, stars0Status, stars1Status, name0Status, name1Status,
    job0Status, job1Status, desc0Status, desc1Status, centerImg0Status, centerImg1Status, namePlate0Status, namePlate1Status
  ) => {
  let newIndex = index - 1 >= 0 ? index - 1 : 4
  const background = DATA[newIndex].darkGreen ? "#609B6C" : "#4CAF50"

  if (rating0Status.current === "active") {
    rating0Status.current = "inactive-from-next"
    rating1Status.current = "ready-for-next"
    stars0Status.current = "inactive-from-next"
    stars1Status.current = "ready-for-next"
    name0Status.current = "inactive-from-next"
    name1Status.current = "ready-for-next"
    job0Status.current = "inactive-from-next"
    job1Status.current = "ready-for-next"
    desc0Status.current = "inactive-from-next"
    desc1Status.current = "ready-for-next"
    button0Status.current = "inactive-from-next"
    button1Status.current = "ready-for-next"
    centerImg0Status.current = "inactive-from-next"
    namePlate0Status.current = "inactive-from-next"
    namePlate1Status.current = "ready-for-next"

    rating1.current = DATA[newIndex].rating
    stars1.current = { rating: DATA[newIndex].rating, dark: DATA[newIndex].darkGreen }
    name1.current = DATA[newIndex].name
    job1.current = DATA[newIndex].job
    desc1.current = DATA[newIndex].description
    buttonBg1.current = background
    centerImg1.current = [DATA[newIndex].image, DATA[newIndex].name]
    namePlate1.current = DATA[newIndex].name

    setTimeout(() => {
      rating1Status.current = "active"
      stars1Status.current = "active"
      name1Status.current = "active"
      job1Status.current = "active"
      desc1Status.current = "active"
      button1Status.current = "active"
      centerImg1Status.current = "active"
      namePlate1Status.current = "active"
    })
  } else {
    rating1Status.current = "inactive-from-next"
    rating0Status.current = "ready-for-next"
    stars1Status.current = "inactive-from-next"
    stars0Status.current = "ready-for-next"
    name1Status.current = "inactive-from-next"
    name0Status.current = "ready-for-next"
    job1Status.current = "inactive-from-next"
    job0Status.current = "ready-for-next"
    desc1Status.current = "inactive-from-next"
    desc0Status.current = "ready-for-next"
    button1Status.current = "inactive-from-next"
    button0Status.current = "ready-for-next"
    centerImg1Status.current = "inactive-from-next"
    namePlate1Status.current = "inactive-from-next"
    namePlate0Status.current = "ready-for-next"

    rating0.current = DATA[newIndex].rating
    stars0.current = { rating: DATA[newIndex].rating, dark: DATA[newIndex].darkGreen }
    name0.current = DATA[newIndex].name
    job0.current = DATA[newIndex].job
    desc0.current = DATA[newIndex].description
    buttonBg0.current = background
    centerImg0.current = [DATA[newIndex].image, DATA[newIndex].name]
    namePlate0.current = DATA[newIndex].name

    setTimeout(() => {
      rating0Status.current = "active"
      stars0Status.current = "active"
      name0Status.current = "active"
      job0Status.current = "active"
      desc0Status.current = "active"
      button0Status.current = "active"
      centerImg0Status.current = "active"
      namePlate0Status.current = "active"
    })
  }
}

export default handleNextTransitions