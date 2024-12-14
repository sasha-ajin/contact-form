<?php

namespace App\Services;

use App\Models\Contact;
use Illuminate\Support\Facades\Log;

class ContactService
{
    public static function create()
    {
        Contact::where('id','>',2)
            ->delete();
        Log::info(Contact::all());
        return 1;
    }
}
