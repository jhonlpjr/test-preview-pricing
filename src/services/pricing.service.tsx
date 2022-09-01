import axios from "axios";
import {
  PreviewPricingRequest,
  PreviewPricingResponse,
} from "../interfaces/pricing.interface";
import { ResponseApiOR } from "../interfaces/response.interface";

export default async function getPricingPreview(
  previewPricingBody: PreviewPricingRequest
) {
  const response: ResponseApiOR<PreviewPricingResponse> = await axios.post("http://localhost:8080/pricing/preview", previewPricingBody);
  return response.data;
}
