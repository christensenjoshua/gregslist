function JobsService () {
    let jobs = []
    function Job(company, title, hours, rate, description) {
        this.company = company,
        this.title = title,
        this.hours = hours,
        this.rate = rate,
        this.description = description
    }
    this.makeJob = function (data) {
        jobs.push(new Job(data.company.value, data.title.value, data.hours.value, data.rate.value, data.description.value))
        console.log(data.description.value)
        console.log(jobs)
    }
    this.getJobs = function () {
        let jobsCopy = []
        for(let i = 0; i < jobs.length; i++){
            const job = jobs[i]
            jobsCopy.push(new Job(job.company, job.title, job.hours, job.rate, job.description))
        }
        return jobsCopy
    }
}