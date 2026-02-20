async function  getSpaceXData() {
    try{
        const response = await fetch("https://api.spacexdata.com/v4/launches");
        if(!response.ok) throw new Error("connection failure!");

        const data = await response.json();
        return console.log(data)
    }catch (error){
        console.error("Erro ao buscar dados:", error)
    }
    
}

getSpaceXData()
