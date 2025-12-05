# TDD TypeScript Practice

A collection of **Test-Driven Development** katas implemented in TypeScript, demonstrating clean code practices, SOLID principles, and professional testing patterns.

## Why This Repository?

This project showcases my approach to software development through deliberate practice. Each kata demonstrates:

- **Test-First Development** — Tests written before implementation, following Red → Green → Refactor
- **SOLID Principles** — Interface segregation, dependency inversion, and single responsibility throughout
- **Design Patterns** — Decorator, Strategy, and Dependency Injection patterns in practice
- **Comprehensive Test Coverage** — Equivalence partitioning, boundary analysis, and parameterized tests

## Tech Stack

| Tool | Purpose |
|------|---------|
| TypeScript 5.x | Type-safe implementation |
| Jest | Testing framework |
| ts-jest | TypeScript preprocessor for Jest |

## Katas Implemented

### 1. String Calculator
*Complexity: Advanced*

A calculator that parses and sums numbers from string input with support for custom delimiters.

**Key Features:**
- Multiple delimiter support (single-char, multi-char, multiple delimiters)
- Negative number validation with detailed error messages
- Large number filtering (>1000 ignored)
- Custom delimiter syntax: `//[delimiter]\n{numbers}`

**Concepts Demonstrated:**
- Input parsing and validation
- Error handling patterns
- Incremental complexity through TDD

```typescript
"//[***]\n1***2***3" → 6
"//;\n1;2" → 3
"-1,2" → throws "negatives not allowed : -1"
```

---

### 2. CSV File Writer System
*Complexity: Advanced*

A composable file writing system demonstrating the Decorator pattern and Dependency Inversion.

**Architecture:**
```
┌─────────────────────────────┐
│   UniqueCustomerFileWriter  │  ← Filters duplicates
└──────────────┬──────────────┘
               │ decorates
┌──────────────▼──────────────┐
│  BatchCustomerFileWriter    │  ← Splits into batched files
└──────────────┬──────────────┘
               │ decorates
┌──────────────▼──────────────┐
│      CsvFileWriter          │  ← Core CSV formatting
└──────────────┬──────────────┘
               │ depends on
┌──────────────▼──────────────┐
│    IFileSystem (interface)  │  ← Abstraction for testing
└─────────────────────────────┘
```

**Concepts Demonstrated:**
- **Decorator Pattern** — Composable writers that wrap each other
- **Dependency Inversion** — All writers depend on `IFileWriter<T>` interface
- **Interface Segregation** — Focused interfaces (`IFileSystem`, `IFileWriter<T>`)
- **Open/Closed Principle** — New behaviors added without modifying existing code

---

### 3. Character Copier
*Complexity: Intermediate*

Copies characters from a source to a destination until a newline is encountered.

**Concepts Demonstrated:**
- **Dependency Injection** — Source and destination injected via constructor
- **Interface-based design** — `ISource`, `IDestination`, `ICopier`
- **Mock-based testing** — Verifying interactions, not just state

```typescript
interface ISource { readChar(): string }
interface IDestination { writeChar(str: string): void }
```

---

### 4. FizzBuzz (Extended)
*Complexity: Intermediate*

Classic FizzBuzz with an additional "Wizz" rule for prime numbers.

**Rules:**
| Condition | Output |
|-----------|--------|
| Multiple of 15 | FizzBuzz |
| Multiple of 3 (not prime) | Fizz |
| Multiple of 5 (not prime) | Buzz |
| Prime = 3 | WizzFizz |
| Prime = 5 | WizzBuzz |
| Other primes | Wizz |

**Concepts Demonstrated:**
- Enum-based return types for type safety
- Rule ordering and precedence
- Prime number detection algorithm

---

### 5. Rock Paper Scissors
*Complexity: Basic*

Game logic with lookup-table pattern for win conditions.

**Concepts Demonstrated:**
- **Data-driven design** — Winning scenarios defined as data, not conditionals
- **Type-safe enums** — `MOVE` and `RESULT` enums prevent invalid states
- **Lookup pattern** — O(1) result determination

```typescript
private winningMoves: SCENARIO[] = [
  { p1: MOVE.PAPER, p2: MOVE.ROCK },
  { p1: MOVE.ROCK, p2: MOVE.SCISSORS },
  { p1: MOVE.SCISSORS, p2: MOVE.PAPER },
];
```

---

### 6. Age Calculator
*Complexity: Intermediate*

Calculates age given birth date and target date with leap year handling.

**Edge Cases Handled:**
- Target date before birth date (throws error)
- Same date comparison
- Leap year birth dates (Feb 29th)
- Birthday passed vs. not yet passed in target year

---

## Testing Approach

### Equivalence Partitioning

Each kata identifies distinct input classes and tests representatives from each:

```typescript
describe('Custom Delimiter', () => {
  it.each([
    { input: "//;\n1;2", expected: 3 },
    { input: "//,\n1,4", expected: 5 },
    { input: "//@\n1@7", expected: 8 }
  ])(`input: $input → $expected`, ({ input, expected }) => {
    expect(sut.add(input)).toBe(expected);
  });
});
```

### Test Organization

Tests follow a consistent structure:

```
describe('[Feature]')
  └── describe('[Scenario/Partition]')
        └── it.each([cases])('[Expectation]')
```

### Mock Patterns

Interaction-based testing for I/O boundaries:

```typescript
const createMockFileSystem = () => ({
  writeLine: jest.fn()
});

// Verify behavior, not implementation
expect(mockFileSystem.writeLine)
  .toHaveBeenCalledWith(fileName, expectedCsvRow);
```

---

## Project Structure

```
├── src/
│   ├── string-calculator/     # Parser with custom delimiters
│   ├── csv-file-writer/       # Core CSV writer
│   ├── batch-csv-file-writer/ # Batching decorator
│   ├── unique-customer-file-writer/ # Deduplication decorator
│   ├── character-copier/      # I/O abstraction kata
│   ├── fizz-buzz/             # Extended FizzBuzz
│   ├── rock-paper-scissors/   # Game logic
│   ├── age-calculator/        # Date handling
│   └── utils/                 # Shared utilities
│
├── test/src/                  # Mirror structure for tests
│   └── csv-file-writer/
│       └── customer-file-writer-helper.ts  # Test utilities/factories
│
├── jest.config.js
├── tsconfig.json
└── package.json
```

---

## Running the Tests

```bash
# Install dependencies
npm install

# Run all tests with coverage
npm test

# Run in watch mode (TDD mode)
npm run tdd
```

---

## Key Takeaways

| Principle | Implementation |
|-----------|----------------|
| **Single Responsibility** | Each class has one reason to change |
| **Open/Closed** | Decorators extend behavior without modification |
| **Liskov Substitution** | All `IFileWriter<T>` implementations are interchangeable |
| **Interface Segregation** | Small, focused interfaces (`ISource`, `IDestination`) |
| **Dependency Inversion** | High-level modules depend on abstractions |

---

## About

This repository represents my commitment to continuous improvement through deliberate practice. TDD isn't just a testing technique—it's a design tool that drives cleaner architecture and more maintainable code.

---

*Built with TypeScript, tested with Jest, designed with intention.*
