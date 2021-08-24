import React from 'react'
import {
  Calendar as CalendarSvg,
  CheckingList as CheckingListSvg,
  Coding as CodingSvg,
  CoffeeLover as CoffeeLoverSvg,
  CreativeProcess as CreativeProcessSvg,
  DataOrganization as DataOrganizationSvg,
  FilesAndFolder as FilesAndFolderSvg,
  OnlyPresentation as OnlyPresentationSvg,
  PersonalData as PersonalDataSvg,
  VideoCall as VideoCallSvg
} from '@krowdy-ui/assets'

export default function () {
  return (
    <div style={{
      display            : 'grid',
      gap                : 12,
      gridTemplateColumns: '1fr 1fr',
      width              : '75%'
    }}>
      <span>CalendarSvg</span>
      <CalendarSvg />
      <span>CheckingListSvg</span>
      <CheckingListSvg />
      <span>CodingSvg</span>
      <CodingSvg />
      <span>CoffeeLoverSvg</span>
      <CoffeeLoverSvg />
      <span>CreativeProcessSvg</span>
      <CreativeProcessSvg />
      <span>DataOrganizationSvg</span>
      <DataOrganizationSvg />
      <span>FilesAndFolderSvg</span>
      <FilesAndFolderSvg />
      <span>OnlyPresentationSvg</span>
      <OnlyPresentationSvg />
      <span>PersonalDataSvg</span>
      <PersonalDataSvg />
      <span>VideoCallSvg</span>
      <VideoCallSvg />
    </div>
  )
}
