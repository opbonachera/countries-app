import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore{
    byCapital:   TermCountries;
    byCountries: TermCountries;
    byRegion:    Region;
}

export interface TermCountries{
    term:string;
    countriesS: Country[];
}

export interface RegionCountries{
    region:     Region;
    countries:  Country[];
}