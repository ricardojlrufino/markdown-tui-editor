import { FileService } from "./FileService";

export default class GitlabService  {
  constructor() {
  }

  async open(resource: string, callback: Function) {

    let response = await fetch(resource);
    const text = await response.text();

    callback(text);

  };

  save(): number {
    throw new Error("Method not implemented.");
  }
  
}