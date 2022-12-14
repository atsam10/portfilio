<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aashish Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="css/style.css" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="images/logo.PNG">
    <script src="https://kit.fontawesome.com/70c966dfe1.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <script src="js/script.js"> </script>
</head>

<body style="background : #0A192F ">
    <!-- style ="background : #0A192F" -->
    <div class="Portfilio">
        <?php
        include('containers/navbar.php');
        include('containers/email.php');
        include('containers/social.php');
        ?>

        <div class="home row  " >
            <div class=" container align-self-center mx-auto d-flex  justify-content-center  ">
                <?php
                include('contents/home.php');
                ?>
            </div>
        </div>
        <div class="about_me row  ">
            <div class=" container align-self-center mx-auto d-flex  justify-content-center  ">
                <?php
                include('contents/aboutme.php');

                ?>
            </div>

        </div>
        <div class="work row  ">
            <div class=" container align-self-center mx-auto d-flex  justify-content-center  ">
                <?php
                include('contents/work.php');

                ?>
            </div>

        </div>
        <div class="projects row  ">
            <div class=" container align-self-center mx-auto d-flex  justify-content-center  ">
                <?php
                include('contents/projects.php');

                ?>
                <div class="contact row m-4 " style="min-height: 80vh;">
                    <div class=" container align-self-center mx-auto d-flex  justify-content-center  ">

                        <?php
                        include('contents/thankyou.php');

                        ?>
                    </div>

                </div>
                <?php
                include('containers/footer.php');
                ?>
            </div>

        </div>

    </div>

    <div class="unavailable">

        <div class="home row  " style="min-height: 50vh;">
            <div class=" container align-self-center mx-auto d-flex  justify-content-center  ">
                <div class="color-white typewitter p-4"> The site is curently not available in Mobile/Tablet. Please Open through a PC to access it. <br> Thank You </div>
            </div>
        </div>

    </div>
</body>

</html>