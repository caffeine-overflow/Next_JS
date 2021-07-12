import React, { useState, useCallback } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Navbar from '../components/navbar'
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./../components/imagegallery";
import { motion } from "framer-motion";
import Footer from '../components/footer'
import Head from "next/head";

function index() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <Head>
                <script src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2
                }}
            >
                <div>
                    <Navbar />
                    <div style={{ marginBottom: '30px' }} />
                    <Gallery photos={photos} onClick={openLightbox} />
                    <div style={{ marginBottom: '30px' }} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                    <style jsx>
                        {`

                    `}
                    </style>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}

export default index
