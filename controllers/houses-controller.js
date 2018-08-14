function HousesController() {
    let housesService = new HousesService()

    this.setup = function () {
        let template = `
        <form onsubmit="app.controllers.housesController.makeHouse(event)">
            <label for="bedrooms">Bedrooms</label>
            <input type="number" class="form-control" name="bedrooms" required>
            <label for="bathrooms">Bathrooms</label>
            <input type="number" class="form-control" name="bathrooms" required>
            <label for="imgUrl">Image URL</label>
            <input type="text" class="form-control" name="imgUrl" required>
            <label for="levels">Levels</label>
            <input type="number" class="form-control" name="levels" required>
            <label for="year">Year</label>
            <input type="number" class="form-control" name="year" required>
            <label for="price">Price</label>
            <input type="number" class="form-control" name="price" required>
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description">
            <button class="btn btn-primary form-button" type="submit">Make House</button>
        </form>
        <hr />
        <div class="row" id="houses">
        </div>
        `
        document.getElementById('maker').innerHTML = template
        this.getHouses()
    }
    this.drawEditForm = function(id){
        let house = housesService.getHouse(id)
        let template = `
        <form onsubmit="app.controllers.housesController.editHouse(event)">
            <label for="bedrooms">Bedrooms</label>
            <input type="number" class="form-control" name="bedrooms" value="${house.bedrooms}" required>
            <label for="bathrooms">Bathrooms</label>
            <input type="number" class="form-control" name="bathrooms" value="${house.bathrooms}" required>
            <label for="imgUrl">Image URL</label>
            <input type="text" class="form-control" name="imgUrl" value="${house.imgUrl}" required>
            <label for="levels">Levels</label>
            <input type="number" class="form-control" name="levels" value="${house.levels}" required>
            <label for="year">Year</label>
            <input type="number" class="form-control" name="year" value="${house.year}" required>
            <label for="price">Price</label>
            <input type="number" class="form-control" name="price" value="${house.price}" required>
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description" value="${house.description}">
            <input type="text" class="form-control" name="id" value="${house._id}" hidden>
            <button class="btn btn-primary form-button" type="submit">Edit House</button>
        </form>
        `
        document.getElementById('edit').innerHTML = template
    }
    this.editHouse = function(e){
        e.preventDefault()
        let formData = e.target
        housesService.editHouse(formData, draw)
        
    }
    function draw() {
        let houses = housesService.accessHouses()
        let template = ''
        for (let i = 0; i < houses.length; i++) {
            const house = houses[i]
            template += `
            <div class="col-lg-3 col-sm-12 col-md-6 listing">
            <img src="${house.imgUrl}" width="200px">
            <p>Bedrooms: ${house.bedrooms}</p>
            <p>Bathrooms: ${house.bathrooms}</p>
            <p>Levels: ${house.levels}</p>
            <p>Year: ${house.year}</p>
            <p>Price: $${house.price}</p>
            <p>${house.description}</p>
            <button class="btn btn-secondary" onclick="app.controllers.housesController.drawEditForm('${house._id}')">Edit</button>
            </div>
            `
        }
        document.getElementById('houses').innerHTML = template
    }
    this.makeHouse = function (e) {
        e.preventDefault()
        let formData = e.target
        housesService.makeHouse(formData, draw)
        formData.bedrooms.value = ''
        formData.bathrooms.value = ''
        formData.levels.value = ''
        formData.year.value = ''
        formData.price.value = ''
        formData.description.value = ''
        formData.imgUrl.value = ''
    }
    this.getHouses = function() {
        housesService.getHouses(draw)
    }
}