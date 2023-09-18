var count = 1;
var cells = document.querySelectorAll("#boxes div");

function fill(control) {
    if (control.innerHTML == "") {
        if (count % 2 != 0) {
            control.innerHTML = "X";
        } else {
            control.innerHTML = "0";
        }
        count++;
        checkwins();
    }
}

function reset() {
    var res = document.querySelectorAll("#boxes div");
    res.forEach(function(cells) {
        cells.innerHTML = '';
    });
    count = 1;
}

function checkwins() {
    var winPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (var i = 0; i < winPattern.length; i++) {
        var pattern = winPattern[i];
        var a = pattern[0];
        var b = pattern[1];
        var c = pattern[2];

        if (cells[a].innerHTML != "" && cells[a].innerHTML == cells[b].innerHTML && cells[b].innerHTML == cells[c].innerHTML) {
            var winner = cells[a].innerHTML.toUpperCase();
            setTimeout(() => {
                alert(winner + " wins!");
            }, 300);
            // win();
            return;
        }
    }

    if (count > 9) {
        setTimeout(() => {
            alert("It's a draw!");
            
        }, 300);
    }
}
