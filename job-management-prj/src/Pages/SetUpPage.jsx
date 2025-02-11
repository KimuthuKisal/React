import React from "react";

const SetUpPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Setting Up React</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Option 1: Using Create React App (Recommended)
      </h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          Install Node.js from{" "}
          <a href="https://nodejs.org" className="text-blue-500 underline">
            nodejs.org
          </a>
          .
        </li>
        <li>
          Run{" "}
          <code className="bg-gray-100 p-1 rounded">
            npx create-react-app my-app
          </code>{" "}
          in your terminal.
        </li>
        <li>
          Navigate to your project folder:{" "}
          <code className="bg-gray-100 p-1 rounded">cd my-app</code>.
        </li>
        <li>
          Start the development server:{" "}
          <code className="bg-gray-100 p-1 rounded">npm start</code>.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Option 2: Manual Setup (Advanced)
      </h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          Create a new project folder and initialize npm:
          <pre className="bg-gray-100 p-2 rounded mt-1">
            mkdir my-app cd my-app npm init -y
          </pre>
        </li>
        <li>
          Install React and ReactDOM:
          <pre className="bg-gray-100 p-2 rounded mt-1">
            npm install react react-dom
          </pre>
        </li>
        <li>
          Install Webpack and Babel:
          <pre className="bg-gray-100 p-2 rounded mt-1">
            npm install webpack webpack-cli webpack-dev-server babel-loader
            @babel/core @babel/preset-env @babel/preset-react
            html-webpack-plugin --save-dev
          </pre>
        </li>
        <li>
          Create the following folder structure:
          <pre className="bg-gray-100 p-2 rounded mt-1">my-app/</pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">├── public/</pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">│ └── index.html</pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">├── src/</pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">│ └── index.js</pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">├── package.json</pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">
            ├── webpack.config.js
          </pre>
          <pre className="bg-gray-100 p-2 rounded mt-1">└── .babelrc</pre>
        </li>
        <li>Configure Webpack and Babel as per your project requirements.</li>
        <li>
          Add start script in{" "}
          <code className="bg-gray-100 p-1 rounded">package.json</code>:
          <pre className="bg-gray-100 p-2 rounded mt-1">
            {'"scripts": {'}
            {'"start": "webpack serve --open",'}
            {'"build": "webpack"'}
            {"}"}
          </pre>
        </li>
        <li>
          Run your React app:
          <pre className="bg-gray-100 p-2 rounded mt-1">npm start</pre>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Next Steps</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Install React Router for navigation:{" "}
          <code className="bg-gray-100 p-1 rounded">
            npm install react-router-dom
          </code>
          .
        </li>
        <li>Choose a styling approach: CSS, TailwindCSS, Bootstrap, etc.</li>
        <li>
          Consider state management tools like Redux or Context API for complex
          apps.
        </li>
      </ul>
    </div>
  );
};

export default SetUpPage;
