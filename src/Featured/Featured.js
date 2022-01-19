import { useState, useEffect } from "react";
import ReactPlayer from "react-player/vimeo";
import Card from "./Cards/Card";
import "./featured.scss";

export default function Featured() {
    const [current, setCurrent] = useState(0);
    const [featureData, setFeatureData] = useState([]);
    const [progress, setProgress] = useState(0);

    //FETCHING DATA
    useEffect(() => {
        fetch("http://localhost:3001/featured")
            .then((response) => response.json())
            .then((featureData) => {
                setFeatureData(featureData);
            })
            .catch((error) => {
                console.log(error.message);
            });
        return [];
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress + 1);
            if ((progress + 1) % 100 === 0) {
                setCurrent(current === featureData.length - 1 ? 0 : current + 1);
            }
        }, 100);
        return () => clearInterval(interval);
    });

    
    const [scrollY, setScrollY] = useState(0);

    function handleScroll() {
        // const scrollTarget = document.getElementById('#featured');
        // const nextTarget = scrollTarget.nextElementSibling;
        if (window.pageYOffset > scrollY) {
            setCurrent(current === featureData.length - 1 ? 0 : current + 1)
            // console.log('going down')
        } else {
            setCurrent(current === featureData.length - 1 ? 0 : current - 1)
            // console.log('going up')
        }
        return setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setCurrent(featureData + 1)
    //         } else {
    //             setCurrent(featureData - 1)
    //         }
    //     }
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // }, []);


    return (
        <section id="featured">
            {featureData.map((video, index) => {
                let url =
                    "https://player.vimeo.com" + video.uri.replace("/videos/", "/video/");
                return (
                    <div
                        key={index}
                        className={`featured-item ${index === current ? "active" : ""}`}
                    >
                        <ReactPlayer
                            width='1440px'
                            height='1024px'
                            url={url}
                            config={{
                                vimeo: {
                                    playerOptions: {
                                        background: true,
                                        quality: "720p",
                                        dnt: true,
                                        loop: true,
                                        playsInline: true,
                                    },
                                },
                            }}
                        />
                    </div>
                );
            })}
            {featureData.map((card, index) => {
                return (
                    <Card
                        title={card.name}
                        active={index === current}
                        key={index}
                        progress={progress}
                    />
                );
            })}

        </section>
    );
}