import DATA from "./data/data"
import { useEffect, useMemo, useRef, useState } from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import ankita from "./images/ankita.png"
import keshav from "./images/keshav.png"
import saurav from "./images/saurav.png"
import saumya from "./images/saumya.png"
import prankur from "./images/prankur.png"
import { BsArrowDown } from "react-icons/bs"
import RatingStars from "./components/RatingStars"
import helpers from "./helpers"
import starsData from "./data/transitionElsData"

function App() {
  const [index, setIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [imgRotation, setImgRotation] = useState(0)
  const [action, setAction] = useState("")
  // const [transitionStatus, setTransitionStatus] = useState(0)
  const [starsProps, setStarsProps] = useState(starsData)

  const background = DATA[index].darkGreen ? "#609B6C" : "#4CAF50"
  const bigCircleBackground = DATA[index].darkGreen ? "#7ABD87" : "#C5F8C7"
  
  const namePlate0 = useRef(null)
  const namePlate1 = useRef(null)
  const centerImg0 = useRef(null)
  const centerImg1 = useRef(null)
  const rating0 = useRef(null)
  const rating1 = useRef(null)
  const stars0 = useRef(null)
  const stars1 = useRef(null)
  const name0 = useRef(null)
  const name1 = useRef(null)
  const job0 = useRef(null)
  const job1 = useRef(null)
  const desc0 = useRef(null)
  const desc1 = useRef(null)
  const button0 = useRef(null)
  const button1 = useRef(null)
  // const rating0Status = useRef("active")
  // const rating1Status = useRef("ready-for-next")
  // const stars0Status = useRef("active")
  // const stars1Status = useRef("ready-for-next")
  // const name0Status = useRef("active")
  // const name1Status = useRef("ready-for-next")
  // const job0Status = useRef("active")
  // const job1Status = useRef("ready-for-next")
  // const desc0Status = useRef("active")
  // const desc1Status = useRef("ready-for-next")
  // const centerImg0Status = useRef("active")
  // const centerImg1Status = useRef("ready-for-next")
  // const namePlate0Status = useRef("active")
  // const namePlate1Status = useRef("ready-for-next")
  // const button0Status = useRef("active")
  // const button1Status = useRef("ready-for-next")

  const transitionArgs = [
    setStarsProps, index, namePlate0, namePlate1, centerImg0, centerImg1, rating0, rating1, stars0, stars1,
    job0, job1, desc0, desc1, button0, button1, name0, name1,
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
  }, [index])

  return (
    <div className="App">
      <section className="text_section">
        <div style={{ color: background }} className="rating_wrap">
          <p data-status="active" ref={rating0}>{ DATA[0].rating }</p>
          <p data-status="ready-for-next" ref={rating1}>{  }</p>
        </div>
        <div className="stars_wrap">
          <div data-status="active" ref={ stars0 }>
            <ErrorBoundary>
              <RatingStars starProps={ starsProps.stars0 } />
            </ErrorBoundary>
          </div>
          <div data-status="active" ref={ stars1 }>
            <ErrorBoundary>
              <RatingStars starProps={ starsProps.stars1 } />
            </ErrorBoundary>
          </div>
        </div>
        <div className="name_wrap">
          <p data-status="active" ref={ name0 }>{ DATA[0].name }</p>
          <p data-status="ready-for-next" ref={ name1 }>{  }</p>
        </div>
        <div className="job_wrap">
          <p data-status="active" ref={ job0 }>{ DATA[0].job }</p>
          <p data-status="ready-for-next" ref={ job1 }>{  }</p>
        </div>
        <div className="desc_wrap">
          <p data-status="active" ref={ desc0 }>{ DATA[0].description }</p>
          <p data-status="ready-for-next" ref={ desc1 }>{  }</p>
        </div>
        <div className="button_track">
          <button style={{ boxShadow: `0.25rem 0.15rem 4rem ${background}` }}>
            <div className="btn_wrap">
              <p>Book a session</p>
              <div data-status="active" ref={ button0 }></div>
              <div data-status="ready-for-next" ref={ button1 }></div>
            </div>
          </button>
        </div>
      </section>
      <section className="carousel_section">
        <div className="second__big_circle">
          <div className="second__big_circle_wrap">
            <div className="main_img">
              <figure>
                <img data-status="active" src={ DATA[0].image } alt={ DATA[0].name } ref={ centerImg0 } />
                <img data-status="inactive-from-next" src={ DATA[0].image } alt={ DATA[0].name } ref={ centerImg1 } />
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
            <div className="name_plate" data-status="active" ref={ namePlate0 } >
              <p>{ DATA[0].name }</p>
            </div>
            <div className="name_plate" data-status="ready-for-next" ref={ namePlate1 } >
              <p>{  }</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;