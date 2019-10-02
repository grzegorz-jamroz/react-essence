export interface IBadge {
    text: string;
    bgColor: string;
    color: string;
}
export interface IBadges {
    [badgeName: string]: IBadge;
}
export declare const badges: IBadges;
