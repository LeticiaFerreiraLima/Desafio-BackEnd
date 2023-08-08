function processData(input) {

    if(input === input.toUpperCase()) {
        input = input.toLowerCase()
        
    } else {
        if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()){
            input = input[0].toUpperCase() + input.slice(1).toLowerCase()
        }
        
}

    console.log(input)
}

processData('caps')