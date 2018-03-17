import {
  space,
  width,
  fontSize,
  color,
  boxShadow,
  SpaceProps,
  WidthProps,
  FontSizeProps,
  ColorProps,
  BoxShadowProps,
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  flex,
  FlexProps,
  alignItems,
  AlignItemsProps,
  display,
  DisplayProps,
  borderRadius,
  BorderRadiusProps,
  hover,
  HoverProps,
  borderColor,
  BorderColorProps
} from 'styled-system';

import styled from '../../styled';

type BoxProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  ColorProps &
  BoxShadowProps &
  FlexWrapProps &
  FlexDirectionProps &
  FlexProps &
  DisplayProps &
  BorderRadiusProps &
  AlignItemsProps &
  HoverProps &
  BorderColorProps;

export const Box = styled<BoxProps, 'div'>('div')`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${boxShadow}
  ${flexWrap}
  ${flexDirection}
  ${flex}
  ${display}
  ${alignItems}
  ${borderRadius}
  ${hover}
  ${borderColor}
`;
