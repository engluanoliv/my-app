interface ButtonTypeProps {
  title: string;
  outlined?: boolean;
  rounded?: boolean;
  onClick?: () => void;
}

export default function Button({
  title,
  outlined,
  rounded,
  ...props
}: ButtonTypeProps) {
  let className = "mx-1 px-8 py-1";

  if (title === "About")
    className +=
      " rounded-full bg-custom-green text-white border border-custom-green";
  if (title === "Contact")
    className += " rounded-full text-custom-green border border-custom-green";

  if (title === "Hire")
    className += "  rounded-lg bg-custom-blue text-white text-sm py-2";
  if (title === "Back") className += "  rounded-lg bg-white text-sm py-2";

  if (title === "Send")
    className +=
      " rounded-full bg-custom-black text-white border border-custom-black hover:bg-white hover:text-custom-black ease-in-out duration-300 transition-all";

  return (
    <>
      <button {...props} className={className}>
        {title}
      </button>
    </>
  );
}
