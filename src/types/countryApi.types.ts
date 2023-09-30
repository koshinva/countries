export interface ICountryApi {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  borders?:     string[];
  cioc?:        string;
  gini?:        { [key: string]: number };
  fifa?:        string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface Car {
  signs?: string[];
  side:   Side;
}

enum Side {
  Left = "left",
  Right = "right",
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  XPF?: Aed;
  EUR?: Aed;
  VES?: Aed;
  USD?: Aed;
  XCD?: Aed;
  GIP?: Aed;
  KES?: Aed;
  BRL?: Aed;
  MVR?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  SCR?: Aed;
  XAF?: Aed;
  VUV?: Aed;
  GMD?: Aed;
  GYD?: Aed;
  FKP?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  MRU?: Aed;
  TRY?: Aed;
  PKR?: Aed;
  IRR?: Aed;
  IDR?: Aed;
  AFN?: Aed;
  ALL?: Aed;
  CDF?: Aed;
  XOF?: Aed;
  SDG?: BAM;
  SAR?: Aed;
  KHR?: Aed;
  NPR?: Aed;
  MYR?: Aed;
  RWF?: Aed;
  THB?: Aed;
  JOD?: Aed;
  CHF?: Aed;
  KMF?: Aed;
  GBP?: Aed;
  IMP?: Aed;
  HKD?: Aed;
  JEP?: Aed;
  TJS?: Aed;
  BGN?: Aed;
  EGP?: Aed;
  MWK?: Aed;
  CVE?: Aed;
  MDL?: Aed;
  DKK?: Aed;
  TMT?: Aed;
  BBD?: Aed;
  ERN?: Aed;
  LSL?: Aed;
  ZAR?: Aed;
  TZS?: Aed;
  SOS?: Aed;
  ANG?: Aed;
  DOP?: Aed;
  GNF?: Aed;
  NAD?: Aed;
  SHP?: Aed;
  SBD?: Aed;
  MOP?: Aed;
  ARS?: Aed;
  BAM?: BAM;
  GGP?: Aed;
  DJF?: Aed;
  SYP?: Aed;
  PEN?: Aed;
  AUD?: Aed;
  JMD?: Aed;
  KZT?: Aed;
  SLL?: Aed;
  KRW?: Aed;
  BZD?: Aed;
  PGK?: Aed;
  ISK?: Aed;
  TWD?: Aed;
  JPY?: Aed;
  CNY?: Aed;
  LBP?: Aed;
  LKR?: Aed;
  GTQ?: Aed;
  RSD?: Aed;
  MGA?: Aed;
  SZL?: Aed;
  RON?: Aed;
  ZMW?: Aed;
  ZWL?: Aed;
  TND?: Aed;
  AED?: Aed;
  MNT?: Aed;
  NOK?: Aed;
  UYU?: Aed;
  BSD?: Aed;
  RUB?: Aed;
  YER?: Aed;
  SEK?: Aed;
  LAK?: Aed;
  COP?: Aed;
  CAD?: Aed;
  INR?: Aed;
  MKD?: Aed;
  PYG?: Aed;
  CRC?: Aed;
  UGX?: Aed;
  BOB?: Aed;
  KPW?: Aed;
  MUR?: Aed;
  HNL?: Aed;
  KGS?: Aed;
  CLP?: Aed;
  BMD?: Aed;
  LRD?: Aed;
  LYD?: Aed;
  OMR?: Aed;
  PHP?: Aed;
  PLN?: Aed;
  FOK?: Aed;
  BHD?: Aed;
  BYN?: Aed;
  QAR?: Aed;
  VND?: Aed;
  SGD?: Aed;
  GEL?: Aed;
  BIF?: Aed;
  SSP?: Aed;
  WST?: Aed;
  KWD?: Aed;
  TTD?: Aed;
  TVD?: Aed;
  AOA?: Aed;
  TOP?: Aed;
  MZN?: Aed;
  MMK?: Aed;
  ETB?: Aed;
  AZN?: Aed;
  UZS?: Aed;
  BDT?: Aed;
  AMD?: Aed;
  NGN?: Aed;
  BND?: Aed;
  ILS?: Aed;
  AWG?: Aed;
  NIO?: Aed;
  HTG?: Aed;
  KID?: Aed;
  KYD?: Aed;
  UAH?: Aed;
  MXN?: Aed;
  FJD?: Aed;
  GHS?: Aed;
  SRD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  BTN?: Aed;
  HUF?: Aed;
  STN?: Aed;
  IQD?: Aed;
  CZK?: Aed;
  BWP?: Aed;
  PAB?: Aed;
}

interface Aed {
  name:   string;
  symbol: string;
}

interface BAM {
  name: string;
}

interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

interface Idd {
  root?:     string;
  suffixes?: string[];
}

interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

interface Translation {
  official: string;
  common:   string;
}

interface PostalCode {
  format: string;
  regex?: string;
}

enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}


export interface ICountryData {
  name: string;
  region: Region;
  capital: string;
  population: number;
  flag: string;
  image: string;
  'native name': string;
  'sub region': string;
  'top level domain': string;
  currencies: string;
  languages: string;
  'border countries': string[];
}