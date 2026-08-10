<?php

namespace App\Actions\Fortify;

use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\LogoutResponse;

class RedirectToLoginAfterLogout implements LogoutResponse
{
    public function toResponse($request): \Illuminate\Http\RedirectResponse
    {
        return redirect('/login');
    }
}
