# Technical Test - My Todo App

## Description

To get started with this technical test, please follow these steps:

1. Fork this repository to your own GitHub account
2. Clone your forked repository locally
3. Implement the required features in your fork
4. Once completed, submit your solution by sharing the link to your forked repository

This technical test involves implementing a TODO application API that will be consumed by the my-todo-app frontend. The API should provide the following functionalities:

### Required Features

- Create new TODO items
- List all TODO items
- Delete TODO items

### Technical Requirements

- RESTful API design
- JSON responses

### API Endpoints

#### GET /api/todos

- Returns a list of all TODO items
- Response format:

```json
{
  [
    {
      "id": "string",
      "title": "string",
      "completed": boolean,
      "description": "string"
    }
  ]
}
```

#### POST /api/todos

- Creates a new TODO item
- Request body:

```json
{
  "title": "string",
  "description": "string",
  "completed": boolean,
}
```

#### DELETE /api/todos/:id

- Deletes a TODO item
