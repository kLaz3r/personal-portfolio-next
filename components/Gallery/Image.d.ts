declare type ImgProps = {
    imageSrc: string;
    imgMaxWidth: number;
    paddingBottom: number;
    className?: string;
    useLightBox?: boolean;
    onClick?: () => void;
};
declare const Image: import("styled-components").StyledComponent<"img", any, ImgProps, never>;
export default Image;
