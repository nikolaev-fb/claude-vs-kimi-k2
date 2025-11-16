---
title: React Hooks Best Practices
url: /posts/react-hooks-best-practices
short-description: Learn best practices for using React Hooks effectively in your applications
---

# React Hooks Best Practices

React Hooks revolutionized how we write React components. Here are best practices to follow.

## useState

### Lazy Initialization

```javascript
const [count, setCount] = useState(() => {
  const initial = expensiveComputation()
  return initial
})
```

### Functional Updates

```javascript
const increment = () => {
  setCount(prevCount => prevCount + 1)
}
```

## useEffect

### Cleanup Side Effects

```javascript
useEffect(() => {
  const subscription = dataSource.subscribe()
  return () => {
    subscription.unsubscribe()
  }
}, [dataSource])
```

### Separate Concerns

```javascript
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

useEffect(() => {
  fetchData().then(setData)
}, [id])
```

## Custom Hooks

Extract reusable logic:

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}
```

## useCallback and useMemo

```javascript
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b)
}, [a, b])

const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

## Conclusion

Follow these practices to write better React code!
