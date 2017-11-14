/* tslint:disable */

declare var Object: any;
export interface VMDMenuCredentialsInterface {
  "title"?: string;
  "component"?: string;
  "icons"?: string;
  "credentials"?: string;
  "id"?: number;
}

export class VMDMenuCredentials implements VMDMenuCredentialsInterface {
  "title": string;
  "component": string;
  "icons": string;
  "credentials": string;
  "id": number;
  constructor(data?: VMDMenuCredentialsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VMDMenuCredentials`.
   */
  public static getModelName() {
    return "VMDMenuCredentials";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VMDMenuCredentials for dynamic purposes.
  **/
  public static factory(data: VMDMenuCredentialsInterface): VMDMenuCredentials{
    return new VMDMenuCredentials(data);
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
      name: 'VMDMenuCredentials',
      plural: 'VMDMenuCredentials',
      path: 'VMDMenuCredentials',
      idName: 'id',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "component": {
          name: 'component',
          type: 'string'
        },
        "icons": {
          name: 'icons',
          type: 'string'
        },
        "credentials": {
          name: 'credentials',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
