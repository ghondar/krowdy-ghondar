import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/listinfo', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/listinfo',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/listinfo'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
