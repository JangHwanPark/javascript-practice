function defangIPaddr(address) {
    let newAddress = '';
    for (let i = 0; i < address.length; i++) {
        address[i] === '.' ? newAddress += '[.]' : newAddress += address[i];
    }
    return newAddress;
}

function replaceIPaddr(address) {
    return address.replace(/\./g, '[.]');
}

let address = "1.1.1.1";
console.log('defangIPaddr :', defangIPaddr(address));
console.log('replaceIPaddr :', replaceIPaddr(address));