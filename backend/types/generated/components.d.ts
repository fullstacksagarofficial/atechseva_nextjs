import type { Schema, Attribute } from '@strapi/strapi';

export interface StatusStatus extends Schema.Component {
  collectionName: 'components_status_statuses';
  info: {
    displayName: 'status';
    icon: 'cog';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'status.status': StatusStatus;
    }
  }
}
