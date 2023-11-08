function gramophone(band, akbum, song) {
    let time = (band.length * akbum.length) * song.length / 2;
    let rotation = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')