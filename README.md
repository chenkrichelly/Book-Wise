 # BookWise   <img src="https://github.com/EASS-HIT-PART-A-2024-CLASS-IV/BookWise/blob/main/frontend/public/favicon.ico" alt="Project Logo" width="50" height="50" />

BookWise is a microservice-based book management system designed to allow users explore, save, and manage their favorite books.

## Microservices

### 1. Backend (Python FastAPI)
Provides a RESTful API for user authentication, book search using Google Books API, and managing personal booklists.

### 2. Frontend (React)
Offers a dynamic and user-friendly interface. It allows users to search for books, manage their personal booklists, and handle user profiles. The React app interacts with the backend via API calls to fetch and display data, ensuring a responsive user experience.

### 3. Database (MySQL)
Stores user data and book information, ensuring reliable data management.


### 4. Docker
Used to containerize all components (backend, frontend, and database), making the system easy to deploy and maintain. Docker Compose facilitates the orchestration of these containers, ensuring they can communicate seamlessly within isolated environments. 

## Features

- **User Authentication:** Secure login and registration system to manage user sessions.
- **Book Search:** Leverage Google Books API to search for books by titles, authors etc.
- **Personal Booklist:** Allows users to save their favorite books and manage their personal booklist.

## Getting Started

### Prerequisites

- Docker :whale2:
- Docker Compose
- Python 3.9 or newer

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/EASS-HIT-PART-A-2024-CLASS-IV/BookWise.git
   cd BookWise
   ```

2. **Build and run the Docker containers:**

   ```bash
   docker-compose up --build
   ```

2. **Enjoy! :dizzy: :open_book:**

   The BookWise application is running and awaiting your use at: `http://localhost:3000`
   
   API documentation: `http://localhost:8000/docs`

### Testing

To ensure the quality and reliability of the backend service, we employ pytest for running our suite of automated tests. 
Run the tests for the application using the following command:

```bash
docker-compose run --rm backend pytest
```

## Demo
Click the image to watch the project video demo:

[![Video Demo](frontend/src/images/Screenshot.png)](https://drive.google.com/file/d/1XBQS91OlSaluZQhlbI98PPIo7Q3YMAn1/view?usp=sharing)
External link to the video: https://drive.google.com/file/d/1XBQS91OlSaluZQhlbI98PPIo7Q3YMAn1/view?usp=sharing

Enjoy exploring the site and get reading!
