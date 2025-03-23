/** Subscription List DTO */
export interface SubscriptionListDto {
  id: string;
  region: string;
  city: string;
  district: string;
  houseManageNo: string;
  houseNm: string;
  bsnsMbyNm: string;
  houseSecdNm: string | null;
  rceptBgnde: string;
  rceptEndde: string;
  totSuplyHshldco: string | null;
}

export interface PriceInfoDto {
  id: string;
  houseManageNo: string;
  housingType: string;
  supplyPrice: number;
  secondPriorityPayment: string;
  moveInMonth: string;
}
export interface SpecialSupplyTargetDto {
  id: string;
  houseManageNo: string;
  housingType: string;
  supplyCountMultichild: number;
  supplyCountNewlywed: number;
  supplyCountFirst: number;
  supplyCountYouth: number;
  supplyCountElderly: number;
  supplyCountNewborn: number;
  supplyCountInstitutionRecommend: number;
  supplyCountPreviousInstitution: number;
  supplyCountOthers: number;
  supplyCountTotal: number;
}

export interface SupplyTargetDto {
  id: string;
  houseManageNo: string;
  housingCategory: string;
  housingType: string;
  supplyArea: number;
  supplyCountNormal: number;
  supplyCountSpecial: number;
  supplyCountTotal: number;
  houseManageNoDetail: string;
}
/** Subscription Detail DTO */
export interface SubscriptionDetailDto {
  id: string;
  bsnsMbyNm: string;
  cnstrctEntrpsNm: string;
  cntrctCnclsBgnde: string;
  cntrctCnclsEndde: string;
  gnrlRnk1CrspareaEndde: string;
  gnrlRnk1CrspareaRcptde: string;
  gnrlRnk1EtcAreaEndde: string;
  gnrlRnk1EtcAreaRcptde: string;
  gnrlRnk1EtcGgEndde: string;
  gnrlRnk1EtcGgRcptde: string;
  gnrlRnk2CrspareaEndde: string;
  gnrlRnk2CrspareaRcptde: string;
  gnrlRnk2EtcAreaEndde: string;
  gnrlRnk2EtcAreaRcptde: string;
  gnrlRnk2EtcGgEndde: string;
  gnrlRnk2EtcGgRcptde: string;
  hmpgAdres: string;
  houseDtlSecd: string;
  houseDtlSecdNm: string;
  houseManageNo: string;
  houseNm: string;
  houseSecd: string;
  houseSecdNm: string;
  hssplyAdres: string;
  hssplyZip: string;
  imprmnBsnsAt: string;
  latitude: string;
  longitude: string;
  lrsclBldlndAt: string;
  mdatTrgetAreaSecd: string;
  mdhsTelno: string;
  mvnPrearngeYm: string;
  nplnPrvoprPublicHouseAt: string;
  parcprcUlsAt: string;
  pblancNo: string;
  pblancUrl: string;
  przwnerPresnatnDe: string;
  publicHouseEarthAt: string;
  publicHouseSpclwApplcAt: string;
  rceptBgnde: string;
  rceptEndde: string;
  rcritPblancDe: string;
  rentSecd: string;
  rentSecdNm: string;
  specltRdnEarthAt: string;
  spsplyRceptBgnde: string;
  spsplyRceptEndde: string;
  subscrptAreaCode: string;
  subscrptAreaCodeNm: string;
  totSuplyHshldco: string | null;
  region: string;
  city: string;
  district: string;
  detail: string;
  priceInfo: PriceInfoDto[];
  specialSupplyTarget: SpecialSupplyTargetDto[];
  supplyTarget: SupplyTargetDto[];
}
