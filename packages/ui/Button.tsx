interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
}

export const Button = ({
  primary = false,
  size = "medium",
  label = "button",
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "small" ? 12 : size === "medium" ? 16 : 20,
      }}
    >
      {label}
    </button>
  );
};
