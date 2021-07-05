const {BigQuery} = require('@google-cloud/bigquery');

class BqLogic {

    static async getBreakageInfo(site, location, date)
    {

        try
        {
            // Create BigQuery Client
            const bigquery = new BigQuery();

            //Set the query
            const query = "SELECT * " +
            "FROM `pama-ground-density.blasting_coordinates.frag2` " + 
            "WHERE site='" + site + "' and lokasi = '" + location + "' and tanggal = '" + date + "'";

            console.log(query)

            // Set options
            const options = {
                query: query
            };

            //Set Credential
            if(process.env.CREDENTIAL != null)
            {
                options.keyFilename = process.env.CREDENTIAL;
                options.projectId = process.env.PROJECT;
            }

            // Run the query as a job
            const [job] = await bigquery.createQueryJob(options);
            console.log(`Job ${job.id} started.`);

            // Wait for the query to finish
            const [rows] = await job.getQueryResults();

            // Return the result
            return { success: true, payload: rows };

        }
        catch(err)
        {
            // Return the result
            return { success: false, payload: err };
        }

    }

    static async getBlastedMaterialRemain(site, location, date)
    {
        try
        {
            // Create BigQuery Client
            const bigquery = new BigQuery();

            //Set the query
            const query = "SELECT * " +
            "FROM `pama-ground-density.blasting_coordinates.material2` " + 
            "WHERE site='" + site + "' and lokasi = '" + location + "' and tanggal = '" + date + "'";

            console.log(query)

            // Set options
            const options = {
                query: query
            };

            //Set Credential
            if(process.env.CREDENTIAL != null)
            {
                options.keyFilename = process.env.CREDENTIAL;
                options.projectId = process.env.PROJECT;
            }

            // Run the query as a job
            const [job] = await bigquery.createQueryJob(options);
            console.log(`Job ${job.id} started.`);

            // Wait for the query to finish
            const [rows] = await job.getQueryResults();

            // Return the result
            return { success: true, payload: rows };

        }
        catch(err)
        {
            // Return the result
            return { success: false, payload: err };
        }
        
    }
}

module.exports = BqLogic;
