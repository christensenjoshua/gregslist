function HousesService() {
    let houses = []
    // houses.push(new House(3, 2, 'http://via.placeholder.com/150x150', 1, 1970, 200000, 'This is a nice house.'))
    // houses.push(new House(1, 1, 'http://via.placeholder.com/150x150', 1, 1986, 115000, 'This is a nice but small house.'))
    function House(bedrooms, bathrooms, imgUrl, levels, year, price, description, id) {
        this.bedrooms = bedrooms,
            this.bathrooms = bathrooms,
            this.imgUrl = imgUrl,
            this.levels = levels,
            this.year = year,
            this.price = price,
            this.description = description
            this._id = id
    }
    this.makeHouse = function (data, callback) {
        let item = (new House(data.bedrooms.value, data.bathrooms.value, data.imgUrl.value, data.levels.value, data.year.value, data.price.value, data.description.value, data.id.value))
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
            console.error(err.responseJSON.message)
        })
    }
    this.getHouse = function (id){
        let house ={}
        houses.forEach(aHouse =>{
            if(aHouse._id == id){
                house = aHouse
            }
        })
        return house
    }
    this.editHouse = function(data, callback){
        let editedHouse = new House(data.bedrooms.value, data.bathrooms.value, data.imgUrl.value, data.levels.value, data.year.value, data.price.value, data.description.value, data.id.value)
        $.ajax({
            url: 'https://bcw-gregslist.herokuapp.com/api/houses/' + editedHouse._id,
            method: 'PUT',
            data: editedHouse
        }).then(res =>{
            this.getHouses(callback)
        }).catch(err =>{
            console.error(err.responseJSON.message)
        })
    }
}