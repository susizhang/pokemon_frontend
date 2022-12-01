import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SuperDetail() {
  const { id, info } = useParams();
  const [infoDetail, setInfoDetail] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5020/pokemon/${id}/${info}`)
      .then(({ data }) => {
        // console.log(" ", data);
        setInfoDetail(data);
      });
  }, [id, info]);

  if (!infoDetail) return <h2>Loading...</h2>;

  console.log(" ", infoDetailName, infoDetailType, infoDetailBase);

  return (
    <>
      <div>{infoDetailName}</div>
    </>
  );
}

export default SuperDetail;

// if (info === "name") {
//   setInfoDetailName(data);
// } else if (info === "type") setInfoDetailType(data);
// else if (info === "base") {
//   setInfoDetailBase(data);
// }
