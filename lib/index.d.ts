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
    static select(styles: any): any;
}
// TODO implement others class
