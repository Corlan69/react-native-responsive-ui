import React from "react";
import { StyleSheet } from "react-native";
import { MediaQuery as IMediaQuery } from "./MediaQuerySelector";
interface ResponsiveState {
    window: any;
}

interface MediaQueryProps extends IMediaQuery {
    children?: React.ReactElement<any>;
}

export class ResponsiveComponent extends React.Component {}

export class ResponsiveStyleSheet {
    static select(styles: MediaQueryStyle[]): StyleSheet.NamedStyles<any>;
}

export interface MediaQueryStyle {
    query: MediaQuery<MediaQueryProps>;
    style: StyleSheet.NamedStyles<any>;
}

export class MediaQuery<MediaQueryProps> extends ResponsiveComponent {}
