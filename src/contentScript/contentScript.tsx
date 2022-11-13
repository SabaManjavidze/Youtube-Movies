import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/tailwind.css";

export default function ContentScript() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const { data: some } = await axios.get(
      `https://allmoviesforyouscraper-production.up.railway.app/search/${
        document.location.href.split("=")[1]
      }`
    );
    setData(some);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-red-500">
      <div>contentScript</div>
      <h1>{data ? JSON.stringify(data, null, 2) : null}</h1>
    </div>
  );
}
