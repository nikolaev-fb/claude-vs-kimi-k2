---
title: "JavaScript Array Methods You Should Know"
url: "/posts/javascript-array-methods"
short-description: "A comprehensive guide to essential JavaScript array methods"
---

# JavaScript Array Methods You Should Know

JavaScript arrays come with powerful built-in methods that make data manipulation easier. Here are the essential ones every developer should master.

## Transformation Methods

### map() - Transform Array Elements

```javascript
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)
console.log(doubled) // [2, 4, 6, 8, 10]
```

### filter() - Filter Array Elements

```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 18 }
]

const adults = users.filter(user => user.age >= 18)
console.log(adults) // All users in this case
```

### reduce() - Reduce Array to Single Value

```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum) // 15

// More complex example
const cart = [
  { price: 25, quantity: 2 },
  { price: 50, quantity: 1 },
  { price: 10, quantity: 5 }
]

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
console.log(total) // 140
```

## Search Methods

### find() - Find First Matching Element

```javascript
const products = [
  { id: 1, name: 'Laptop', inStock: true },
  { id: 2, name: 'Mouse', inStock: false },
  { id: 3, name: 'Keyboard', inStock: true }
]

const availableProduct = products.find(product => product.inStock)
console.log(availableProduct) // { id: 1, name: 'Laptop', inStock: true }
```

### includes() - Check if Array Contains Value

```javascript
const fruits = ['apple', 'banana', 'orange']
console.log(fruits.includes('banana')) // true
console.log(fruits.includes('grape')) // false
```

## Iteration Methods

### forEach() - Iterate Over Array

```javascript
const colors = ['red', 'green', 'blue']
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`)
})
```

## Combination Examples

```javascript
// Complex data processing pipeline
const students = [
  { name: 'Alice', scores: [90, 85, 92] },
  { name: 'Bob', scores: [78, 88, 80] },
  { name: 'Charlie', scores: [95, 92, 98] }
]

const topStudents = students
  .map(student => ({
    ...student,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
  }))
  .filter(student => student.average >= 85)
  .sort((a, b) => b.average - a.average)

console.log(topStudents)
```

## Key Takeaways

1. **Use map() when creating a new array from existing elements**
2. **Use filter() to create a subset of elements**
3. **Use reduce() for aggregating values**
4. **Combine methods for powerful data processing**

Master these methods and you'll write more concise, readable code! 🔥