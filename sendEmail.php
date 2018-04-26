 <!-- Created by Wilson/ Heckel on ??/??/2018 -->
 <!-- Updated by Dustin Haxton on 03/24/2018 -->
<?php

$EMAIL = "PUT EMAIL HERE";


// set the default timezone to use. Available since PHP 5.1
date_default_timezone_set('UTC');

class mail {
    public static function prepareAttachment($path) {
        $rn = "\r\n";

        if (file_exists($path)) {
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $ftype = finfo_file($finfo, $path);
            $file = fopen($path, "r");
            $attachment = fread($file, filesize($path));
            $attachment = chunk_split(base64_encode($attachment));
            fclose($file);

            $msg = 'Content-Type: \'' . $ftype . '\'; name="' . basename($path) . '"' . $rn;
            $msg .= "Content-Transfer-Encoding: base64" . $rn;
            $msg .= 'Content-ID: <' . basename($path) . '>' . $rn;
            $msg .= $rn . $attachment . $rn . $rn;
            return $msg;
        } else {
            return false;
        }
    }

    public static function sendMail($to, $subject, $content, $path = '', $cc = '', $bcc = '', $_headers = false) {

        $rn = "\r\n";
        $boundary = md5(rand());
        $boundary_content = md5(rand());

        // Headers
        $headers = 'From: Mail System PHP <no-reply@domain.com>' . $rn;
        $headers .= 'Mime-Version: 1.0' . $rn;
        $headers .= 'Content-Type: multipart/related;boundary=' . $boundary . $rn;

        //addresses cc and ci
        if ($cc != '') {
            $headers .= 'Cc: ' . $cc . $rn;
        }
        if ($bcc != '') {
            $headers .= 'Bcc: ' . $cc . $rn;
        }
        $headers .= $rn;

        // Message Body
        $msg = $rn . '--' . $boundary . $rn;
        $msg.= "Content-Type: multipart/alternative;" . $rn;
        $msg.= " boundary=\"$boundary_content\"" . $rn;

        //Body Mode text
        $msg.= $rn . "--" . $boundary_content . $rn;
        $msg .= 'Content-Type: text/plain; charset=ISO-8859-1' . $rn;
        $msg .= strip_tags($content) . $rn;

        //Body Mode Html        
        $msg.= $rn . "--" . $boundary_content . $rn;
        $msg .= 'Content-Type: text/html; charset=ISO-8859-1' . $rn;
        $msg .= 'Content-Transfer-Encoding: quoted-printable' . $rn;
        if ($_headers) {
            $msg .= $rn . '<img src=3D"cid:template-H.PNG" />' . $rn;
        }
        //equal sign are email special characters. =3D is the = sign
        $msg .= $rn . '<div>' . nl2br(str_replace("=", "=3D", $content)) . '</div>' . $rn;
        if ($_headers) {
            $msg .= $rn . '<img src=3D"cid:template-F.PNG" />' . $rn;
        }
        $msg .= $rn . '--' . $boundary_content . '--' . $rn;

        //if attachement
        if ($path != '' && file_exists($path)) {
            $conAttached = self::prepareAttachment($path);
            if ($conAttached !== false) {
                $msg .= $rn . '--' . $boundary . $rn;
                $msg .= $conAttached;
            }
        }
        
        //other attachement : here used on HTML body for picture headers/footers
        if ($_headers) {
            $imgHead = dirname(__FILE__) . '/img/template-H.PNG';
            $conAttached = self::prepareAttachment($imgHead);
            if ($conAttached !== false) {
                $msg .= $rn . '--' . $boundary . $rn;
                $msg .= $conAttached;
            }
            $imgFoot = dirname(__FILE__) . '/img/template-F.PNG';
            $conAttached = self::prepareAttachment($imgFoot);
            if ($conAttached !== false) {
                $msg .= $rn . '--' . $boundary . $rn;
                $msg .= $conAttached;
            }
        }

        // Fin
        $msg .= $rn . '--' . $boundary . '--' . $rn;

        // Function mail()
        mail($to, $subject, $msg, $headers);
    }

}

// First Create a CSV File from the data past in by POST
$list = array
(
    "Site Name,WBID,Legal,County,Date MMDDYY,Lat,Long,Site Time Military,Samplers 1,Samplers 2,Weather,WIND SPEED,Wind Direction,Stage,Stage Qualifier,Secchi Depth,SecchiYes,Site observations N/A,Clean,Manure,Unsightly,Foam/Scum,Floating Detritus,Trash,Significant algae,Fish kill,Dead animals,Iron precipitates,Siltation,Flow alteration,Habitat alteration,Oily film/Grease,Offensive odor,Exotic spp,Other,Cattle activity,Comments,Air Temperature,Air temperature comments,Water Temperature,Water temperature comments,DO #1,DO #1 comments,DO #2,DO #2 comments,pH #1,pH #1 comments,pH #2,pH #2 comments,Nitrate #1,Nitrate #1 comments,Nitrate #2,Nitrate #2 comments,Nitrite #1,Nitrite #1 comments,Nitrite #2,Nitrite #2 comments,Ammonia Blank,Ammonia Blank comments,Ammonia #1,Ammonia #1 comments,Ammonia #2,Ammonia #2 comments,OP Blank,OP Blank comments,OP #1,OP#1 comments,OP#2,OP #2 comments,Chloride Blank,Chloride Blank comments,Chloride #1,Chloride #1 comments,Chloride #2,Chloride #2 comments,DateRow1,VolunteerRow1,ActivityRow1,HoursRow1,DateRow2,VolunteerRow2,ActivityRow2,HoursRow2,DateRow3,VolunteerRow3,ActivityRow3,HoursRow3,DateRow4,VolunteerRow4,ActivityRow4,HoursRow4,DateRow5,VolunteerRow5,ActivityRow5,HoursRow5,DateRow6,VolunteerRow6,ActivityRow6,HoursRow6,DateRow7,VolunteerRow7,ActivityRow7,HoursRow7,DateRow8,VolunteerRow8,ActivityRow8,HoursRow8,DateRow9,VolunteerRow9,ActivityRow9,HoursRow9,DateRow10,VolunteerRow10,ActivityRow10,HoursRow10"
);

$file_name = "data.csv";
echo $file_name;
$file = fopen($file_name, "w");

foreach ($list as $line) {
  fputcsv($file,explode(',',$line));
}

fputcsv($file, explode(',',$_POST['csv']));
fclose($file);

// Second, Send the CSV File to the appropriate email address.
// sendMail (reciever, Subject)
echo mail::sendMail($EMAIL, "Blue Thumb Datasheet Submission ".date('l jS \of F Y h:i:s A'), "CSV Data attached.", $file_name , '','' , true);
?>
