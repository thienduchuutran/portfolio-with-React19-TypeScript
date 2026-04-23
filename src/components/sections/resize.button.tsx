import { useMagnetic } from "@/hooks/useMagnetic";

interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onClick?: () => void;
    magnetic?: boolean;
}

const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle, onClick, magnetic } = props;

    const magneticRef = useMagnetic<HTMLSpanElement>();

    return (
        //span with inline-block so button's CSS keeps its own tranforms and the magnetic effect's transforms don't interfere with it
        <span
            ref={magnetic ? magneticRef : undefined}
            style={{ display: "inline-block", willChange: magnetic ? "transform" : undefined }}
        >
            <button
                onClick={onClick}
                className="resize-button" style={btnStyle}>
                <span style={{ textTransform: "uppercase" }}>{btnText}</span>
                <>{btnIcons}</>
            </button>
        </span>
    )
}

export default ResizeButton;