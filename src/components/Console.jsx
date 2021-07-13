import React, { useState, useEffect } from 'react';
import { Hook, Console, Decode } from 'console-feed';
import { useTheme } from '../context/ThemeContext';

export default function ConsoleComponent({ userCode, renderConsole }) {
  const [logs, setLogs] = useState([]);
  const { glass2, lightText } = useTheme();

  useEffect(() => {
    Hook(window.console, (log) => {
      setLogs((logs) => [...logs, Decode(log)]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLogs([]);
    try {
      // eslint-disable-next-line no-new-func
      renderConsole && new Function(userCode)();
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderConsole]);

  return (
    <div style={{ backgroundColor: '#242424' }}>
      <Console logs={logs} variant="dark" />
    </div>
  );
}
