import DATA from "./data/data"
import { useEffect, useRef, useState } from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import ankita from "./images/ankita.png"
import keshav from "./images/keshav.png"
import saurav from "./images/saurav.png"
import saumya from "./images/saumya.png"
import prankur from "./images/prankur.png"
import { BsArrowDown } from "react-icons/bs"
import RatingStars from "./components/RatingStars"
import helpers from "./helpers"

function App() {
  const [index, setIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [imgRotation, setImgRotation] = useState(0)
  const [action, setAction] = useState("")

  const background = DATA[index].darkGreen ? "#609B6C" : "#4CAF50"
  const bigCircleBackground = DATA[index].darkGreen ? "#7ABD87" : "#C5F8C7"
  
  const namePlate0 = useRef(DATA[index].name)
  const namePlate1 = useRef("")
  const centerImg0 = useRef([DATA[index].image, DATA[index].name])
  const centerImg1 = useRef([DATA[index].image, DATA[index].name])
  const rating0 = useRef(DATA[index].rating)
  const rating1 = useRef("5.0")
  const stars0 = useRef({ rating: DATA[index].rating, dark: DATA[index].darkGreen })
  const stars1 = useRef({ rating: DATA[index].rating, dark: DATA[index].darkGreen })
  const name0 = useRef(DATA[index].name)
  const name1 = useRef("")
  const job0 = useRef(DATA[index].job)
  const job1 = useRef("")
  const desc0 = useRef(DATA[index].description)
  const desc1 = useRef("")
  const buttonBg0 = useRef(background)
  const buttonBg1 = useRef("")
  const rating0Status = useRef("active")
  const rating1Status = useRef("ready-for-next")
  const stars0Status = useRef("active")
  const stars1Status = useRef("ready-for-next")
  const name0Status = useRef("active")
  const name1Status = useRef("ready-for-next")
  const job0Status = useRef("active")
  const job1Status = useRef("ready-for-next")
  const desc0Status = useRef("active")
  const desc1Status = useRef("ready-for-next")
  const centerImg0Status = useRef("active")
  const centerImg1Status = useRef("ready-for-next")
  const namePlate0Status = useRef("active")
  const namePlate1Status = useRef("ready-for-next")
  const button0Status = useRef("active")
  const button1Status = useRef("ready-for-next")

  const transitionArgs = [
    index, namePlate0, namePlate1, centerImg0, centerImg1, rating0, rating1, stars0, stars1, name0, name1, button0Status, button1Status,
    job0, job1, desc0, desc1, buttonBg0, buttonBg1, rating0Status, rating1Status, stars0Status, stars1Status, name0Status, name1Status,
    job0Status, job1Status, desc0Status, desc1Status, centerImg0Status, centerImg1Status, namePlate0Status, namePlate1Status
  ]

  const handleNext = () => {
    helpers.handleNextTransitions(...transitionArgs)    

    setAction("next")
    setIndex((prevState) => {
      if (prevState - 1 >= 0) return prevState - 1
      else return 4
    })
  }

  const handlePrev = () => {
    helpers.handlePrevTransitions(...transitionArgs)

    setAction("prev")
    setIndex((prevState) => {
      if (prevState + 1 <= 4) return prevState + 1
      else return 0
    })
  }

  useEffect(() => {
    helpers.handleRotationChanges(index, setRotation, action, setImgRotation)
  }, [index, action])

  return (
    <div className="App">
      <section className="text_section">
        <div style={{ color: background }} className="rating_wrap">
          <p data-status={ rating0Status.current }>{ rating0.current }</p>
          <p data-status={ rating1Status.current }>{ rating1.current }</p>
        </div>
        <div className="stars_wrap">
          <div data-status={ stars0Status.current }>
            <ErrorBoundary>
              <RatingStars starProps={ stars0.current } />
            </ErrorBoundary>
          </div>
          <div data-status={ stars1Status.current }>
            <ErrorBoundary>
              <RatingStars starProps={ stars1.current } />
            </ErrorBoundary>
          </div>
        </div>
        <div className="name_wrap">
          <p data-status={ name0Status.current }>{ name0.current }</p>
          <p data-status={ name1Status.current }>{ name1.current }</p>
        </div>
        <div className="job_wrap">
          <p data-status={ job0Status.current }>{ job0.current }</p>
          <p data-status={ job1Status.current }>{ job1.current }</p>
        </div>
        <div className="desc_wrap">
          <p data-status={ desc0Status.current }>{ desc0.current }</p>
          <p data-status={ desc1Status.current }>{ desc1.current }</p>
        </div>
        <div className="button_track">
          <button style={{ boxShadow: `0.25rem 0.15rem 4rem ${background}` }}>
            <div className="btn_wrap">
              <p>Book a session</p>
              <div style={{ background: buttonBg0.current }} data-status={ button0Status.current }></div>
              <div style={{ background: buttonBg1.current }} data-status={ button1Status.current }></div>
            </div>
          </button>
        </div>
      </section>
      <section className="carousel_section">
        <div className="second__big_circle">
          <div className="second__big_circle_wrap">
            <div className="main_img">
              <figure>
                <img data-status={ centerImg0Status.current } src={ centerImg0.current[0] } alt={ centerImg0.current[1] } />
                <img data-status={ centerImg1Status.current } src={ centerImg1.current[0] } alt={ centerImg1.current[1] } />
              </figure>
            </div>
          </div>
        </div>
        <div style={{ background: bigCircleBackground }} className="big_circle">
          <div className="big_circle__wrap">
            <svg viewBox="0 0 800 800" fill="transparent">
              <circle cx="50%" cy="50%" r="50%" stroke="#193F5A" strokeWidth={2} strokeDasharray="8,20" />
            </svg>
                
            <div className="dashed_circle">
              <div style={{ transform: `rotateZ(${rotation}deg)` }} className="dashed_circle__wrap">
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ keshav } alt="Keshav" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ ankita } alt="Ankita" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ prankur } alt="Prankur" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ saurav } alt="Saurav" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ saumya } alt="Saumya" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ keshav } alt="Keshav" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ ankita } alt="Ankita" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ prankur } alt="Prankur" />
                </figure>
                <figure className="carousel__img_wrap">
                  <img style={{ transform: `rotateZ(${imgRotation}deg)` }} src={ saurav } alt="Saurav" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <section className="buttons_section">
          <div className="buttons_line">
            <button onClick={ handlePrev } style={{ background }}>
              <BsArrowDown className="arrow_icon" />
            </button>
            <button onClick={ handleNext } style={{ background }}>
              <BsArrowDown className="arrow_icon" />
            </button>
          </div>
          <div className="name_box">
            <div className="name_plate" data-status={ namePlate0Status.current } >
              <p>{ namePlate0.current }</p>
            </div>
            <div className="name_plate" data-status={ namePlate1Status.current } >
              <p>{ namePlate1.current }</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;