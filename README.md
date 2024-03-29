# Component Library with Vite, Typescript, React, Ladle, and Playwright

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. We will set a stanbdard node version later so everyone is using the same node version. 

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gurusewak/component-library.git
   ```

2. Navigate to the project directory:

   ```bash
   cd component-library
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server, run:

```bash
npm run dev
```

This will launch the development server, and you can view your components in the browser.

### Unit Testing

Playwright is used for unit testing. Run the following command to execute the tests:

```bash
npm run test
```

This will run Playwright tests and provide feedback on the status of your components.

### Building

To build your component library for production, use:

```bash
npm run build
```

This will generate a `dist` folder with the compiled code.

### Deployment

This repository is configured for automated deployment to GitHub Pages with GitHub Actions. On every push to `main` branch there is a new version published. You can access active deployement [here](https://gurusewak.github.io/component-library/).

If you want to trigger deployment manually visit [Actions tab](https://github.com/gurusewak/component-library/actions/workflows/deploy.yml) where you can run deploy workflow from any branch.


## Project Structure

The project is structured as follows:

- `src/`: Contains your React components.
- `src/tests/`: Holds Playwright test files.
- `src/stories/`: Configurations and stories for Ladle.
- `src/stories/componentName/`: Folder for each component's Ladle stories.
  - `button.stories.mdx`: Markdown file for component documentation and Ladle stories.
  - `button.stories.tsx`: Ladle stories configuration file.
- `src/stories/componentName/PropsTable.tsx`: Component to generate props table for documentation.
- `type-schema/component/type.json`: JSON file generated by Typedoc for PropsTable.
- `typedoc.json`: Configuration file for Typedoc.
- `docgen.js`: Script for Typedoc JSON generation.

- `dist/`: Output directory for production build.
- `public/`: Static assets.

## Typedoc Usage

Typedoc is used to generate the `type.json` file, which is utilized by Ladle for creating the PropsTable in your component documentation. Follow these steps for Typedoc usage:

     Alternatively, you can run `npm run generate:schemas` to automatically generate the `type.json` file during the build process.

     **Note:** If you want to generate it manually, you can run:

     ```bash
     node docgen.js
     ```

Now, you can easily run `npm run generate:type-json` to generate the `type.json` file using Typedoc manually or include it as part of your build process. This file is then utilized by Ladle during the story generation process for creating the PropsTable in your component documentation.

## Ladle Story Generation

With the Typedoc setup in place, follow these steps for Ladle story generation, as mentioned in the previous section:

1. **Component Folder Creation:**
   - Inside the `src/stories` directory, create a dedicated folder for each component. For example, you can create `src/stories/button` for a Button component.

2. **Files within Component Folder:**
   - Inside the component folder, create two essential files:
      - `button.stories.mdx`: A Markdown file where you document your component and define Ladle stories.
      - `button.stories.tsx`: A Ladle stories configuration file.

3. **PropsTable Creation:**
   - In the component folder, create a `PropsTable.tsx` file. This file is responsible for generating the props table for documentation.

4. **Ladle Build:**
   - Run the following command to execute Ladle build:

     ```bash
     npx ladle build
     ```

     This command will process your Ladle stories and generate the necessary artifacts.

5. **Ladle Preview:**
   - To preview your Ladle stories, use the following command:

     ```bash
     npx ladle preview
     ```

     This command will launch a local server for previewing your Ladle stories. Visit the provided URL in your browser to view the documentation and stories.

By following these steps, you can efficiently generate and preview Ladle stories for your React components, including the automatic generation of the `type.json` file using Typedoc for the PropsTable. This ensures comprehensive documentation and visualization of component usage.



## Installing this library in another project:

To install the component library from the command line using npm and a specific tag/version, use the following command:

```bash
npm install git://github.com/gurusewak/component-library.git#<tagName>
```

Replace `<tagName>` with the desired tag or version.

### Install via package.json:

You can add the component library as a dependency in your `package.json` file with a specific tag or version:

```json
{
  "dependencies": {
    "component-library": "git://github.com/gurusewak/component-library.git#<tagName>"
  }
}
```

Replace `<tagName>` with the desired tag or version.

By specifying the `tagName`, you ensure that users get the exact version they intend to install, providing better version control and stability.

Certainly! Let's add that information to the Typedoc Usage section:

## Usage

Once you have installed the library, you can start using its components in your project.

1. **Import the components you need into your project's codebase. For example:**

   ```javascript
   import { Button } from '@gurusewak/component-library';
   ```

   Replace `'@gurusewak/component-library'` with the appropriate path or package name based on your project's setup.

2. **Use the imported `Button` component in your project's code:**

   ```javascript
   import React from 'react';

   const MyComponent = () => {
     const handleClick = () => {
       // Handle button click
     };

     return (
       <div>
         <Button onClick={handleClick}>Click Me</Button>
       </div>
     );
   };

   export default MyComponent;
   ```

This example assumes that `Button` is a component provided by the library, and `handleClick` is a function defined in your project. Customize the component as needed to fit with the overall look and feel of your project. You may need to apply additional styling or configurations depending on your requirements.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
