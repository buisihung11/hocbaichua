// biome-ignore lint/performance/noBarrelFile: This barrel file is intentional for DB schema exports
export { account, session, user } from "./auth";
export {
  accountRelations,
  documentRelations,
  sessionRelations,
  spaceRelations,
  userRelations,
} from "./relations";
export { document, space } from "./space";
