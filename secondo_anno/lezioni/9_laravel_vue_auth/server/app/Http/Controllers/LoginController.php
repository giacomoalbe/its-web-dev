<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $req) {
        $credentials = $req->validate([
            "email" => ['required', 'email'],
            "password" => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $req->session()->regenerate();

            $user = Auth::user();

            return response()->json([
                "user" => $user,
                "status" => "logged_in"
            ], 200);
        }

        return response()->json("wrong_credentials", 401);
    }

    public function logout(Request $req) {
        $req->session()->invalidate();
        $req->session()->regenerateToken();

        return "logged_out";
    }

    public function me() {
        return Auth::user();
    }
}
