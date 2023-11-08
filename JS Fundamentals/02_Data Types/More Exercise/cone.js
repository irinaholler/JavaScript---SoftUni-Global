function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let slant = Math.sqrt((radius * radius) + (height * height));
    let lateral = Math.PI * radius * slant;
    let base = Math.PI * Math.pow(radius, 2);
    let area = lateral + base;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}