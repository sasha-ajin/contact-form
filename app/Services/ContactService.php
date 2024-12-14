<?php

namespace App\Services;

use Exception;
use App\Models\Contact;

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

        $newContact->name = $details['name'];
        $newContact->email = $details['email'];
        $newContact->phone = $details['phone'];
        $newContact->message = $details['message'];
        $newContact->save();

        return 1;
    }
}
