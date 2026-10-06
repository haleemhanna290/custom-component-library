import Navbar from '../components/Navbar'

export default {
  title: 'HannaUI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {
    logo: 'HannaUI',
    ctaText: 'Get Started',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Components', href: '#components' },
      { label: 'Docs', href: '#docs' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
}

export const Default = {
  render: (args) => <Navbar {...args} />,
}

export const ProductStyle = {
  render: () => (
    <Navbar
      logo="HannaUI"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Features', href: '#features' },
        { label: 'Docs', href: '#docs' },
      ]}
      ctaText="Launch"
    />
  ),
}
