function add(numbers) {
    var s = 0;
    var parts = numbers.split(',');
    for (var i = 0; i < parts.length; i++) {
        var n = parseInt(parts[i]);
        if (n < 0) {
            return -1;
        }
        if (!isNaN(n)) {
            if (n >= 0) {
                if (n <= 1000) {
                    s += n;
                }
            }
        }
    }
    return s;
}

module.exports = add;