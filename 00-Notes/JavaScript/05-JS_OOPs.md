
## 🔍 Encapsulation vs Abstraction (JavaScript OOP)

> This note explains the main difference between Encapsulation and Abstraction in short and simple terms.

| Concept     | Encapsulation                            | Abstraction                                |
|-------------|-------------------------------------------|--------------------------------------------|
| **Meaning** | > Hides internal **data** using private fields | > Hides internal **logic**, shows only what's needed |
| **Focus**   | > Focuses on *how* data is stored or protected | > Focuses on *what* functionality is exposed |
| **Use**     | > Uses `#privateField`, setters/getters       | > Uses public methods like `deposit()` to simplify usage |
| **Goal**    | > Restrict direct access to object internals  | > Simplify the interface and reduce complexity |
| **Example** | > `#balance` is private, not directly accessible | > Only `getBalance()` and `deposit()` are shown to user |

---

> ✅ **Quick Reminder**  
> - **Encapsulation** = Hides data like a capsule 💊  
> - **Abstraction** = Hides complexity like an ATM UI 🏧

```js
// Example: Both encapsulation and abstraction
class BankAccount {
  #balance = 0; // 🔐 Encapsulation

  deposit(amount) {
    this.#balance += amount; // 🎭 Abstraction
  }

  getBalance() {
    return `$${this.#balance}`; // 🎭 Only exposes needed info
  }
}
