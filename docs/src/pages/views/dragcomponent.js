import React from 'react'
import MarkdownDocs from 'components/MarkDowns/MarkdownDocs'

const req = require.context('containers/views/dragcomponent', false, /\.(md|js|tsx)$/)
const reqSource = require.context(
  '!raw-loader!containers/views/dragcomponent',
  false,
  /\.(js|tsx)$/,
)
const reqPrefix = 'containers/views/dragcomponent'

export default () => (
  <MarkdownDocs
    disableAd
    req={req}
    reqPrefix={reqPrefix}
    reqSource={reqSource} />
)
