import React from 'react';

const WhatsappButton = () => {
    return (
        <a className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition transform hover:scale-110 flex items-center justify-center w-14 h-14" href="#">
            <i className="fab fa-whatsapp text-3xl"></i>
        </a>
    );
};

export default WhatsappButton;
