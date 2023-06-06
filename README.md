# Organo

Organo is a Single Page Application (SPA) developed using React.js, HTML, and CSS. It provides a user-friendly interface to register employees with their name, role, profile picture, and team. The registered employees are then displayed on the "Team Page" for easy reference.

## Getting Started

To get started with Organo, follow the steps below:

1. Clone the repository: `git clone https://github.com/pedrovsn/organo.git`
2. Navigate to the project directory: `cd organo`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to access Organo.

## Usage

Upon accessing Organo, you will land on the home page where you can register new employees. Fill in the required information, including name, role, profile picture, and team, and click the "Register" button to add the employee.

Once an employee is registered, you can navigate to the "Team Page" using the navigation bar at the top. Here, you will find a list of all the registered employees, including their names, roles, profile pictures, and teams.

Feel free to explore the application and interact with its features to manage your team effectively.

## File Structure

The file structure of the Organo application is as follows:

```
organo
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Employee
│   │   │   ├── index.js
│   │   │   └── Employee.css
│   │   ├── Form
│   │   │   ├── index.js
│   │   │   └── Form.css
│   │   ├── Team
│   │   │   ├── index.js
│   │   │   └── Team.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

- The `public` directory contains the `index.html` file and other static assets required for the application.
- The `src` directory contains the application's source code.
- The `components` directory houses the various React components used in the application.
  - Each component has its own folder, such as `Employee`, `Home`, and `TeamPage`.
  - Inside each component folder, there is an `index.js` file that contains the component logic.
  - Additionally, there is a corresponding `ComponentName.css` file that handles the component's styling.
- The `App.js` file serves as the main entry point for the application.
- The `index.js` file is responsible for rendering the application root component.

## Customization

If you wish to customize the Organo application, you can modify the existing components or create new ones according to your requirements. The styling can be adjusted by editing the CSS files associated with each component.

## Contributing

Contributions to Organo are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the project's GitHub repository.

Before contributing, make sure to read the contributing guidelines in the repository to understand the project's coding standards and processes.

## License

Organo is open-source software released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.