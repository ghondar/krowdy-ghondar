import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/togglerole', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/togglerole',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/togglerole'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
