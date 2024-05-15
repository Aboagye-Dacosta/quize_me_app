import { useEffect, useState } from "react";

type Value =  object | number | string | boolean;
type Func = React.Dispatch<React.SetStateAction<string | number | boolean | object>>;

export function useLocalStorageState(initialState: object | number | string | boolean, key: string): [Value,Func]  {
    const [value, setValue] = useState<object | number | string | boolean>(function () {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
    );

    return [value, setValue];
}
