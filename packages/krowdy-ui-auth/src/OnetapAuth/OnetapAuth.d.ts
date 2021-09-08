import React from 'react'

export type OnetapAuthProps = {
  children?: any;
  customMainText?: String
};

declare var OnetapAuth: React.ComponentType<OnetapAuthProps>;

export default OnetapAuth
