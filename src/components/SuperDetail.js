import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

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

  //这里的形参不可以写上info,以为我们要用上面的info变量
  const detailInfo = () => {
    if (info === "name") {
      return <h1>{infoDetail}</h1>;
    } else if (info === "type") {
      //需要return
      return infoDetail.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ));
    } else if (info === "base") {
      const baseArr = _.toPairs(infoDetail);
      // console.log(" ", baseArr);
      return (
        <div>
          {baseArr.map((item, index) => (
            <p key={index}>{item.join(" : ")}</p>
          ))}
        </div>
      );
    }
  };

  // console.log(" ", infoDetail);

  return <>{detailInfo()}</>; // 只有onclick的时候，函数不要用()
}

export default SuperDetail;
