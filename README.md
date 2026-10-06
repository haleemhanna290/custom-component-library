# HannaUI

Beautiful. Accessible. Reusable.

HannaUI is a modern React component library designed for developers who want fast, polished, and accessible UI building blocks without relying on heavier frameworks or UI kits.

## 1. Introduction

HannaUI provides a collection of reusable components for product dashboards, internal tools, documentation sites, and marketing pages. It emphasizes:

- Accessible semantics and ARIA guidance
- Reusable patterns and clean component structure
- Simple customization through CSS variables
- Responsive behavior across mobile and desktop layouts
- Storybook-based component exploration

## 2. Features

- Reusable React components
- Semantic HTML and accessible interactions
- Ready-made patterns for buttons, inputs, cards, modals, badges, alerts, and navbars
- Storybook documentation with controls and examples
- Clean CSS theme system using CSS variables
- Responsive design for mobile, tablet, and desktop screens

## 3. Components

- Button
- Input
- Card
- Modal
- Badge
- Alert
- Navbar

## 4. Installation

```bash
npm install hanna-ui
```

## 5. Usage

```jsx
import { Button } from 'hanna-ui'

function App() {
  return (
    <Button variant="primary">
      Get Started
    </Button>
  )
}
```

## 6. Component examples

```jsx
import { Button, Input, Card, Modal, Badge, Alert, Navbar } from 'hanna-ui'
```

Example layout:

```jsx
function ExamplePage() {
  return (
    <>
      <Navbar logo="HannaUI" ctaText="Get Started" />
      <Button variant="primary">Publish</Button>
      <Input label="Workspace name" placeholder="My project" />
      <Badge variant="success">Live</Badge>
      <Alert type="info" title="Notice" message="Everything looks good." />
    </>
  )
}
```

## 7. Accessibility

HannaUI follows accessibility best practices by using semantic HTML, visible focus styles, keyboard support, and ARIA attributes only when native HTML is not sufficient. Specific patterns include:

- aria-invalid for invalid form states
- aria-required for required form fields
- aria-describedby for helper text and error messages
- role="dialog" and aria-modal="true" for modal dialogs
- aria-live for status and alert content
- keyboard-friendly focus states and Escape handling

## 8. Storybook

Run the component docs locally:

```bash
npm install
npm run storybook
```

Storybook will launch on port 6006.

## 9. Development

```bash
npm install
npm run dev
```

The documentation site runs in Vite and demonstrates the reusable components in context.

## 10. Building the package

```bash
npm run build
```

## 11. Publishing to NPM

1. Update package metadata in package.json.
2. Make sure the project is ready and tested.
3. Log in to npm:

```bash
npm login
```

4. Publish the package:

```bash
npm publish --access public
```

> This project is prepared for manual publishing but is not automatically published.

## 12. Project structure

```bash
src/
  components/
    Alert.jsx
    Badge.jsx
    Button.jsx
    Card.jsx
    Input.jsx
    Modal.jsx
    Navbar.jsx
    index.js
  stories/
    Alert.stories.jsx
    Badge.stories.jsx
    Button.stories.jsx
    Card.stories.jsx
    Input.stories.jsx
    Modal.stories.jsx
    Navbar.stories.jsx
  App.jsx
  App.css
  index.css
  index.js
.storybook/
  main.js
  preview.js
README.md
package.json
```

## 13. License

MIT

## 14. Author

Hanna
