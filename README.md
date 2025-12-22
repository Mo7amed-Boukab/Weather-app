# Weather App

A modern, responsive weather application built with React and Vite. This application allows users to search for weather conditions in any city and displays both current weather and a 5-day forecast.

## Features

- **Real-time Weather:** Get current temperature, weather description, and wind speed.
- **5-Day Forecast:** View weather predictions for the upcoming days.
- **Search Functionality:** Easily search for any city worldwide.
- **Responsive Design:** Beautiful UI with glassmorphism effects using Tailwind CSS.
- **Fast Performance:** Powered by Vite for lightning-fast development and build times.

## Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **API:** OpenWeatherMap

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Configuration

The application uses the OpenWeatherMap API.

> **Note:** The API key is currently set in `src/App.jsx`. For a production environment, it is recommended to use environment variables.

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).
