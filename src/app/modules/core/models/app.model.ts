import { CharactersState } from "../../character/state/state";
import { Features } from "./feature.enum";

export interface AppState {
    [Features.Character]: CharactersState;
}
