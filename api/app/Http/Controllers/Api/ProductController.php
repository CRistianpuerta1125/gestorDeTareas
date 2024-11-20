<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->tittle = $request->tittle;
        $product->description = $request->description;
        $product->state = $request->state;

        $product->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        return $product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'tittle' => 'required|string|max:100',
            'description' => 'required|string|max:255',
        ]);

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $product->update($validated);

        return response()->json(['message' => 'Producto actualizado correctamente', 'product' => $product]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::destroy($id);
        return $product;
    }
    public function updateState(Request $request, string $id)
    {
    
    $request->validate([
        'state' => 'required|in:pendiente,completada',
    ]);

    
    $product = Product::findOrFail($id);

    
    $product->state = $request->input('state');
    $product->save();

    
    return response()->json([
        'message' => 'Estado actualizado correctamente.',
        'product' => $product,
    ]);
}
}
