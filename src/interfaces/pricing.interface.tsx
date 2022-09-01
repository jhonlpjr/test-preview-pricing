export interface PreviewPricingRequest {
    type: number;
    routeId: number;
    dateIni: string;
    dateEnd: string;
}

export interface PreviewPricingResponse {
    itinName: string;
    segmentTravel: string;
    price1: number;
    price2: number;
    price3: number;
    total: number;
}