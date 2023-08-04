interface Thema {
    backgroundColor: string;
    fontColor: string;
    accentColor: string;
    boardColor: string;
    upRed: string;
    downGreen: string;
}

export const DarkMode: Thema = {
    backgroundColor: "#222831",
    fontColor: "#EEEEEE",
    accentColor: "#00ADB5",
    boardColor: "#393E46",
    upRed: "#ED003E",
    downGreen: "#2FC257",
};

export const LightMode: Thema = {
    backgroundColor: "#F5F5F5",
    fontColor: "#222831",
    accentColor: "#78C1F3",
    boardColor: "#C5DFF8",
    upRed: "#ED003E",
    downGreen: "#2FC257",
};
