import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
// import { MediaQuery as IMediaQuery } from "./MediaQuerySelector";
interface ResponsiveState {
    window: any;
}

type Orientation = "landscape" | "portrait";

export interface IMediaQuery {
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
    minAspectRatio?: number;
    maxAspectRatio?: number;
    minPixelRatio?: number;
    maxPixelRatio?: number;
    orientation?: Orientation;
    condition?: boolean;
    platform?: string;
}

interface MediaQueryProps extends IMediaQuery {
    children?: React.ReactElement<any>;
}

export interface MediaQueryStyle {
    query: IMediaQuery;
    style: any;
}

export class ResponsiveComponent extends React.Component {}

export class ResponsiveStyleSheet {
    static select(styles: MediaQueryStyle[]): any;
}

export class MediaQuery<MediaQueryProps> extends ResponsiveComponent {}
