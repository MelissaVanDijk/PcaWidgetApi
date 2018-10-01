export interface IContact {
    key: string;

    idCombined: string;
    initials: string;
    completeName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    id: string;
    companyEmail: string;
    compPrimaryPhone: string;
    compAltPhone: string;
    mobilePhone: string;
    privatePhone: string;
    sipAddress: string;
    telUri: string;
    function: string;
    photo: string;
    contactScope: ContactScope;

    organization: IOmnidirOrg;
    department: IOmnidirDept;
    building: IOmnidirBuilding;

    data: IContactData;
}

export enum ContactScope {
    Personal ,
    Company
}

export interface ICoordinates {
    lat: number;
    lng: number;
}

export interface IContactData {
    key: string;
    coordinates: ICoordinates;
}

export interface IOmnidirOrg {
    id: number;
    name: string;
}

export interface IOmnidirDept {
    id: number;
    name: string;
    organizationId: number;
}

export interface IOmnidirBuilding {
    id: number;
    name: string;
    organizationId: number;
}

export interface IOmnidirColumn {
    id: number;
    name: string;
    translation: string;
}