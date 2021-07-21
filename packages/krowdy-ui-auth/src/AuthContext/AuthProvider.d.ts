import React from 'react'

type SocialNetworkProps = {
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  scope?: string;
  state?: string
}

type SocialProps = {
  google?: SocialNetworkProps;
  linkedin?: SocialNetworkProps;
  microsoft?: SocialNetworkProps;
  facebook?: SocialNetworkProps;
}

export type AuthContextProps = {
  social?: SocialProps,
  stateContext?: any;
  storage?: string;
  baseUrl: string;
  urlLogin?: string;
  referrer?: string;
  clientSecret?: string;
  clientId?: string;
  loginWith?: string;
  withGoogle?: boolean
};

declare var AuthContext: React.ComponentType<AuthContextProps>;

export default AuthContext
