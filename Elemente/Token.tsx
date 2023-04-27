import Svg, { Circle } from "react-native-svg";

export const Token = (props: { color: string; size: number }) => {
  return (
    <Svg height={props.size * 2} width={props.size * 2}>
      <Circle
        r={props.size}
        cy={props.size}
        cx={props.size}
        fill={props.color}
      />
    </Svg>
  );
};
