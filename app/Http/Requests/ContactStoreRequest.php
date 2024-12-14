<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactStoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50',
            'email' => 'required|email|max:50',
            'phone' => 'required|phone:INTERNATIONAL,BG,US',
            'message' => 'required|string|max:500',
        ];
    }
}
