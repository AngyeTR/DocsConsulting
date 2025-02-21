export async function requestPlan(name, lastName, code){
    
    const host = import.meta.env.VITE_API_HOST;

    const body = {
        firstName: name,
        lastName: lastName,
        customerCode: code
    }
    let CustomHeader = new Headers({
        'Content-Type': 'application/json'
      });

    try {
        const res = await fetch(host, 
            {
            method: "POST",
            headers: CustomHeader,
            body: JSON.stringify(body)

        })
            const data = await res.json();
            return data;
        
        
    } catch (error) {
        console.log("Error capturado",error)
        return {error: error}   
    }


}