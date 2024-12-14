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
     * @return int
     *
     * @method POST
     * @uri /api/contact
     *
     * @throws Exception
     */
    public function store(ContactStoreRequest $request): int
    {
        return ContactService::storeDetails($request->all());
    }
}
