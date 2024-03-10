import {themes} from "./themesEnum.tsx";

export interface IContextData {
    theme: themes,
    handleToggleTheme: () => void
}