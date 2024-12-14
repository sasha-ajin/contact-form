<?php

namespace App\Services;

use App\Mail\ContactMail;
use Exception;
use App\Models\Contact;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactService
{
    /**
     * Store new contact.
     *
     * @param  array  $details
     * @return int
     *
     * @throws Exception
     */
    public static function storeDetails(array $details): int
    {
        $newContact = new Contact();

        try {
            $newContact->name = $details['name'];
            $newContact->email = $details['email'];
            $newContact->phone = $details['phone'];
            $newContact->message = $details['message'];
            $newContact->save();
        } catch (Exception $e) {
            Log::error($e);
            throw $e;
        }

        Mail::to(env('MAIL_TO_ADDRESS', 'mailtrap@gmail.com'))
            ->send(new ContactMail($details['name']));

        return $newContact->id;
    }
}
