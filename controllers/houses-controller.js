function HousesController() {
    let housesService = new HousesService()

    this.setup = function () {
        let template = `
        <form onsubmit="app.controllers.housesController.makeHouse(event)">
            <label for="bedrooms">Bedrooms</label>
            <input type="number" class="form-control" name="bedrooms">
            <label for="bathrooms">Bathrooms</label>
            <input type="number" class="form-control" name="bathrooms">
            <label for="imgUrl">Image URL</label>
            <input type="text" class="form-control" name="imgUrl">
            <label for="levels">Levels</label>
            <input type="number" class="form-control" name="levels">
            <label for="year">Year</label>
            <input type="number" class="form-control" name="year">
            <label for="price">Price</label>
            <input type="number" class="form-control" name="price">
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
            </div>
            `
        }
        document.getElementById('houses').innerHTML = template
    }
    this.makeHouse = function (e) {
        e.preventDefault()
        let formData = e.target
        housesService.makeHouse(formData)
        formData.bedrooms.value = ''
        formData.bathrooms.value = ''
        formData.levels.value = ''
        formData.year.value = ''
        formData.price.value = ''
        formData.description.value = ''
        formData.imgUrl.value = ''
        draw()
    }
    this.getHouses = function() {
        housesService.getHouses(draw)
    }
}