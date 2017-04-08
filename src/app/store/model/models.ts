export interface ICommonAppState {
    appName : string;
}

export const INITIAL_STATE : ICommonAppState = {
    appName : "Cura"
}

export interface CuraInfo {
    hostId  : string;
    iid : string;
    depth?: number;
    title: string;
}
export interface CuraSettings {
    iid: string;
    followMarket: boolean;
    autoReset: boolean;
    totalQuantity: number;
    quantity: number;
    leaveOrder: boolean;
    maxClipShares:number;
    maxLeggedOutAmount: number;
    aggressionFactor: number;
}