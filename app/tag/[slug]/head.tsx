import DefaultHead from "@components/DefaultHead";
import { ParamsProps } from "@interfaces/util";

export default function  TagHead({ params }: ParamsProps) {
  const title =  params.slug.replace(/-/g, " ")
  const titleTransformed = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <DefaultHead title={titleTransformed} description="ISAG's Blog Website.💡" />
    </>
  );
}
