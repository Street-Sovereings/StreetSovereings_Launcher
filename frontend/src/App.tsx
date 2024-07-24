import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import './styles/App.scss';
import { RunExecutable } from '../wailsjs/go/main/App';

export default function App() {
    const [path, setPath] = useState<string | undefined>(undefined);
    const [checkPath, setCheckPath] = useState<string | undefined>(undefined);

    useEffect(() => {
        setCheckPath(Cookies.get("path") || undefined);
    }, []);

    if (checkPath) {
        setPath(checkPath);
        console.log("path: ", checkPath);
    } else {
        console.log("path: Nil");
    }

    return (
        <>
          <div className="app">
      <div className="sidebar">
        <button className="sidebar-button">Set Path</button>
        <button className="sidebar-button">Launch Settings</button>
        <button className="sidebar-button">Reset Config</button>
        <button className="sidebar-button">Open config.json</button>
        <button className="sidebar-button delete-button">Delete from device</button>
      </div>
      <div className="main">
        <h1>Street Sovereigns</h1>
        <button className="launch-button" onClick={() => RunExecutable(path || '')}>Launch</button>
      </div>
    </div>
        </>
    )
}