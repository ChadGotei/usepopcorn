import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
    const [value, setValue] = useState(function() {
        const storagedValue = localStorage.getItem(key);
        return storagedValue ? JSON.stringify(storagedValue) : initialValue;
    })

    useEffect(
        function() {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
    )

    return [value, setValue];
}