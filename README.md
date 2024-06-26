<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#starting-the-project">Starting the project</a>
    </li>
    <li><a href="transfer-the-project-to-typescript">Transfer the project to TypeScript</a>
    </li>
    <li><a href="#create-a-list-component">Create a List Component</a>
    </li>
    <li><a href="#create-a-form-generator-component">Create a Form Generator Component</a>
    </li>
    <li><a href="#create-a-page-generator-component">Create a Page Generator Component</a>
    </li>
  </ol>
</details>

## Starting the project

Project can be started with the following command:
  ```sh
    npm run start
  ```

## Transfer the project to TypeScript

```
  Your first task involves transitioning this project from JavaScript to TypeScript. To ensure
  a robust and type-safe codebase, please configure TypeScript with the following
  compiler options:
    ● "noImplicitAny": true
    ● "strict": true
    ● "strictNullChecks": true
    ● "noImplicitThis": true
  Additionally, implement import aliases in your project configuration. Set up your imports
  to use the format @homework-task/path/to/file.ts.
  In the src/components folder, you will find several components. Your goal is to enhance
  these components with appropriate TypeScript interfaces and types.
```

For this task i added a `tsconfig.json` file and in each component that existed in the project I added appropriate types and changed extension from `.jsx` to `.tsx`. I also added a path configuration into `tsconfig.json` and into `vite.config.js` and also in `.eslintrc.cjs`.

## Create a List Component

```
  Develop a React component that is both scalable and reusable, designed to fetch and
  display data from an API in a list format. The specific API endpoint to be used is
  https://jsonplaceholder.typicode.com/users. For each item in the list, ensure that the
  following keys are displayed: id, name, username, email, and phone.
```

I created a [GenericList](src/components/GenericList.tsx) component which is a generic component. It receives a `queryKey`, `apiUrl` for list fetching and also a CallBack function `renderItem` to render each item of the list. In that component I added a skeleton loader and also error handling.
Example of usage is [List](src/pages/List.tsx) in which I pass the correct link that is in the assignment description and with correct type that is covering all keys that needs to be displayed.

## Create a Form Generator Component

```
  1. Develop a scalable and reusable React component with the following capabilities:
    ● Validation Schema: Accept a validation schema prop to ensure form data adheres to specified rules.
    ● API Hook Call: Incorporate an API hook that handles states such as data, isLoading, and isError.
    ● Callback Function for Form Rendering: Implement a callback function prop (renderForm) that renders the form elements and  their state
  appropriately.
  2. Component Implementation:
    ● Utilize this component to create a form with two fields:
      ○ Input Field (‘title’): A required field with a maximum character limit.
      ○ Textarea Field (‘body’): Also a required field with a maximum character limit.
    ● Both fields should display error messages if the input doesn't meet the
    criteria set by the validation schema.
    ● For form submissions, use the POST method at https://jsonplaceholder.typicode.com/posts. Recommended libraries, but you can use whatever you prefer:
    ● React Query: For handling API calls.
    ● Zod: For defining the validation schema.
    ● React Hook Form: For managing form state, submission, and logic.
    ● Alternatively, you're free to use any library or custom solution that aligns with the above requirements.
```

I created a [GenericForm](src/components/GenericForm.tsx) component which is a generic component too. I used all the libraries recommended for the task. The component is receiving validation schema, mutation function and CallBack function for rendering fields. Component is handling errors as well as successfull mutations. I also considered to disable fields and submitting when there is already a request in progress. 
Example of usage is [Form](src/pages/Form.tsx) in which I generate Schema, mutation function and there I am using a CallBack function as in example of the assignment in order to display fields.  

## Create a Page Generator Component

```
  Your task is to create a reusable React component for building web pages. This
  component should be designed to handle a variety of page layouts and components
  dynamically, based on the props it receives.
    ● Dynamic Layout HandlingJavaScript
    ● Scalability and Reusability: It should be easily scalable to accommodate future layout types and be reusable across different pages.
    ● Prop Structure: The main prop is an array of objects, each representing a section of the page with its own layout and components.
      ○ Each object in this array contains:
        ■ type: identifying the layout type.
        ■ components: an array of objects, each describing a component to be rendered in this section.
        ■ props: properties specific to that layout (ex. background color)
      ○ Each component object has:
        ■ type: the type of the component (e.g., componentHero).
        ■ props: properties specific to that component.
  You can use the components provided in src/components. If you desire, you can add
  your own components or change the existing ones.
```

For this task I created [PageGenerator](src/components/PageGenerator.tsx) component. The component is following the properties from the assignment example. Since there is nested rendering of components recursive function can be solution. With `renderComponent` function I make sure that if there are deeply nested components inside of current component they are rendered. This will not work if a component does not render it's children, so in this project it will only work for [Layout](src/components/Layout.tsx) component when passing components into it. Also new components must be added in `componentRegistry` in order to be used inside of a PageGenerator component.
I covered an example of it in [SimplePage](src/pages/SimplePage.tsx) component in which I used predefined components and assets in this project for the example.