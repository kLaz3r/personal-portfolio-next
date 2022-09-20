/// <reference types="react" />
import { ResponsiveGalleryProps } from "./gallery.types";
import "react-image-lightbox/style.css";
declare const ResponsiveGallery: {
    ({ images, screenWidthSizes, numOfImagesPerRow, imagesMaxWidth, colsPadding, imagesPaddingBottom, imagesStyle, useLightBox, lightBoxAdditionalProps, }: ResponsiveGalleryProps): JSX.Element;
    defaultProps: {
        screenWidthSizes: Pick<import("./gallery.types").OptionsWidthSizes, "xs" | "s" | "m" | "l" | "xl">;
        numOfImagesPerRow: import("./gallery.types").OptionsWidthSizes;
        imagesMaxWidth: import("./gallery.types").OptionsWidthSizes;
        colsPadding: import("./gallery.types").OptionsWidthSizes;
        imagesPaddingBottom: import("./gallery.types").OptionsWidthSizes;
        imagesStyle: string;
        useLightBox: boolean;
    };
};
export default ResponsiveGallery;
