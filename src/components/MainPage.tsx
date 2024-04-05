import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "./AllInbox";
import CenterPage from "./CenterPage";
import RightSection from "./RightSection";
function MainPage() {
  const [datas, setData] = useState({})
  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: token,
        },
      })
      setData(res.data)
      console.log(datas)
    }
    call();
  }, []);

  return (
    <div className="text-white pt-16 flex w-full  h-screen">
      <div className="w-1/4 ">
        <AllInbox/>
      </div>
      <div className="w-2/4">
        <CenterPage/>
      </div><div className="w-1/4">
        <RightSection/>
      </div>
    </div>
  );
}

export default MainPage;