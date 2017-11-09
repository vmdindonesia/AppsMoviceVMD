/* tslint:disable */

declare var Object: any;
export interface VMDBookingInterface {
  "id"?: number;
  "idUser"?: string;
  "fullname"?: string;
  "address"?: string;
  "nameApplication"?: string;
  "description"?: string;
}

export class VMDBooking implements VMDBookingInterface {
  "id": number;
  "idUser": string;
  "fullname": string;
  "address": string;
  "nameApplication": string;
  "description": string;
  constructor(data?: VMDBookingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VMDBooking`.
   */
  public static getModelName() {
    return "VMDBooking";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VMDBooking for dynamic purposes.
  **/
  public static factory(data: VMDBookingInterface): VMDBooking{
    return new VMDBooking(data);
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
      name: 'VMDBooking',
      plural: 'VMDBookings',
      path: 'VMDBookings',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "idUser": {
          name: 'idUser',
          type: 'string'
        },
        "fullname": {
          name: 'fullname',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "nameApplication": {
          name: 'nameApplication',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
