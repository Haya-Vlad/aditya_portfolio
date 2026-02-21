# How to Run Your Portfolio Locally

This guide explains how to manage the development server for your Next.js portfolio.

## 1. Start the Server
Open a terminal in the `aditya-portfolio` directory and run:

```powershell
npm run dev
```

The server will start, and you should see a message like `ready - started server on 0.0.0.0:3000, url: http://localhost:3000`.

## 2. View the Website
Once the server is running, open your browser and go to:
[http://localhost:3000](http://localhost:3000)

## 3. Stop the Server
To stop the server, go back to the terminal where it's running and press:
`Ctrl + C`
Then type `y` and press `Enter` if prompted.

## 4. Troubleshooting
- **Port already in use**: If you see an error saying port 3000 is in use, it means another instance is already running. You can close that terminal or find the process and stop it.
- **Dependencies**: If things aren't working, try running `npm install` first to make sure all packages are up to date.
