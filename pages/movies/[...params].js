import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  console.log(router);
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}