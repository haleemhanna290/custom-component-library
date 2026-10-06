import Badge from '../components/Badge'

export default {
  title: 'HannaUI/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'New',
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'neutral', 'primary'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
}

export const Default = {
  render: (args) => <Badge {...args} />,
}

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Popular</Badge>
      <Badge variant="danger">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
    </div>
  ),
}
