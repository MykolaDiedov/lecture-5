function pad(user = '', lineLength = 0, c = '', flag) {
    if (c.length != 1) {
        return 'wrong length';
    } else {
        var userName = user.length;
        var text = '';
        for (var i = userName; i < lineLength; i++) {
            text += c;
        }
    }
    return flag == true ? user + text : text + user;
} 
var result = pad('Ivan', 8, '*', true);
console.log(result);