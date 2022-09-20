import { ScreenWidthSizes, GalleryWidthOptions, WidthOptions, ImageOrderOptions, GallerySizes, ImageElementProps, ImagesCols } from "../gallery.types";
declare const getOrderGroup: (width: number, userScreenWidthValues?: ScreenWidthSizes | undefined) => ImageOrderOptions;
declare const sortImagesByOrderGroup: (array: Array<ImageElementProps>, width: number, userScreenWidthValues?: ScreenWidthSizes) => Array<ImageElementProps>;
declare const getSizeGroup: (width: number, userScreenWidthValues?: ScreenWidthSizes | undefined) => WidthOptions;
declare const isWidthGroupsDifferences: (oldWidth: number, newWidth: number, userScreenWidthValues?: ScreenWidthSizes | undefined) => boolean;
declare const getGallerySizes: (width: number, userValues?: GalleryWidthOptions | undefined) => GallerySizes;
declare const getImagesCols: (images: Array<ImageElementProps>, numOfImagesPerRow: number) => ImagesCols | Record<string, never>;
export { getGallerySizes, getSizeGroup, isWidthGroupsDifferences, sortImagesByOrderGroup, getOrderGroup, getImagesCols, };
