

const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value); // wie rufen ihn einmal auf --> den aktuellen Wert bekommt man einmal
        },
        getValue: ()       => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value, oldValue)); // alten und neuen Wert mitgeben
        }
    }
};
