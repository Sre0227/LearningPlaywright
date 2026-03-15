function test(names,roles){

    return names.map((name,index)=>{
        const username = name.toLowerCase().replace(" ","_")

        return {
            username : username,
            email : username+`@playwrightbatch.com`,
            role : roles[index]

        }
    });

    // for(let name of names){
    //     console.log(name)
    // }
    // for(let role of roles){
    //     console.log(role)
    // }

    
}

const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = test(names,roles)
console.log(users)