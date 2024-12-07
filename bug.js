```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This effect runs whenever 'count' changes
    console.log('Count changed:', count);
    // Potential issue: if an async operation is performed here,
    // it might continue even after the component unmounts
    const timeoutId = setTimeout(() => {
      console.log('Timeout triggered');
    }, 1000);
    
    // Cleanup function to clear the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```