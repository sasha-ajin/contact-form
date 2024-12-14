<?php

namespace App\Http\Controllers;

use Exception;
use App\Http\Requests\ContactStoreRequest;
use App\Services\ContactService;
use Illuminate\Routing\Controller;

class ContactController extends Controller
{
    /**
     * @param  ContactStoreRequest  $request
     * @return int
     *
     * @method GET
     * @uri /api/v1/promo-codes
     *
     * @throws Exception
     */
    public function store(ContactStoreRequest $request): int
    {
        return ContactService::create();
    }
}
