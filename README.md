# socialNetting18

A social network API utilizing a NoSQL database to enable users to share their thoughts, react to friends' thoughts, and create a friend list.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Endpoints](#endpoints)
4. [Testing](#testing)
5. [Dependencies](#dependencies)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/nosql-social-network.git
cd nosql-social-network
npm install
```

## Usage

Start the server:

```bash
npm start
```

The API will be accessible at `http://localhost:3000`.

## Endpoints

- `GET /api/users`: Retrieve all users
- `GET /api/thoughts`: Retrieve all thoughts
- `POST /api/thoughts`: Create a thought
- `PUT /api/thoughts/:id`: Update a thought
- `DELETE /api/thoughts/:id`: Delete a thought
- More endpoints are detailed in the documentation

## Testing (Walkthrough Video)

https://clipchamp.com/watch/8OloVN2cFRe
or
https://www.youtube.com/watch?v=8c13EIcZ-dw

## Dependencies

- [Express](https://expressjs.com/): Web framework
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling
- [Moment](https://momentjs.com/): Date manipulation
