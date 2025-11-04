# FE - Pre-interview Assignment

## Getting Started

How to run and test the application locally.

[See GETTING_STARTED.md](./GETTING_STARTED.md)

## Task

Create a new React application that simulates a basic order book for a single financial
instrument — XYZ, priced at £3.98. The app should list existing sell orders and allow users to
place buy orders by quantity or total cost.

The use of AI is accepted for this part of the task, but be sure you understand the output and
can work with it during the technical interview.

**Please submit your solution as a zip archive including your name. Do not include the
node_modules directory or any other large files**

### Requirements

- Display the sell orders in a table with columns:
  - Company – The seller company name
  - Quantity – The amount on sale
  - Submitted – The time the sell order was submitted
- Sell orders should be sorted by submission time ascending
- Allow users to add new buy orders via a form:
  - Choose between buying by total cost or quantity
  - Validate input to prevent negative and zero values
- Use TypeScript throughout the app
- Style elements using a CSS solution of your choice
- Install your favourite test framework
  - add a basic test to ensure the page renders

### UI Layout Diagram

+--------------------------------------------------+
| XYZ Order Book                                   |
+--------------------------------------------------+

 [ Place Buy Order ]

| Order Book: Place Buy Order                             |
|---------------------------------------------------------|
| Buy by: (x) Quantity ( ) Total Cost                     |
|                                                         |
| Value: [__________]                                     |
|                                                         |
| [ Submit Buy Order ]                                    |

[ Sell Orders ]

| Company | Quantity | Submitted        |
|------------ |------------- |------------------|
| Corp C | 100 | 2025-10-22 14:03 |
| Corp A | 50 | 2025-10-22 14:05 |
| Corp B | 200 | 2025-10-22 14:10 |

### Sell order data
Use the following data to populate the sell order table

```json
[
    { "company": "Corp A", "quantity": 50, "submitted": "2025-10-22T14:05:00Z" },
    { "company": "Corp B", "quantity": 200, "submitted": "2025-10-22T14:10:00Z" },
    { "company": "Corp C", "quantity": 100, "submitted": "2025-10-22T14:03:00Z" }
]
```

