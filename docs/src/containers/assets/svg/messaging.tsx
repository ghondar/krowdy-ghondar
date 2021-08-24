import React from 'react'
import {
  NewMessage as NewMessageSvg,
  SendingEmails as SendingEmailsSvg,
  SentMessages as SentMessagesSvg
} from '@krowdy-ui/assets'

export default function () {
  return (
    <div style={{
      display            : 'grid',
      gap                : 12,
      gridTemplateColumns: '1fr 1fr',
      width              : '75%'
    }}>
      <NewMessageSvg />
      <SendingEmailsSvg />
      <SentMessagesSvg />
    </div>
  )
}
