import { Model, createKey } from "@blink-mind/core";
import data from "./data.json"

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateSimpleModel() {
  console.log(data);
  let topicList = [];
  let subList = [];
  Object.keys(data).map((key, i) =>
    subList.push(key)
  )
  Object.keys(data).map((key, i) =>
    topicList.push({key:key,blocks:[{type:"CONTENT", data:key}],parentKey:"HL7"})
  )
 
  topicList.push({key:"HL7",blocks:[{type:"CONTENT",data:"HL7"}],subKeys:subList})
  return Model.create({
    rootTopicKey: "HL7",
    topics: topicList,
  });
}
