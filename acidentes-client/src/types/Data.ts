import { Accidents } from "./Accidents";

export type Data = {
    accidents: Accidents[],
    size: number,
    accidentsWithFatalVictimsCount: number,
    accidentsWithInjuredVictimsCount: number,
    accidentsWithoutVictimsCount: number,
}[]