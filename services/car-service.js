function CarService(){
    let cars = []
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