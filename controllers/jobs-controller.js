function JobsController () {
    let jobsService = new JobsService()

    this.setup = function () {
        let template = `
        <form onsubmit="app.controllers.jobsController.makeJob(event)">
            <label for="company">Company</label>
            <input type="text" name="company">
            <label for="title">Title</label>
            <input type="text" name="title">
            <label for="hours">Hours</label>
            <input type="number" name="hours">
            <label for="rate">Rate</label>
            <input type="number" name="rate">
            <label for="description">Description</label>
            <input type="text" name="description">
            <button type="submit">Make Job</button>
        </form>
        <div class="row" id="jobs">
        </div>
        `
        document.getElementById('maker').innerHTML = template
        draw()
    }
    function draw(){
        let jobs = jobsService.getJobs()
        console.log(jobs)
        let template = ''
        for (let i = 0; i < jobs.length; i++) {
            const job = jobs[i]
            template += `
            <div class="col-3">
            <p>${job.company}</p>
            <p>${job.title}</p>
            <p>${job.hours}</p>
            <p>${job.rate}</p>
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
        draw()
    }
}