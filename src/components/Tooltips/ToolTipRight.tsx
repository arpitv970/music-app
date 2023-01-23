import '../Navbar.css';

interface Props {
    tip: string;
}

const ToolTipRight = ({ tip }: Props) => {
    return (
        <span className='tool-tip-right'>
            {tip}
            <div />
        </span>
    );
};

export default ToolTipRight;
