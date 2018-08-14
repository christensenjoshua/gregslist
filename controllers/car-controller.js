function CarController() {
    let carService = new CarService()

    this.setup = function () {
        let template = `
        <form onsubmit="app.controllers.carController.makeCar(event)">
            <label for="make">Make</label>
            <input type="text" class="form-control" name="make" required>
            <label for="model">Model</label>
            <input type="text" class="form-control" name="model" required>
            <label for="imgUrl">Image URL</label>
            <input type="text" class="form-control" name="imgUrl" required>
            <label for="year">Year</label>
            <input type="number" class="form-control" name="year" required>
            <label for="price">Price</label>
            <input type="number" class="form-control" name="price" required>
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description">
            <button class="btn btn-primary form-button" type="submit">Make Car</button>
        </form>
        <hr />
        <div class="row" id="cars">
        </div>
        `
        document.getElementById('maker').innerHTML = template
        this.getCars()
    }
    function draw() {
        let cars = carService.accessCars()
        let template = ''
        for (let i = 0; i < cars.length; i++) {
            const car = cars[i]
            template += `
            <div class="col-lg-3 col-sm-12 col-md-6 listing">
            <img src="${car.imgUrl}" width ="200px">
            <p>Make: ${car.make}</p>
            <p>Model: ${car.model}</p>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price}</p>
            <p>${car.description}</p>
            <hr />
            <button class="btn btn-secondary" onclick="app.controllers.carController.drawEditForm('${car._id}')">Edit</button>
            <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar('${car._id}')">Delete</button>
            </div>
            `
        }
        document.getElementById('cars').innerHTML = template
    }
    this.getCars = function(){
        carService.getCars(draw)
    }
    this.drawEditForm = function(id){
        let car = carService.getCar(id)
        let template = `
        <form onsubmit="app.controllers.carController.editCar(event)">
            <label for="make">Make</label>
            <input type="text" class="form-control" name="make" value="${car.make}" required>
            <label for="model">Model</label>
            <input type="text" class="form-control" name="model" value="${car.model}" required>
            <label for="imgUrl">Image URL</label>
            <input type="text" class="form-control" name="imgUrl" value="${car.imgUrl}" required>
            <label for="year">Year</label>
            <input type="number" class="form-control" name="year" value="${car.year}" required>
            <label for="price">Price</label>
            <input type="number" class="form-control" name="price" value="${car.price}" required>
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description" value="${car.description}">
            <input type="text" class="form-control" name="id" value="${car._id}" hidden>
            <button class="btn btn-primary form-button" type="submit">Edit Car</button>
        </form>
        `
        document.getElementById('edit').innerHTML = template
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
        carService.getCars(draw)
    }
    this.editCar = function(e){
        e.preventDefault()
        let formData = e.target
        carService.editCar(formData, draw)
        document.getElementById('edit').innerHTML = ''
    }
    this.deleteCar = function(id){
        carService.deleteCar(id, draw)
    }
}