import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDatabase } from "@/lib";

const getData = async ({
  collectionName,
  onSuccess,
  onError,
}: {
  collectionName: string;
  onSuccess?: CallableFunction;
  onError?: CallableFunction;
}) => {
  const dataCollectionRef = collection(firebaseDatabase, collectionName);
  const data = await getDocs(dataCollectionRef);
  const dataArray: any = [];
  const dataLoop = data?.docs.map((doc) => {
    new Promise(async (resolve, reject) => {
      dataArray.push({ id: doc.id, ...doc.data() });
      resolve(true);
    });
  });
  Promise.all(dataLoop).then(async () => {
    // if has on success callback
    if (onSuccess) {
      onSuccess(dataArray);
    }
  });
};

export default getData;
