type Props = {
    text: string
}
export function Title({text}: Props) {
    return(
        <h2 className="text-5xl border-b-4 border-b-blue-light w-fit font-bold text-blue-dark">
            {text}
        </h2>
    )
}