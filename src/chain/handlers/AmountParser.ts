import { AbstractHandler } from "../AbstractHandler";
import { TransactionRecord } from "../../models/DataRecord";

export class AmountParser extends AbstractHandler {
  protected process(record: TransactionRecord): TransactionRecord {
    const amountParser= typeof record.amount === "string" ? parseFloat(record.amount) : record.amount;
    if (isNaN(amountParser)) {
      throw new Error("Invalid amount");
    }
    return{...record, amount: amountParser  }
  }
}
