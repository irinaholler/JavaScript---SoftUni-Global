function echoType(newText) {
    let type = typeof newText;
    console.log(type);
    if(type == `string` || type == `number`) {
        console.log(newText);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!')