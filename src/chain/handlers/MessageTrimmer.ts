import { AbstractHandler } from "../AbstractHandler";
import { SystemErrorRecord } from "../../models/DataRecord";

export class MessageTrimmer extends AbstractHandler {
  protected process(record: SystemErrorRecord): SystemErrorRecord {
    if(typeof record.message !== 'string') {
      throw new Error("Invalid message");
    }
    const trimmedMessage = record.message.trim().slice(0,255);
    return {
      ...record,
      message: trimmedMessage
    } as SystemErrorRecord;
  }
}
