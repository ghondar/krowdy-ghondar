import React from 'react'
import {
  Alien as AlienSvg,
  Analysis as AnalysisSvg,
  Candidate as CandidateSvg,
  CustomerService as CustomerServiceSvg,
  FinancialAnalyst as FinancialAnalystSvg,
  JobInterview as JobInterviewSvg,
  SearchEngine as SearchEngineSvg,
  SocialMedia as SocialMediaSvg,
  StartUpRocket as StartUpRocketSvg,
  UnderConstruction as UnderConstructionSvg,
  UserGroup as UserGroupSvg
} from '@krowdy-ui/assets'

export default function () {
  return (
    <div style={{
      display            : 'grid',
      gap                : 12,
      gridTemplateColumns: '1fr 1fr',
      width              : '75%'
    }}>
      <span>AlienSvg</span>
      <AlienSvg />
      <span>AnalysisSvg</span>
      <AnalysisSvg />
      <span>CandidateSvg</span>
      <CandidateSvg />
      <span>CustomerServiceSvg</span>
      <CustomerServiceSvg />
      <span>FinancialAnalystSvg</span>
      <FinancialAnalystSvg />
      <span>JobInterviewSvg</span>
      <JobInterviewSvg />
      <span>SearchEngineSvg</span>
      <SearchEngineSvg />
      <span>SocialMediaSvg</span>
      <SocialMediaSvg />
      <span>StartUpRocketSvg</span>
      <StartUpRocketSvg />
      <span>UnderConstructionSvg</span>
      <UnderConstructionSvg />
      <span>UserGroupSvg</span>
      <UserGroupSvg />
    </div>
  )
}
