import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

interface ResponsiveState {
  window: any;
}

type Orientation = 'landscape' | 'portrait';

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

interface Dimensions {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
}

interface AllDimensions {
  window: Dimensions;
}

interface DimensionChangeSubscription {
  unsubscribe(): void;
}

declare class ResponsiveComponent<
  P = {},
  S = AllDimensions
> extends React.Component<P, S> {}

declare class ResponsiveStyleSheet {
  static select(styles: MediaQueryStyle[]): any;
}

declare class MediaQuery extends ResponsiveComponent<MediaQueryProps> {}

declare class Device {
  static subscribeToDimensionChanges(
    handler: (Object) => void
  ): DimensionChangeSubscription;
  static dimensions(): AllDimensions;
}

export {
  ResponsiveComponent,
  ResponsiveStyleSheet,
  MediaQuery,
  Device,
  DimensionChangeSubscription
};
