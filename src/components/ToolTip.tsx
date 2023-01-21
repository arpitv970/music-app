import './Navbar.css';

interface Props {
    tip: string;
}

const ToolTip = ({ tip }: Props) => {
    return (
        <span className='tool-tip'>
            {tip}
            <div />
        </span>
    );
};

export default ToolTip;
