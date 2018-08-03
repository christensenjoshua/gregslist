function CarController() {
    let carService = new CarService()

    this.setup = function () {
        let template = `
        <form onsubmit="app.controllers.carController.makeCar(event)">
            <label for="make">Make</label>
            <input type="text" class="form-control" name="make">
            <label for="model">Model</label>
            <input type="text" class="form-control" name="model">
            <label for="imgUrl">Image URL</label>
            <input type="text" class="form-control" name="imgUrl">
            <label for="year">Year</label>
            <input type="number" class="form-control" name="year">
            <label for="price">Price</label>
            <input type="number" class="form-control" name="price">
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description">
            <button class="btn btn-primary form-button" type="submit">Make Car</button>
        </form>
        <hr />
        <div class="row" id="cars">
        </div>
        `
        document.getElementById('maker').innerHTML = template
        draw()
    }
    function draw() {
        let cars = carService.getCars()
        let template = ''
        for (let i = 0; i < cars.length; i++) {
            const car = cars[i]
            template += `
            <div class="col-lg-3 col-sm-12 col-md-6 listing">
            <img src="${car.imgUrl}">
            <p>Make: ${car.make}</p>
            <p>Model: ${car.model}</p>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price}</p>
            <p>${car.description}</p>
            </div>
            `
        }
        document.getElementById('cars').innerHTML = template
    }
    this.makeCar = function (e) {
        e.preventDefault()
        let formData = e.target
        carService.makeCar(formData)
        formData.make.value = ''
        formData.model.value = ''
        formData.imgUrl.value = ''
        formData.price.value = ''
        formData.year.value = ''
        formData.description.value = ''
        draw()
    }
}