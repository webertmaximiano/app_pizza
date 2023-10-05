<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PublicPizzaController extends Controller
{
    public function show($pizza): Response {
        
        return Inertia::render('Pizzas/Show', [
            'pizza' => $pizza,
        ]);
    }
}
