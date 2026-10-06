import Card from '../components/Card'
import Button from '../components/Button'

export default {
  title: 'HannaUI/Card',
  component: Card,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => (
    <Card title="Project brief" description="A clean workspace for your engineering team." footer={<Button size="small">Open</Button>}>
      <p>Lightweight and easy to extend.</p>
    </Card>
  ),
}

export const ImageCard = {
  render: () => (
    <Card
      title="Launch dashboard"
      description="Track releases, QA, and documentation in one place."
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
      footer={<Button size="small" variant="secondary">Learn more</Button>}
    />
  ),
}

export const ProductCard = {
  render: () => (
    <Card
      title="HannaUI Pro"
      description="Create polished experiences with accessible building blocks."
      footer={<Button size="small" variant="primary">Upgrade</Button>}
    >
      <strong>Everything included</strong>
    </Card>
  ),
}

export const Clickable = {
  render: () => (
    <Card
      title="Profile card"
      description="A clickable card pattern for dashboards and team directories."
      clickable
      onClick={() => alert('Card clicked')}
      footer={<Button size="small" variant="ghost">View profile</Button>}
    />
  ),
}
