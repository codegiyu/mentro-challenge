import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa"
import helpers from "../helpers"
import uuid from "react-uuid"
import classes from "./css/RatingStars.module.scss"

const RatingStars = (props) => {
    let { rating, dark = false } = props.starProps
    const starArr = helpers.getStarArr(rating)

    const color = dark ? "#609B6C" : "#4CAF50"

    return (
        <div className={classes.rating_stars__wrap} style={{ color }}>
            { starArr.map((num) => {
                if (num === 1) {
                    return <FaStar key={ uuid() } />
                } else if (num === 0.5) {
                    return <FaStarHalf key={ uuid() } />
                } else {
                    return <FaRegStar key={ uuid() } />
                }
            })}
        </div>
    )
}

export default RatingStars