import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../config";

function AllGameInfo() {
  const [gameInfo, setGameInfo] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/game/leaderboard`).then(({ data }) => {
      console.log(" ", data.FightInformation);
      setGameInfo(data.FightInformation);
    });
  }, []);
  if (!gameInfo) return <h2 className="dark:bg-slate-800">Loading...</h2>;
  return (
    <>
      <div className=" flex justify-center mb-6 pt-6">
        <h1 className="text-6xl text-yellow-300 pokeName ">
          All information of previous games
        </h1>
      </div>
      <div className="grid grid-cols-7 flex flex-col items-center">
        {gameInfo.map((item, index) => (
          <div
            className="col-start-3 col-end-6 flex gap-8 bg-slate-300 mb-3 text-black	text-2xl  h-20 items-center justify-center rounded-3xl"
            key={item._id}
          >
            <p>{index}</p>
            <p>Winner is : {item.winner}</p>
            <p>Loser is : {item.loser}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllGameInfo;
