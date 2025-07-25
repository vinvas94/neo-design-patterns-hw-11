import { AbstractHandler } from "../AbstractHandler";
import { SystemErrorRecord } from "../../models/DataRecord";

const allowed = ["info", "warning", "critical"];

export class LevelValidator extends AbstractHandler {
  protected process(record: SystemErrorRecord): SystemErrorRecord {
    if (!allowed.includes(record.level.toLowerCase())) {
      throw new Error("Invalid level");
    }
    return record
  }
}
