function triangel() {
    var arr = [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."];;
    for (var i = 0; i < Math.ceil(arr.length / 2); i++) {
        var rightSideOfArr = Math.floor(arr.length / 2) + i;
        var leftSideOfArr = Math.floor(arr.length / 2) - i;
        arr[rightSideOfArr] = '#';
        arr[leftSideOfArr] = '#';
        console.log(arr);
    }
}
triangel();
