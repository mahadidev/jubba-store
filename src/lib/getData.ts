import React from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseDatabase } from "@/lib";

const getData = async ({
  collectionName,
  id,
  onSuccess,
  onError,
}: {
  collectionName: string;
  id?: string | null;
  onSuccess?: CallableFunction;
  onError?: CallableFunction;
}) => {
  if (!id) {
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
  } else {
    const dataRef = doc(firebaseDatabase, collectionName, id);
    const data = await getDoc(dataRef);

    // if has on success callback
    if (onSuccess) {
      onSuccess({ id: id, ...data.data() });
    }
  }
};

export default getData;
