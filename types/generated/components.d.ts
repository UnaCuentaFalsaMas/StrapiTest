import type { Schema, Struct } from '@strapi/strapi';

export interface HasheLink extends Struct.ComponentSchema {
  collectionName: 'components_hashe_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    nombre: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface RedesSocialesRedesSociales extends Struct.ComponentSchema {
  collectionName: 'components_redes_sociales_redes_sociales';
  info: {
    displayName: 'redesSociales';
    icon: 'twitter';
  };
  attributes: {
    RedesSociales: Schema.Attribute.Enumeration<
      [
        'Spotify',
        'Apple Music',
        'iTunes',
        'Youtube',
        'Amazon',
        'Youtube Music',
        'Deezer',
      ]
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hashe.link': HasheLink;
      'redes-sociales.redes-sociales': RedesSocialesRedesSociales;
    }
  }
}
