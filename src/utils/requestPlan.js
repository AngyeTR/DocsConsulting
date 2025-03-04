import axios from "axios";

export async function requestPlan(name, lastName, code){
    const host = import.meta.env.VITE_API_HOST;
    const body = {
        firstName: name,
        lastName: lastName,
        customerCode: code
    }
    const data = JSON.stringify(body)

    const  response= await axios.post(host,
        data, 
        {  headers:
          {"Content-Type": "application/json",}}).then(response => {
           return response.data
       })
       .catch(error => {
           return error
       });
 
    return response
    
}