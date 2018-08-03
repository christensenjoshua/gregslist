function JobsController () {
    let jobsService = new JobsService()

    this.setup = function () {
        let template = `
        <form onsubmit="app.controllers.jobsController.makeJob(event)">
            <label for="company">Company</label>
            <input type="text" class="form-control" name="company">
            <label for="title">Title</label>
            <input type="text" class="form-control" name="title">
            <label for="hours">Hours</label>
            <input type="number" class="form-control" name="hours">
            <label for="rate">Rate</label>
            <input type="number" class="form-control" name="rate">
            <label for="description">Description</label>
            <input type="text" class="form-control" name="description">
            <button type="submit">Make Job</button>
        </form>
        <div class="row form-group" id="jobs">
        </div>
        `
        document.getElementById('maker').innerHTML = template
        draw()
    }
    function draw(){
        let jobs = jobsService.getJobs()
        let template = ''
        for (let i = 0; i < jobs.length; i++) {
            const job = jobs[i]
            template += `
            <div class="col-lg-3 col-sm-12 col-md-6 listing">
            <p>Company: ${job.company}</p>
            <p>Title: ${job.title}</p>
            <p>Contract Hours: ${job.hours}</p>
            <p>Hourly Rate: ${job.rate}</p>
            <p>${job.description}</p>
            </div>
            `
        }
        document.getElementById('jobs').innerHTML = template
    }
    this.makeJob = function(e){
        e.preventDefault()
        let formData = e.target
        jobsService.makeJob(formData)
        formData.company.value = ''
        formData.title.value = ''
        formData.hours.value = ''
        formData.rate.value = ''
        formData.description.value = ''
        draw()
    }
}