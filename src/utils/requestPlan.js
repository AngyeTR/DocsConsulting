export function requestPlan(name, lastName, code){
    try {
        if(name == "jen" && lastName == "doe" && code == "123"){
            const data = {
                product: "Plan1",
                date: "24/01/2025",
                status: "Active",
                subscriber: "Jenn"
            }
            return data
        }
        else {
            const data = {error: "error"}
            return data
        }
        
        
    } catch (error) {
        console.log("Error capturado",error.message)
        return {error: error}   
    }


}