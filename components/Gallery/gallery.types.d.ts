import { ILightBoxProps } from "react-image-lightbox";
export declare type OptionsWidthSizes = {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
};
export declare type ScreenWidthSizes = Pick<OptionsWidthSizes, "xs" | "s" | "m" | "l" | "xl">;
export declare type GalleryWidthOptions = {
    screenWidthSizes?: ScreenWidthSizes;
    numOfImagesPerRow?: OptionsWidthSizes | undefined;
    imagesMaxWidth?: OptionsWidthSizes | undefined;
    colsPadding?: OptionsWidthSizes | undefined;
    imagesPaddingBottom?: OptionsWidthSizes | undefined;
};
export declare type GallerySizes = {
    screenWidthSizes: number;
    numOfImagesPerRow: number;
    imagesMaxWidth: number;
    colsPadding: number;
    imagesPaddingBottom: number;
};
export declare type ImageLightBoxProps = {
    imagesLightbox: Array<ImageElementProps>;
    photoIndex: number;
    lightBoxDispatch: (obj: {
        type: string;
        payload?: number | string;
    }) => void;
    lightBoxAdditionalProps?: ILightBoxProps;
};
export declare type ImageBasicData = {
    lightboxCaption?: string;
    lightboxTitle?: string;
    src: string;
};
export interface ImageElementProps extends ImageBasicData {
    orderS?: number;
    orderM?: number;
    orderL?: number;
    imgClassName?: string | Record<string, unknown>;
}
export declare type ResponsiveGalleryProps = {
    images: Array<ImageElementProps>;
    screenWidthSizes?: ScreenWidthSizes;
    numOfImagesPerRow?: OptionsWidthSizes;
    imagesMaxWidth?: OptionsWidthSizes;
    colsPadding?: OptionsWidthSizes;
    imagesPaddingBottom?: OptionsWidthSizes;
    imagesStyle?: Record<string, unknown> | string;
    useLightBox?: boolean;
    lightBoxAdditionalProps?: ILightBoxProps;
};
export declare type ImagesCols = Array<ImageElementProps>;
export declare enum WidthOptions {
    xs = "xs",
    s = "s",
    m = "m",
    l = "l",
    xl = "xl",
    xxl = "xxl"
}
export declare enum ImageOrderOptions {
    s = "orderS",
    m = "orderM",
    l = "orderL"
}
