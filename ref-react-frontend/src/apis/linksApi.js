const axios = require('axios');



////////// LOCAL 
//const axiosBaseUrl = "http://localhost:4000" //When running the Node api localy



///////////DOCKER
//const axiosBaseUrl="http://localhost:<PortRunningContainer>" 
        //Example: PortRunningContainer = 4400 after   "docker container run -p 4400:80 taskmasterimage"
        //This is for when using the backend dockerimage NOTE: connection string as referral_db environment variable is required.




///////////HEROKU (Default)
const axiosBaseUrl="https://refnodeapp.herokuapp.com" //When using Node Api hosted in heroku. 
//NOTE : Please keep in mind that Heroku Apis have a cold start when they have not been used for more then like 30 minutes;





class LinkApi {

    //Create a new link with new title
    static CreateNewLink(title) {
        return new Promise(async (resolve, reject) => {
            
            try {
                if(title){
                     axios.defaults.headers.post['Content-Type'] = 'application/json';
           

                let titleObject={title};

                const response = await axios.post(axiosBaseUrl+"/referral", titleObject);
                
                //console.log("response:", response);

                resolve(response.data);
                }
                else{
                    resolve("Title Must be at least 1 charcter");
                }
               
            } catch (err) {
                reject(err);
            }

        });
    }

    //Get all links
    static GetAllLinks() {
        return new Promise(async (resolve, reject) => {

            try {
                const links = await axios.get(axiosBaseUrl + '/referral');
                resolve(links.data);
            } catch (err) {
                reject(err);
            }

        });
    }

    //Get link by id
    static GetLinkById(id){
        return new Promise(async (resolve, reject) => {

            try {
               

                const link = await axios.get(axiosBaseUrl+"/referral/"+ id);
                resolve(link.data);
            } catch (err) {
                reject(err);
            }

        });
    }

    //Edit Title by id and new title
    static EditTitleById(id,title){
        return new Promise(async (resolve, reject) => {

            try {
                //console.log("title:",title)

                if(title){
                    let titleObject={title};
                    const NewLink = await axios.put(axiosBaseUrl+"/referral/"+ id, titleObject);
                    resolve(NewLink.data);
                }else{
                    resolve("No Data")
                }

                
                
            } catch (err) {
                reject(err);
            }

        });
    }

    //increase click count for a link by its title
    static IncreaseClicksByTitle(title) {
        return new Promise(async (resolve, reject) => {

           

            try {
                const linkWithNewClickCount = await axios.put(axiosBaseUrl + '/referral/click/'+ title);
                resolve(linkWithNewClickCount.data);
            } catch (err) {
                reject(err);
            }

        });
    }

    //delete a link by its id
    static DeleteLinkById(id) {
        return new Promise(async (resolve, reject) => {

            try {
                const deletedLink = await axios.delete(axiosBaseUrl + '/referral/'+id);
                resolve(deletedLink.data);
            } catch (err) {
                reject(err);
            }

        });
    }

    

}

export default LinkApi;