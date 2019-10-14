function generateHashtag(str) {
    str = str.split(' ');
    var str1 = '';
    for (let i = 0; i <= str.length; i++) {
        if (str[i]) {
            for (let j = 0; j <= str[i].length; j++) {
                if ((j == 0) && (str[i][j])) {
                    str1 += str[i][j].toUpperCase()
                } else if (str[i][j] !== undefined) {
                    str1 += str[i][j]
                }
            }
        }
    }
    if (str1 && (str1.length < 140)) {
        return str1 = '#' + str1;
    } else {
        return false
    }
}
