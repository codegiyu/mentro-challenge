const getStarArr = (rating) => {
    let starArr = [], ratingNum = 0 + Number(rating)

    for (let i = 0; i < 5; i++) {
        if (ratingNum >= 1) {
            starArr.push(1)
            ratingNum--
        } else if (ratingNum > 0 && ratingNum < 1) {
            starArr.push(0.5)
            ratingNum = 0
        } else if (ratingNum === 0) {
            starArr.push(0)
        }
    }

    return starArr
}

export default getStarArr