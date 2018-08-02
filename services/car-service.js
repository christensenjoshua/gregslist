function CarService(){
    let cars = []
    cars.push(new Car('Make 1', 'Model 1', 'http://via.placeholder.com/150x150', 1990, 5000, 'A pretty cool car that is pretty old.'))
    cars.push(new Car('Make 2', 'Model 2', 'http://via.placeholder.com/150x150', 2000, 50000, 'A pretty cool car that is pretty old but more expensive.'))
    function Car(make, model, imgUrl, year, price, description){
        this.make= make,
        this.model= model,
        this.imgUrl= imgUrl,
        this.year= year,
        this.price= price,
        this.description= description
    }


    this.makeCar = function(data) {
        cars.push(new Car(data.make.value, data.model.value, data.imgUrl.value, data.year.value, data.price.value, data.description.value))
        console.log(cars)
    }
    this.getCars = function() {
        let carsCopy = []
        for(let i = 0; i < cars.length; i++){
            const car = cars[i];
            carsCopy.push(new Car(car.make, car.model, car.imgUrl, car.year, car.price, car.description))
        }
        return carsCopy
    }
}