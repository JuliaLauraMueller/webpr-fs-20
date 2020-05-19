
// execute asynchronous tasks in strict sequence, aka "reactive stream", "flux architecture"
const Scheduler = () => {
    let inProcess = false;
    const tasks = [];
    function process() {
        if (inProcess) { return; } // nichts machen, solange man arbeitet
        if (tasks.length === 0) { return; } // guard clause
        inProcess = true;
        const task = tasks.pop(); // Task holen, am Ende der Schlange entfernt.

        new Promise( (resolve, reject) => { // Nebenläufig starten
            task(resolve);
        }). then ( () => {
            inProcess = false;
            process(); // Rekursiver-Aufruf (endlos, nein lauft in den Stackoverflow) ist ok mit async
        });
    }
    function add(task) {
        tasks.unshift(task); // Am anfang eingefügt der Schlange
        process(); // abarbeiten
    }
    return {
        add: add,
        addOk: task => add( ok => { task(); ok(); }) // convenience
    }
};


// a dataflow abstraction that is not based on concurrency but on laziness
// nicht async
const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value // gibt eine Funktion zurück
                 ? value = howto()
                 : value;
};
