import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  layout: 'padded',
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#f6f7ff' },
      { name: 'dark', value: '#1e2434' },
    ],
  },
}
