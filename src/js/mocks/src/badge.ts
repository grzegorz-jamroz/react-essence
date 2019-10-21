export interface IBadge {
  text: string;
  bgColor: string;
  color: string;
}

export interface IBadges {
  [badgeName: string]: IBadge;
}

export const badges: IBadges= {
  new: {
    text: "new",
    bgColor: "#0315ff",
    color: "#ffffff"
  },
  discount: {
    text: "-30%",
    bgColor: "#dc0345",
    color: "#ffffff"
  }
};
