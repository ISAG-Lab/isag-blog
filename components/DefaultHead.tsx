interface HeadPropI {
  title: string;
  description: string;
}

export default function DefaultHead({ title, description }: HeadPropI) {
  const tranformedTitle = title ? `ISAG - ${title}` : "ISAG";

  return (
    <>
      <title>{tranformedTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
