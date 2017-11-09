/* tslint:disable */

declare var Object: any;
export interface VMDMasterEmmployeeCredentialInterface {
  "id"?: number;
  "realm"?: string;
  "username"?: string;
  "email"?: string;
  "emailVerified"?: string;
  "roleUser"?: string;
  "password"?: string;
  accessTokens?: any[];
}

export class VMDMasterEmmployeeCredential implements VMDMasterEmmployeeCredentialInterface {
  "id": number;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": string;
  "roleUser": string;
  "password": string;
  accessTokens: any[];
  constructor(data?: VMDMasterEmmployeeCredentialInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VMDMasterEmmployeeCredential`.
   */
  public static getModelName() {
    return "VMDMasterEmmployeeCredential";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VMDMasterEmmployeeCredential for dynamic purposes.
  **/
  public static factory(data: VMDMasterEmmployeeCredentialInterface): VMDMasterEmmployeeCredential{
    return new VMDMasterEmmployeeCredential(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'VMDMasterEmmployeeCredential',
      plural: 'VMDMasterEmmployeeCredentials',
      path: 'VMDMasterEmmployeeCredentials',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'string'
        },
        "roleUser": {
          name: 'roleUser',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
