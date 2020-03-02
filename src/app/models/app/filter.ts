import { ControlActionType } from 'src/app/shared/lib';

export interface AppFilterModel {
    name: string;
    header: string;
    active?: boolean;
    content: Array<AppFilterContentModel> | any;
}

export interface AppFilterContentModel {
    url?: [];
    label: string;
    name?: string;
    checked?: boolean;
    isCallFun: boolean;
    type?: ControlActionType
}