import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

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

export interface MediaQueryStyle {
    query: IMediaQuery;
    style: StyleSheet.NamedStyles<any>;
}

export interface MediaQueryProps extends IMediaQuery {
    children?: React.ReactElement<any>;
}

declare class ResponsiveComponent<P = {}> extends React.Component<P> {}

declare class ResponsiveStyleSheet {
    static select(styles: MediaQueryStyle[]): any;
}

declare class MediaQuery extends ResponsiveComponent<MediaQueryProps> {}

export { ResponsiveComponent, ResponsiveStyleSheet, MediaQuery };
