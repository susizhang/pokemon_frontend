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

  // console.log(" ", infoDetail);
  if (!infoDetail) return <h2>Loading...</h2>;
  return <></>;
}

export default SuperDetail;
