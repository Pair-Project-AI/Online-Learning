const currency = (price) => {
    return `Rp. ${price.toLocaleString("id-ID")}`
}

module.exports = currency