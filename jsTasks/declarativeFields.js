var notebook = {
    brand: prompt('Please input brand'),
    type:  prompt('Please input type'),
    model: prompt('Please input model'),
    ram: +prompt('Please input amount of ram'),
    size: prompt('Please input size'),
    weight: +prompt('Please input weight'),
    resolution: {
        width: +prompt('Please input weight'),
        height: +prompt('Please input height'),
    },
};

var phone = {
    brand: prompt('Please input brand'),
    model: prompt('Please input model'),
    ram: +prompt('Please input ram'),
    color: prompt('Please input color'),
};

var person = {
    name: prompt('Please input name'),
    surname: prompt('Please input surname'),
    married: confirm('Choose marital status'),
}