let animal = {
    eats: true
};
let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});
alert(rabbit.jumps); // true