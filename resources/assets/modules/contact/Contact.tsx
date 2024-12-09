import React, {useState} from 'react';
import {ContactModal} from "@/components/ContactModal/ContactModal";

export function Contact() {
    const [isShown, setIsShown] = useState(true);

    function onClose() {
        setIsShown(false)
    }

    return (
        <div><ContactModal isShown={isShown} onClose={onClose}/></div>
    );
}
