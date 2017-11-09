/* tslint:disable */

declare var Object: any;
export interface VMDAboutUsInterface {
  "nameTeam"?: string;
  "historyTeam"?: string;
  "contactPerson"?: string;
  "address"?: string;
  "id"?: number;
}

export class VMDAboutUs implements VMDAboutUsInterface {
  "nameTeam": string;
  "historyTeam": string;
  "contactPerson": string;
  "address": string;
  "id": number;
  constructor(data?: VMDAboutUsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VMDAboutUs`.
   */
  public static getModelName() {
    return "VMDAboutUs";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VMDAboutUs for dynamic purposes.
  **/
  public static factory(data: VMDAboutUsInterface): VMDAboutUs{
    return new VMDAboutUs(data);
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
      name: 'VMDAboutUs',
      plural: 'VMDAboutUs',
      path: 'VMDAboutUs',
      idName: 'id',
      properties: {
        "nameTeam": {
          name: 'nameTeam',
          type: 'string'
        },
        "historyTeam": {
          name: 'historyTeam',
          type: 'string'
        },
        "contactPerson": {
          name: 'contactPerson',
          type: 'string'
        },
        "address": {
          name: 'address',
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
