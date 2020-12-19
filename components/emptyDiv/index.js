export default function EmptyDiv(props) {
  const { height, width, color } = props;
  return (
    <>
      <div></div>
      <style jsx>
        {`
                div{
                    height: ${height}px;
                    width: ${width}px;
                    background:${color};
                }
            `}
      </style>
    </>
  );
}
