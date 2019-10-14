function validatePIN(pin) {
    if (((pin.length === 4) || (pin.length === 6)) && (typeof (+pin) === 'number')) {
        return true;
    } else {
        return false;
    }
}

function validatePIN(pin) {
    pin = pin.split('');
    if ((pin.length === 4) || (pin.length === 6)) {
        for (i = 0; i < pin.length; i++) {
            if (+pin[i]||(+pin[i] === '0')) {
                if (i === pin.length-1) { 
                    return true 
                }
            } else {
                return false
            }
        }
    } else {
        return false;
    }
}

function validatePIN(pin) {
    if (((pin.length === 4) || (pin.length === 6)) && ((+pin >= 0) && (+pin < 1000000))) {
        if (pin - Math.floor(pin) === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function validatePIN(pin) {
    pin = pin.split('');
    if ((pin.length === 4) || (pin.length === 6)) {
        for (i = 0; i < pin.length; i++) {
            if ((+pin[i]||(+pin[i] === 0))&&(pin[i]!==' ')) {
                if (i === pin.length-1) { 
                    return true 
                }
            } else {
                return false
            }
        }
    } else {
        return false;
    }
}


function validatePIN(pin) {
    return pin.split('').every(el => validate(el,pin))
}

function validate(value,arr){
   return ((isNaN(value)&&(value=='/n'))&&((arr.length === 4) || (arr.length === 6)))
}