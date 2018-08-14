function HousesService() {
    let houses = []
    // houses.push(new House(3, 2, 'http://via.placeholder.com/150x150', 1, 1970, 200000, 'This is a nice house.'))
    // houses.push(new House(1, 1, 'http://via.placeholder.com/150x150', 1, 1986, 115000, 'This is a nice but small house.'))
    function House(bedrooms, bathrooms, imgUrl, levels, year, price, description) {
        this.bedrooms = bedrooms,
            this.bathrooms = bathrooms,
            this.imgUrl = imgUrl,
            this.levels = levels,
            this.year = year,
            this.price = price,
            this.description = description
    }
    this.makeHouse = function (data, callback) {
        let item = (new House(data.bedrooms.value, data.bathrooms.value, data.imgUrl.value, data.levels.value, data.year.value, data.price.value, data.description.value))
        $.post('https://bcw-gregslist.herokuapp.com/api/houses',item).then(res =>{
            this.getHouses(callback)
        }).catch(err =>{
            console.error(err.responseJSON.message)
        })
    }
    this.accessHouses = function() {
        return houses
    }
    this.getHouses = function (callback) {
        $.get('https://bcw-gregslist.herokuapp.com/api/houses').then(res =>{
            houses = res.data
            callback()
        }).catch(err =>{
            console.error(err)
        })
    }
}