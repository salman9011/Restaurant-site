# Food fire APP

Namaste Food is a web application designed to help users discover and explore various restaurants. With intuitive search functionalities, detailed restaurant information, and a user-friendly interface, Namaste Food aims to enhance the dining experience for users.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Namaste Food offers users the ability to search for restaurants based on various criteria such as cuisine, location, or restaurant name. It provides detailed information about each restaurant including its name, star rating, cuisine type, and estimated delivery time. The project focuses on delivering a seamless and enjoyable experience for users seeking to explore dining options in their area.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Parcel**: Web application bundler with features like hot module replacement (HMR), caching, image optimization, and minification.
- **Redux Toolkit**: Simplified state management for React applications.
- **React Router**: Library for client-side routing in web applications.
- **Jest**: JavaScript testing framework.
- **React Testing Library**: Testing utilities for React applications.

## Features

- **Search Functionality**: Users can search for restaurants by name, cuisine, or location.
- **Restaurant Details**: Detailed information about each restaurant including its name, star rating, cuisine type, and estimated delivery time.
- **Responsive Design**: Optimized for various devices including desktops, tablets, and mobile phones.
- **Secure Connection**: Utilizes HTTPS to ensure secure data transmission.
- **User-Friendly Interface**: Intuitive design for easy navigation and usage.

## Development Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
$ git clone https://github.com/salman9011/Restaurant-site.git
$ cd namaste-food
$ npm install
$ npm start
namaste-food/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── RestaurantContainer.js
│   │   ├── RestaurantCard.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .babelrc
├── .gitignore
├── package.json
├── README.md
└── ...
$ npm test



