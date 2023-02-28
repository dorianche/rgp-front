import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";

function Lib() {
  const getRPG = async () => {
    const res = await fetch(`http://localhost:8081/api/ideas`);

    console.log(res);
    // return content;
  };

  const { data, status } = useQuery("rpgs", getRPG);
  return <div>Lib</div>;
}

export default Lib;
