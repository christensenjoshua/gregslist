function CarService() {
    let cars = []
    // cars.push(new Car('Make 1', 'Model 1', 'http://via.placeholder.com/150x150', 1990, 5000, 'A pretty cool car that is pretty old.'))
    // cars.push(new Car('Make 2', 'Model 2', 'http://via.placeholder.com/150x150', 2000, 50000, 'A pretty cool car that is pretty old but more expensive.'))
    function Car(make, model, imgUrl, year, price, description, id) {
        this.make = make,
            this.model = model,
            this.imgUrl = imgUrl,
            this.year = year,
            this.price = price,
            this.description = description,
            this._id = id
    }


    this.makeCar = function (data, callback) {
        let item = new Car(data.make.value, data.model.value, data.imgUrl.value, data.year.value, data.price.value, data.description.value,'')
        delete item._id
        $.post('https://bcw-gregslist.herokuapp.com/api/cars',item).then(res =>{
            this.getCars(callback)
        }).catch(err =>{
            console.error(err.responseJSON.message)
        })
    }
    this.accessCars = function(){
        return cars
    }
    this.getCars = function (callback) {
        $.get('https://bcw-gregslist.herokuapp.com/api/cars').then(res =>{
            cars = res.data
            callback()
        }).catch(err =>{
            console.error(err.responseJSON.message)
        })
    }
    this.getCar = function(id){
        let car = {}
        cars.forEach(aCar => {
            if(aCar._id == id){
                car = aCar
            }
        })
        return car
    }
    this.editCar = function(data, callback){
        let editedCar = new Car(data.make.value, data.model.value, data.imgUrl.value, data.year.value, data.price.value, data.description.value, data.id.value)
        $.ajax({
            url: 'https://bcw-gregslist.herokuapp.com/api/cars/' + editedCar._id,
            method: 'PUT',
            data: editedCar
        }).then(res => {
            this.getCars(callback)
            console.log(res)
        }).catch(err => {
            console.error(err.responseJSON.message)
        })
    }
    this.deleteCar = function(id, callback){
        $.ajax({
            url: 'https://bcw-gregslist.herokuapp.com/api/cars/' + id,
            method: 'DELETE'
        }).then(res =>{
            this.getCars(callback)
        }).catch(err =>{
            console.error(err.responseJSON.message)
        })
    }
}