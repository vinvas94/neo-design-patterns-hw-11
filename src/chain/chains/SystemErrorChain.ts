import { TimestampParser } from "../handlers/TimestampParser";
import { LevelValidator } from "../handlers/LevelValidator";
import { MessageTrimmer } from "../handlers/MessageTrimmer";
import { AbstractHandler } from "../AbstractHandler";

export function buildSystemErrorChain(): AbstractHandler {
  const timestampParser = new TimestampParser();
  const levelValidator = new LevelValidator();
  const messageTrimmer = new MessageTrimmer();
  timestampParser.setNext(levelValidator).setNext(messageTrimmer);
  return timestampParser;
}
