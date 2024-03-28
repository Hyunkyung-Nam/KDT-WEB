import { useState, useEffect } from 'react';

export default function LifeCycle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((c) => c + 1); // ✅ Pass a state updater
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
}
