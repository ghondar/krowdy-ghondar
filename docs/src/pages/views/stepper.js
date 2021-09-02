import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/stepper', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/stepper',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/stepper'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
