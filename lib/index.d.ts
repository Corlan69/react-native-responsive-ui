import React from "react";
import { StyleSheet } from "react-native";
interface ResponsiveState {
    window: any;
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

export class MediaQuery extends ResponsiveComponent {}
