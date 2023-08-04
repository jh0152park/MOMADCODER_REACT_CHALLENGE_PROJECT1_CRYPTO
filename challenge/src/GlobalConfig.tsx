import { useHistory } from "react-router-dom";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

export const CurrentThema = atom({
    key: "CurrentThema",
    default: "dark",
});

export const ThemaIcon = atom({
    key: "ThemaIcon",
    default: "☼",
    /**
     * Sun ☀: Currently thema is dark
     * Moon ☾: Currently thema is light
     */
});

export const HomeIcon = atom({
    key: "HomeIcon",
    default: "←",
});
