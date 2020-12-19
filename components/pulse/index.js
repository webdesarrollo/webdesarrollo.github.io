export default function Pulse(props) {
  const { height, width, fill, stroke, dur } = props;

  return (
    <svg className="button" expanded="true" height={height} width={width}>
      <circle
        className="innerCircle"
        cx="50%"
        cy="50%"
        r="25%"
        fill={fill}
        stroke={stroke}
        strokeWidth="5%"
      >
        <animate
          attributeType="SVG"
          attributeName="r"
          begin="0s"
          dur={dur ? dur : "1.5s"}
          repeatCount="indefinite"
          from="5%"
          to="25%"
        />
        <animate
          attributeType="CSS"
          attributeName="stroke-width"
          begin="0s"
          dur={dur ? dur : "1.5s"}
          repeatCount="indefinite"
          from="3%"
          to="0%"
        />
        <animate
          attributeType="CSS"
          attributeName="opacity"
          begin="0s"
          dur={dur ? dur : "1.5s"}
          repeatCount="indefinite"
          from="1"
          to="0"
        />
      </circle>
    </svg>
  );
}
