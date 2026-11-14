type Props = {
  data: Record<string, unknown>;
};

/**
 * Strežniško izpisan JSON-LD blok. Znak "<" (in ločilna znaka U+2028/2029)
 * ubežimo, da vsebina ne more zapreti <script> elementa.
 */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(new RegExp("\\u2028", "g"), "\\u2028")
    .replace(new RegExp("\\u2029", "g"), "\\u2029");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
