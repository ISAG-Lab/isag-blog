import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export interface ParamsProps {
  params: Params;
}
