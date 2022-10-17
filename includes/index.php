<?php
    // hi justin. Feel free to change this however you like
    // this is just a placeholder file

    if(empty($_POST["email"])) {
        header('HTTP/1.1 488 You Did NOT Include Your Email');
        die(json_encode(["message" => "form submission failed"]));
        
    } else {
        echo json_encode(["message" => "this is a test message. Your name is " . $_POST["firstname"] ." and your email is " . $_POST["email"]]);
    }
    
