<?php
namespace App\Libraries\Encryption;

class Crypt{
    public static function Encrypt($data){
        $plaintext = $data;
        $method = 'aes-256-cbc';
        $password = substr(hash('sha256', env("AES_KEY"), true), 0, 32);
        $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
        $encrypted = base64_encode(openssl_encrypt($plaintext, $method, $password, OPENSSL_RAW_DATA, $iv));
        return $encrypted;
    }
    public static function Decrypt($data){
        $method = 'aes-256-cbc';
        $password = substr(hash('sha256', env("AES_KEY"), true), 0, 32);
        $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
        $decrypted = openssl_decrypt(base64_decode($data), $method, $password, OPENSSL_RAW_DATA, $iv);
        return $decrypted;
    }
}

?>