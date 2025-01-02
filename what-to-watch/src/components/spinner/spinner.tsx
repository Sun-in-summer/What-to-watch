import './spinner.css'; // Подключаем CSS для стилей

const Spinner = () => {

    console.log('spinner');
    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    );
};

export default Spinner;