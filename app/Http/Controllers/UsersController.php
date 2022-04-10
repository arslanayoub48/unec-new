<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Libraries\Encryption\Crypt;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Passwords\CanResetPassword;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
class UsersController extends Controller
{
    public function login(Request $request){
        $this->validate(request(), [
            'email' => 'required|email',
            'password' => 'required',
        ],[
            'require.email' => "Email daxil etmək mütləqdir!",
            'require.password' => 'Şifrəni daxil etmək mütləqdir!'
        ]);
        if (auth()->attempt(request(['email', 'password'])) == false) {
            return back()->withErrors([
                'message' => 'Email və ya şifrə səhv daxil edilib.!'
            ]);
        }
        
        return redirect()->to('/admin');
    }
    public function destroy()
    {
        auth()->logout();
        
        return redirect()->to('/login');
    }
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email',
            'telephone' => 'required',
            'password' => 'min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:6',
            'rules' => 'required'
        ]);
    
        $user = User::create(request(['name', 'email', 'password' ,'telephone']));
        
        auth()->login($user);
        
        return redirect()->to('/admin');
    }

    public function reset(){
        return view("admin.email");
    }
    public function reset_password(Request $request){
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
                    ? back()->with(['status' => __($status)])
                    : back()->withErrors(['email' => __($status)]);
    }
    public function change_password(){
        return view("admin.change_password");
    }
    public function change_password_post(Request $request){
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'new_password' => ['required'],
            'new_confirm_password' => ['same:new_password'],
        ]);
        User::find(auth()->user()->id)->update(['password'=> $request->new_password]);
        return $this->destroy();

    }
}
