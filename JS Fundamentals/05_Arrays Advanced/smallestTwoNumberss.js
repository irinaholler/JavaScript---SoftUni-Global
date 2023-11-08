function smallestTwoNumberss(params) {
    let smallToBig = params.sort((a, b) => a - b);
    let theSmallest = smallToBig.splice(0, 2)
    console.log(theSmallest.join(" "));
}

smallestTwoNumberss([30, 15, 50, 5])