/*
 * sends an email containing the datasheet information
 * @author Wilson/Heckel
 *
 */
        <?php
            if(isset($_POST['csv']) && !empty($_POST['csv'])) {
                $to      = 'lswilson@mtu.edu';
                $subject = 'php matha fakka';
                $message = $_POST['csv'];
                $headers = 'From: jomama@example.com' . "\r\n" .
                    'Reply-To: dustin@example.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

                mail($to, $subject, $message, $headers);
            }
        ?>
