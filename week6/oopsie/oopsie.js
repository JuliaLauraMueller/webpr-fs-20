// Todo:
function Player(n) {
    this.name = n;
    let fallbackIndex = 0;
    let progressIndex = 0;
    return {
        proceed: function (stride) {
            progressIndex += stride // kein return, weil man da garnichts zurückgibt (void)
        },
        fallback: function () {
            progressIndex = fallbackIndex;
        },
        turn: function () {
            fallbackIndex = progressIndex;
        },
        getProgressIndex: function () {
            return progressIndex // Wert ausgelesen daher der return
        },
        getFallbackIndex: function () {
            return fallbackIndex
        }
    }
}
// create a proper Player construction with
// state:
//   fallbackIndex = 0 // place to fall back on oopsie
//   progressIndex = 0 // place having been proceeding to
// and functions:
//   proceed(stride) // proceed so many places
//   fallback()      // "oopsie": go back to last start (fallback position)
//   turn()          // cash in your win, update fallback position for next turn
// 

function start() {
    const fields = document.getElementById('fields');

    for (let i = 0; i < 100; i++) {
        let field = document.createElement("DIV"); // Felder die gerendet werden sollen
        field.setAttribute("ID", "FIELD-"+i);
        field.innerText = " ";
        fields.appendChild(field); // Haben 100 divs für die eigentlichen Felder
    }
    display();
}

function dice() {
    let stride = Math.round(1 + Math.random() * 5); // Würfeln, Wert zwischen (0 und 5) + 1 --> 1 und 6
    document.getElementById('dice').innerText = ""+ stride;
    if (stride === 3) {
        player.fallback();
    } else {
        player.proceed(stride);
    }
    display();
}

function turn() {
    player.turn();
    display();
}

function display() {
    for (let i = 0; i < 100; i++) {
        let field = document.getElementById("FIELD-"+i);
        field.setAttribute("CLASS", "field"); // Es wie ein Feld angezeigt wird
    }
    let fallbackfield = document.getElementById("FIELD-"+ player.getFallbackIndex());
    fallbackfield.setAttribute("CLASS", "field fallback");
    let progressfield = document.getElementById("FIELD-"+ player.getProgressIndex());
    progressfield.setAttribute("CLASS", "field progress");
}

player = Player("One");
