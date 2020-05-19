// requires dataflow.js

test("dataflow-scheduler", assert => {

    const result = [];

    const scheduler = Scheduler();
    scheduler.add(ok => {
        setTimeout(_ => {   // we wait before pushing
            result.push(1); //
            ok();
        }, 100) // warten
    });
    scheduler.add(ok => {   // we push "immediately"
        result.push(2);
        ok();
    });
    scheduler.addOk ( () => result.push(3)); // convenience

    scheduler.add(ok => {
        assert.is(result[0], 1); // sequence is still ensured
        assert.is(result[1], 2);
        assert.is(result[2], 3);
    });

    assert.true(true); // any assertion error will appear in the console, not in the report

});

test("dataflow-value", assert => { // Operation nur einmal ausgeführt

    const z = DataFlowVariable(() => x() + y());   // z depends on x and y, which are set later...
    const x = DataFlowVariable(() => y());         // x depends on y, which is set later...
    const y = DataFlowVariable(() => 1);

    // assert sind synchron
    assert.is(z(), 2);
    assert.is(x(), 1);
    assert.is(y(), 1);

});

test("dataflow-cache", assert => { // value must be set at most once, Seiteneffekte nur einmal passieren

    let counter = 0;
    const x = DataFlowVariable(() => {
        counter++;
        return 1;
    });

    assert.is(counter, 0);
    assert.is(x(), 1); // jetzt bekommen wir eine 1 zurück
    assert.is(counter, 1);
    assert.is(x(), 1); // immer noch 1 und counter immer noch 1, kein zweites mal einen Seiteneffekt ausgelöst.
    assert.is(counter, 1);

});

