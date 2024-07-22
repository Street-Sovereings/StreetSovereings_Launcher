import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function App() {
    const [path, setPath] = useState();
    const [checkPath, setCheckPath] = useState();

    useEffect(() => {
        setCheckPath(Cookies.get("path"));
    }, []);

    if (checkPath) {
        setPath(checkPath);
    }

    return (
        <>
        <h1>hi</h1>
        </>
    )
}