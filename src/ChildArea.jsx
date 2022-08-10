import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  console.log("ChildAreaがレンダリングされた");
  const { open } = props;
  const data = [...Array(2000).keys()];
  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
