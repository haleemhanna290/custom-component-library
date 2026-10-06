import Alert from '../components/Alert'

export default {
  title: 'HannaUI/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Saved successfully',
    message: 'Your changes have been applied.',
    type: 'success',
    dismissible: false,
  },
  argTypes: {
    type: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    dismissible: { control: 'boolean' },
  },
}

export const Default = {
  render: (args) => <Alert {...args} />,
}

export const Dismissible = {
  render: () => <Alert type="warning" title="Heads up" message="A deployment is scheduled for 4:00 PM." dismissible />,
}

export const Error = {
  render: () => <Alert type="error" title="Sync failed" message="We could not connect to the service." />,
}
