import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

export default {
  title: 'HannaUI/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export const Default = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open modal</Button>
          <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action" description="This action will publish your changes.">
            <p>Are you sure you want to continue?</p>
          </Modal>
        </>
      )
    }

    return <Demo />
  },
}

export const WithConfirm = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button onClick={() => setOpen(true)}>Launch confirm</Button>
          <Modal isOpen={open} onClose={() => setOpen(false)} title="Delete item" description="This cannot be undone." confirmText="Delete" onConfirm={() => setOpen(false)}>
            <p>Delete the selected workspace?</p>
          </Modal>
        </>
      )
    }

    return <Demo />
  },
}
