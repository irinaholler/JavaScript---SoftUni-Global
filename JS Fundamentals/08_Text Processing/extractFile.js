function extractFile(params) {
    let slash = params.lastIndexOf(`\\`) + 1;

    let dot = params.lastIndexOf(`.`) + 1;
    let indexEnd = dot - 1;

    let lastParameters = params.substring(slash, indexEnd);
    let extension = params.substring(dot);
    console.log(`File name: ${lastParameters}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')