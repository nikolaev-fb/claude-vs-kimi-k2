---
title: "React Hooks Best Practices"
url: "/posts/react-hooks-best-practices"
short-description: "Essential patterns and practices for using React Hooks effectively"
---

# React Hooks Best Practices

React Hooks revolutionized how we write React components. Here are essential best practices to follow when using hooks.

## State Management

### 1. Keep State Local When Possible

```javascript
// Good: Local state for component-specific data
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

### 2. Use useState for Simpler State

```javascript
// Good: Simple state with useState
function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
    </form>
  )
}
```

## Effects and Side Effects

### 3. Use useEffect for Side Effects

```javascript
// Good: Data fetching with useEffect
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser(userId).then(setUser)
  }, [userId]) // Dependency array includes userId

  return <div>{user?.name}</div>
}
```

### 4. Clean Up Side Effects

```javascript
// Good: Cleanup subscriptions
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId)
    connection.connect()

    return () => connection.disconnect()
  }, [roomId])
}
```

## Performance Optimization

### 5. Use useMemo for Expensive Calculations

```javascript
// Good: Memoizing expensive calculations
function TodoList({ todos, filter }) {
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.category === filter)
  }, [todos, filter])

  return <div>{filteredTodos.map(todo => <Todo key={todo.id} {...todo} />)}</div>
}
```

### 6. Use useCallback for Stable References

```javascript
// Good: Preventing unnecessary re-renders
function Parent({ data }) {
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id)
  }, [])

  return <Child data={data} onClick={handleClick} />
}
```

## Common Mistakes to Avoid

1. **Don't call Hooks inside loops, conditions, or nested functions**
2. **Don't forget the dependency array in useEffect**
3. **Don't over-optimize with useMemo and useCallback**
4. **Don't use useState when you can derive state from props**

Follow these practices and you'll write cleaner, more maintainable React code! 📚