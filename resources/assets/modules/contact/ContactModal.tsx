import React from 'react';
import { SuccessModal } from '@/components/SuccessModal/SuccessModal';

type ContactModalProps = {
    isShown: boolean;
    onHide: () => void;
};

export function ContactModal({ isShown, onHide }: ContactModalProps) {
    return <SuccessModal text="Your contacts were successfully sent" isShown={isShown} onHide={onHide} />;
}
