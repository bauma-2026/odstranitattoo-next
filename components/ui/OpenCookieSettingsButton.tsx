"use client";

type Props = {
  className?: string;
};

export default function OpenCookieSettingsButton({
  className = "",
}: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new Event("open-cookie-settings"));
      }}
      className={className}
    >
      Nastavitve piškotkov
    </button>
  );
}