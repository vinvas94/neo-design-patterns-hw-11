import { TimestampParser } from "../handlers/TimestampParser";
import { AmountParser } from "../handlers/AmountParser";
import { CurrencyNormalizer } from "../handlers/CurrencyNormalizer";
import { AbstractHandler } from "../AbstractHandler";

export function buildTransactionChain(): AbstractHandler {
  const timestampParser = new TimestampParser();
  const amountParser = new AmountParser();
  const currencyNormalizer = new CurrencyNormalizer();
  timestampParser.setNext(amountParser).setNext(currencyNormalizer);
  return timestampParser;
  
}
