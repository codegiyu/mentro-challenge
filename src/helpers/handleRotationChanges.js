const handleRotationChanges = (index, setRotation, action, setImgRotation) => {
    if (index === 0) {
        setRotation(0) 
      } else if (index === 4) {
        setRotation(-160)
      } else {
        if (action === "next") setRotation((prevState) => prevState + 40)
        else if (action === "prev") setRotation((prevState) => prevState - 40)
      }
  
      if (index === 0) {
        setImgRotation(0) 
      } else if (index === 4) {
        setImgRotation(160)
      } else {
        if (action === "prev") setImgRotation((prevState) => prevState + 40)
        else if (action === "next") setImgRotation((prevState) => prevState - 40)
      }
}

export default handleRotationChanges