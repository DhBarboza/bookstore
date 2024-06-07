import classNames from "classnames";

type Props = {
    label: string;
    selected?: boolean;
    setSelected?: (selected: boolean) => void;
    className?: string;
    variant?: "trueSelected" | "falseSelected";
    onClick?: (textButton: any) => void
};

export function Button({
    label,
    className,
    variant = "trueSelected",
    onClick,
}: Props) {
    return (
        <button
            className={classNames([
                "bg-blue-light px-6 py-3 rounded-lg shadow text-white font-medium mt-3",
                variant === "trueSelected" && "bg-blue-light",
                variant === "falseSelected" &&
                    "bg-white border-2 border-blue-light text-blue-light",
                className,
            ])}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
