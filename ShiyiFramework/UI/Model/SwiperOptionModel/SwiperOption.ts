import { IuiOption } from "../IuiOption";

interface SwiperDetail {
    current: number;
    currentItemId: string;
    source: string;
}

export interface SwiperOption extends IuiOption {
    detail: SwiperDetail;
}