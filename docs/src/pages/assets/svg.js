import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/assets/svg', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/assets/svg',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/assets/svg'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
