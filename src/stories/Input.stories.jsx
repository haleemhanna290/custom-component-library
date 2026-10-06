import Input from '../components/Input'

export default {
  title: 'HannaUI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    type: 'email',
    helperText: 'We will use this address for product updates.',
    disabled: false,
    required: false,
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    error: { control: 'text' },
  },
}

export const Default = {
  render: (args) => <Input {...args} />,
}

export const WithError = {
  render: () => (
    <Input
      label="Project name"
      placeholder="Enter project name"
      error="Project name is required."
      helperText="Choose a unique product name."
      value=""
      onChange={() => {}}
    />
  ),
}

export const Disabled = {
  render: () => <Input label="Team handle" value="@hannaui" disabled />,
}

export const Search = {
  render: () => <Input label="Search" type="search" placeholder="Search components" />,
}
