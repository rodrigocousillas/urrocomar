'use client';

const CenteredText = () => {
    return (
        <div className="container">
            <h1>Urro</h1>
            <h2>El infinito es un gran lugar donde empezar</h2>
            <p>Proximamente.</p>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; // O cualquier altura que necesites
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export default CenteredText;