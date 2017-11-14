/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { VMDMasteruserdata } from '../../models/VMDMasteruserdata';
import { VMDMasterEmmployeeCredential } from '../../models/VMDMasterEmmployeeCredential';
import { VMDAboutUs } from '../../models/VMDAboutUs';
import { VMDTeam } from '../../models/VMDTeam';
import { VMDBooking } from '../../models/VMDBooking';
import { Container } from '../../models/Container';
import { VMDMenuCredentials } from '../../models/VMDMenuCredentials';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    VMDMasteruserdata: VMDMasteruserdata,
    VMDMasterEmmployeeCredential: VMDMasterEmmployeeCredential,
    VMDAboutUs: VMDAboutUs,
    VMDTeam: VMDTeam,
    VMDBooking: VMDBooking,
    Container: Container,
    VMDMenuCredentials: VMDMenuCredentials,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
