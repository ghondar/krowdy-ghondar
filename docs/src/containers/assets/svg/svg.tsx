import React from 'react'
import { Success as SuccessSvg } from '@krowdy-ui/assets'

export default function () {
  return (
    <div>
      <div style={{
        display            : 'grid',
        gap                : 12,
        gridTemplateColumns: '1fr 1fr',
        width              : '75%'
      }}>
        <div>
          <div>Default</div>
          <SuccessSvg />
        </div>
        <div>
          <div>Primario</div>
          <SuccessSvg color='primary' />
        </div>
        <div>
          <div>Secondary</div>
          <SuccessSvg color='secondary' />
        </div>
        <div>
          <div>Custom</div>
          <SuccessSvg color='custom' />
        </div>
        <div>
          <div>Any</div>
          <SuccessSvg color='#678ff1' />
        </div>
      </div>
      <div style={{
        display            : 'grid',
        gap                : 12,
        gridTemplateColumns: '1fr 1fr',
        width              : '75%'
      }}>
        <div>
          <div>Large</div>
          <SuccessSvg width={500} />
        </div>
        <div>
          <div>Small</div>
          <SuccessSvg width={120} />
        </div>
      </div>
    </div>
  )
}
