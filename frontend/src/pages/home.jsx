import { useState, useEffect } from "react";

function Home() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "https://picsum.photos/800/400?random=1",
        "https://picsum.photos/800/400?random=2",
        "https://picsum.photos/800/400?random=3",
        "https://picsum.photos/800/400?random=4"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.carousel}>
                <img
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    style={styles.image}
                />
            </div>
            <div style={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        style={{
                            ...styles.dot,
                            backgroundColor: currentImage === index ? '#333' : '#ccc'
                        }}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
    },
    carousel: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    dots: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
    },
    dot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        margin: '0 5px',
        cursor: 'pointer'
    }
};

export default Home;