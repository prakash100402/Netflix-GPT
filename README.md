# 🎬 Netflix GPT - AI Powered Movie Recommendations

Netflix GPT is an AI-powered movie recommendation platform built using React, Tailwind CSS, and Firebase. This application provides a seamless movie browsing experience with real-time AI-driven suggestions, smooth authentication, and an immersive user interface.

## 🚀 Tech Stack

- **React** - Fast and interactive UI.
- **Tailwind CSS** - Modern and responsive styling.
- **Firebase** - User authentication and backend services.
- **TMDB API** - Fetching movie data.
- **YouTube API** - Movie trailers.
- **Gemini API** - AI-powered search recommendations.
- **Redux** - State management.
- **Vercel** - Deployment.

## ✨ Features

### 🔐 Authentication
- Sign Up & Sign In
- Secure authentication with Firebase.
- User-friendly login and signup form.
- Automatic redirection to the Browse page upon successful login.

### 🎥 Browse Page (After Authentication)
#### Header
- Netflix-style top navigation bar.
- Logo, profile section, and search bar.

#### Main Movie Section
- Autoplay trailer in the background (1080p quality).
- Movie title and description overlay.
- Engaging and interactive user interface.

#### Movie Suggestions
- Dynamic list of movies categorized into trending, popular, and recommended.
- Smooth horizontal scrolling for easy navigation.

### 🤖 Netflix GPT AI - Smart Movie Recommendations
#### Search Bar
- AI-powered search for movie recommendations.
- Instant movie suggestions based on keywords.
- Debouncing implemented to optimize API calls and improve performance.

#### Suggested Movies Block
- Displays a curated list of movies.
- AI-driven recommendations based on user search.

#### Loading State
- If data is loading, a visually appealing shimmer UI will be displayed.

### ⚡ API Handling & Performance Optimization
#### Smart Data Fetching
- Prevents unnecessary API calls if data is already available in the store.
- Enhances app performance by caching fetched data.

#### Redux for State Management
- Manages global state efficiently for movies and search queries.
- Centralized data handling to improve app performance.

## 📸 Screenshots (Coming Soon)

## 🛠️ Installation & Setup

### Clone the Repository:
```sh
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt
```

### Install Dependencies:
```sh
npm install
```

### Run the Application:
```sh
npm run start
```

## 🔒 Environment Variables
`.env` file is **gitignored** to protect sensitive information.

## 🌍 Live Demo
Check out the live version of **Netflix GPT AI** here: [Netflix GPT Live](https://vercel.com/prakash100402s-projects/netflix-gpt/53dfg8fnrxTwJD8LbGcTzvGGtk9U)

🎥 Enjoy streaming with **Netflix GPT AI!** 🍿
