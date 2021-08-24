import React from 'react'
import {
  Career as CareerSvg,
  GirlSwimming as GirlSwimmingSvg,
  GreatIdeaSpotlight as GreatIdeaSpotlightSvg,
  GreatIdeaStar as GreatIdeaStarSvg,
  StartUp as StartUpSvg,
  Success as SuccessSvg,
  Winner as WinnerSvg
} from '@krowdy-ui/assets'

export default function () {
  return (
    <div style={{
      display            : 'grid',
      gap                : 12,
      gridTemplateColumns: '1fr 1fr',
      width              : '75%'
    }}>
      <span>CareerSvg</span>
      <CareerSvg />
      <span>GirlSwimmingSvg</span>
      <GirlSwimmingSvg />
      <span>GreatIdeaSpotlightSvg</span>
      <GreatIdeaSpotlightSvg />
      <span>GreatIdeaStarSvg</span>
      <GreatIdeaStarSvg />
      <span>StartUpSvg</span>
      <StartUpSvg />
      <span>SuccessSvg</span>
      <SuccessSvg />
      <span>WinnerSvg</span>
      <WinnerSvg />
    </div>
  )
}
