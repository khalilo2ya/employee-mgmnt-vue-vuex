<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;


class EmployeeController extends Controller
{
    public function create()
    {
        $data = [
            'scope' => 'create',

        ];
        return view('employee.form')->with($data);
    }

    public function storeEmployee(Request $request)
    {
        try {
            $employee = new Employee;
            $employee->name = $request->get('name');
            $employee->department = $request->get('department');
            $employee->section = $request->get('section');
            $employee->email = $request->get('email');
            $employee->save();
            return response()->json([
                'status' => 200,
                'message' => 'Employee saved successfully',
            ]);
        } catch (Exception $e) {
            dd($e);
        }
    }
}
