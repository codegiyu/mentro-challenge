import DATA from "../data/data"

const handlePrevTransitions = (
  index, namePlate0, namePlate1, centerImg0, centerImg1, rating0, rating1, stars0, stars1, name0, name1, button0Status, button1Status,
    job0, job1, desc0, desc1, buttonBg0, buttonBg1, rating0Status, rating1Status, stars0Status, stars1Status, name0Status, name1Status,
    job0Status, job1Status, desc0Status, desc1Status, centerImg0Status, centerImg1Status, namePlate0Status, namePlate1Status
  ) => {
    let newIndex = index + 1 <= 4 ? index + 1 : 0
    const background = DATA[newIndex].darkGreen ? "#609B6C" : "#4CAF50"
    console.log(newIndex, background)

  if (rating0Status.current === "active") {
    rating0Status.current = "inactive-from-prev"
    rating1Status.current = "ready-for-prev"
    stars0Status.current = "inactive-from-prev"
    stars1Status.current = "ready-for-prev"
    name0Status.current = "inactive-from-prev"
    name1Status.current = "ready-for-prev"
    job0Status.current = "inactive-from-prev"
    job1Status.current = "ready-for-prev"
    desc0Status.current = "inactive-from-prev"
    desc1Status.current = "ready-for-prev"
    button0Status.current = "inactive-from-prev"
    button1Status.current = "ready-for-prev"
    centerImg0Status.current = "inactive-from-prev"
    namePlate0Status.current = "inactive-from-prev"
    namePlate1Status.current = "ready-for-prev"

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
    rating1Status.current = "inactive-from-prev"
    rating0Status.current = "ready-for-prev"
    stars1Status.current = "inactive-from-prev"
    stars0Status.current = "ready-for-prev"
    name1Status.current = "inactive-from-prev"
    name0Status.current = "ready-for-prev"
    job1Status.current = "inactive-from-prev"
    job0Status.current = "ready-for-prev"
    desc1Status.current = "inactive-from-prev"
    desc0Status.current = "ready-for-prev"
    button1Status.current = "inactive-from-prev"
    button0Status.current = "ready-for-prev"
    centerImg1Status.current = "inactive-from-prev"
    namePlate1Status.current = "inactive-from-prev"
    namePlate0Status.current = "ready-for-prev"

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

  // if (stars0Style.opacity === 1) {
  //   setStars0Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 300ms ease-in" }
  //   })
  //   setStars1Style((prevState) => {
  //     return { ...prevState, transition: "none", transform: "scale(0.2) translateY(-1rem)" }
  //   })
  //   stars1.current = { rating: DATA[newIndex].rating, dark: DATA[newIndex].darkGreen }
  //   setTimeout(() => {
  //     setStars1Style((prevState) => {
  //       return { ...prevState, opacity: 1, transform: "scale(1) translateY(0)", transition: "all 500ms ease-in" }
  //     })
  //   })
  // } else {
  //   setStars1Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 300ms ease-in" }
  //   })
  //   setStars0Style((prevState) => {
  //     return { ...prevState, transition: "none", transform: "scale(0.2) translateY(-1rem)" }
  //   })
  //   stars0.current = { rating: DATA[newIndex].rating, dark: DATA[newIndex].darkGreen }
  //   setTimeout(() => {
  //     setStars0Style((prevState) => {
  //       return { ...prevState, opacity: 1, transform: "scale(1) translateY(0)", transition: "all 500ms ease-in" }
  //     })
  //   })
  // }

  // if (name0Style.opacity === 1) {
  //   setName0Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 100ms ease-in", left: "1rem", top: "1rem" }
  //   })
  //   setName1Style((prevState) => {
  //     return { ...prevState, transition: "none", left: "1rem", top: "1rem" }
  //   })
  //   name1.current = nameArray[newIndex]
  //   setTimeout(() => {
  //     setName1Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", left: "0rem", top: "0.625rem", opacity: 1 }
  //     })
  //   })
  // } else {
  //   setName1Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 100ms ease-in", left: "1rem", top: "1rem" }
  //   })
  //   setName0Style((prevState) => {
  //     return { ...prevState, transition: "none", left: "1rem", top: "1rem" }
  //   })
  //   name0.current = nameArray[newIndex]
  //   setTimeout(() => {
  //     setName0Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", left: "0rem", top: "0.625rem", opacity: 1 }
  //     })
  //   })
  // }

  // if (job0Style.opacity === 1) {
  //   setJob0Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 100ms ease-in", left: "1rem", top: "1rem" }
  //   })
  //   setJob1Style((prevState) => {
  //     return { ...prevState, transition: "none", left: "1rem", top: "1rem" }
  //   })
  //   job1.current = jobArray[newIndex]
  //   setTimeout(() => {
  //     setJob1Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", left: "0rem", top: "0.375rem", opacity: 1 }
  //     })
  //   })
  // } else {
  //   setJob1Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 100ms ease-in", left: "1rem", top: "1rem" }
  //   })
  //   setJob0Style((prevState) => {
  //     return { ...prevState, transition: "none", left: "1rem", top: "1rem" }
  //   })
  //   job0.current = jobArray[newIndex]
  //   setTimeout(() => {
  //     setJob0Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", left: "0rem", top: "0.375rem", opacity: 1 }
  //     })
  //   })
  // }

  // if (desc0Style.opacity === 1) {
  //   setDesc0Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 100ms ease-in", left: "1rem", top: "1rem" }
  //   })
  //   setDesc1Style((prevState) => {
  //     return { ...prevState, transition: "none", left: "1rem", top: "1rem" }
  //   })
  //   desc1.current = descArray[newIndex]
  //   setTimeout(() => {
  //     setDesc1Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", left: "0rem", top: "0.3rem", opacity: 1 }
  //     })
  //   })
  // } else {
  //   setDesc1Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 100ms ease-in", left: "1rem", top: "1rem" }
  //   })
  //   setDesc0Style((prevState) => {
  //     return { ...prevState, transition: "none", left: "1rem", top: "1rem" }
  //   })
  //   desc0.current = descArray[newIndex]
  //   setTimeout(() => {
  //     setDesc0Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", left: "0rem", top: "0.3rem", opacity: 1 }
  //     })
  //   })
  // }

  // if (button0Style.opacity === 1) {
  //   setButton0Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 800ms ease-in", zIndex: 8 }
  //   })
  //   setButton1Style((prevState) => {
  //     return { ...prevState, transition: "none", transform: "scale(0.4)", opacity: 1 }
  //   })
  //   buttonBg1.current = background
  //   setTimeout(() => {
  //     setButton1Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", transform: "scale(1)", zIndex: 7 }
  //     })
  //   })
  // } else {
  //   setButton1Style((prevState) => {
  //     return { ...prevState, opacity: 0, transition: "all 800ms ease-in", zIndex: 8 }
  //   })
  //   setButton0Style((prevState) => {
  //     return { ...prevState, transition: "none", transform: "scale(0.4)", opacity: 1 }
  //   })
  //   buttonBg0.current = background
  //   setTimeout(() => {
  //     setButton0Style((prevState) => {
  //       return { ...prevState, transition: "all 500ms ease-in", transform: "scale(1)", zIndex: 7 }
  //     })
  //   })
  // }
}

export default handlePrevTransitions