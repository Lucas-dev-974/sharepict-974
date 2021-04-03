function requireQueries(required, queries){
    let errors = []
    let result = []
    
    required.forEach(element => {
        result[element] = false
        for(const [key, value] of Object.entries(queries)){
            if(result[element] !== true) if(element === key) result[element] = true
        }
    })

    for(const [key, value] of Object.entries(result)){
        if(value === false){
            errors.push("Veuillez remplir le champ " + key)
        }
    }
    if(errors.length === 0) return true
    else return errors
}

exports.requireQueries = (required, queries) => requireQueries(required, queries)