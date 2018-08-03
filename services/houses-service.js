function HousesService() {
    let houses = []
    houses.push(new House(3,2,'http://via.placeholder.com/150x150',1,1970,200000,'This is a nice house.'))
    houses.push(new House(1,1,'http://via.placeholder.com/150x150',1,1986,115000,'This is a nice but small house.'))
    function House(bedrooms, bathrooms, imgUrl, levels, year, price, description){
        this.bedrooms = bedrooms,
        this.bathrooms = bathrooms,
        this.imgUrl = imgUrl,
        this.levels = levels,
        this.year = year,
        this.price = price,
        this.description = description
    }
    this.makeHouse = function(data){
        houses.push(new House(data.bedrooms.value, data.bathrooms.value, data.imgUrl.value, data.levels.value, data.year.value, data.price.value, data.description.value))
    }
    this.getHouses = function(){
        let housesCopy = []
        for(let i = 0; i < houses.length; i++){
            const house = houses[i]
            housesCopy.push(new House(house.bedrooms, house.bathrooms, house.imgUrl, house.levels, house.year, house.price, house.description))
        }
        return housesCopy
    }
}