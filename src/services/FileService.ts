export interface FileService {
  
  open: (resource: string, callback:Function)  => void;

  save(): number;


}