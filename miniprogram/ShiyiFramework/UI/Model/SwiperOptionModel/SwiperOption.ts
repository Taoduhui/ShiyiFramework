import { IuiOption } from "../IuiOption";

interface SwiperDetail {
    current: number;
    currentItemId: string;
    source: "autoplay"|"touch"|"";
}

export interface SwiperOption extends IuiOption {
    detail: SwiperDetail;
}