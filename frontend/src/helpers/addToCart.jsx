const addToCart = (e, id) => {
    e?.stopPropagation()
    e?.preventDefault()
    console.log(id)
}

export default addToCart