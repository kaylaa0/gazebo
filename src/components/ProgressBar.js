const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: '2vh',
        width: '20vw',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontFamily: 'Roboto, serif',
        fontSize: '2vmin',
        fontWeight: '300',
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
