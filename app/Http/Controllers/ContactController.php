<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactStoreRequest;
use App\Services\ContactService;
use Exception;
use Illuminate\Routing\Controller;

class ContactController extends Controller
{
    /**
     * @param  ContactStoreRequest  $request
     * @return array
     *
     * @method POST
     * @uri /api/contact
     *
     * @throws Exception
     */
    public function store(ContactStoreRequest $request): array
    {
        return [
            'contactID' => ContactService::storeDetails($request->all())
        ];
    }
}
