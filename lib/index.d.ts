import React from "react";
import { StyleSheet } from "react-native";
import {MediaQuery as IMediaQuery} from "./MediaQuerySelector";
interface ResponsiveState {
    window: any;
}

interface MediaQueryProps extends IMediaQuery {
    children?: React.ReactElement<any>;
}

export class ResponsiveComponent<P> extends React.Component<
    P,
    ResponsiveState
> {}

export class ResponsiveStyleSheet {
    static select(styles: MediaQueryStyle[]): StyleSheet.NamedStyles<any>;
}

export interface MediaQueryStyle {
    query: MediaQuery;
    style: StyleSheet.NamedStyles<any>;
}

export class MediaQuery extends ResponsiveComponent<MediaQueryProps> {}
