/* tslint:disable */

declare var Object: any;
export interface VMDMasteruserdataInterface {
  "id"?: number;
  "fullname": string;
  "address": string;
  "photo": string;
  "no_telp": string;
  "tglLahir": Date;
  "statusPerkawinan": string;
  "tempatLahir": string;
}

export class VMDMasteruserdata implements VMDMasteruserdataInterface {
  "id": number;
  "fullname": string;
  "address": string;
  "photo": string;
  "no_telp": string;
  "tglLahir": Date;
  "statusPerkawinan": string;
  "tempatLahir": string;
  constructor(data?: VMDMasteruserdataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VMDMasteruserdata`.
   */
  public static getModelName() {
    return "VMDMasteruserdata";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VMDMasteruserdata for dynamic purposes.
  **/
  public static factory(data: VMDMasteruserdataInterface): VMDMasteruserdata{
    return new VMDMasteruserdata(data);
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
      name: 'VMDMasteruserdata',
      plural: 'VMDMasteruserdata',
      path: 'VMDMasteruserdata',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "fullname": {
          name: 'fullname',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "photo": {
          name: 'photo',
          type: 'string'
        },
        "no_telp": {
          name: 'no_telp',
          type: 'string'
        },
        "tglLahir": {
          name: 'tglLahir',
          type: 'Date'
        },
        "statusPerkawinan": {
          name: 'statusPerkawinan',
          type: 'string'
        },
        "tempatLahir": {
          name: 'tempatLahir',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
