/* =========================================================
   BIRTHDAY WEBSITE
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function goTo(page) {
    window.location.href = page;
}


/* =========================================================
   TYPING MESSAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const messageElement =
        document.getElementById("typing-message");

    if (messageElement) {

        const message = `Happy Birthday to one of the most wonderful people in my life! ❤️

I honestly don't know how to put into words how grateful I am to have a monna like you.

Thank you for all the laughs, the crazy conversations, the random moments, and for always being yourself.

You've been there through so many moments, and I hope you know how special you are. athrakk onnum illa okkk.

Today, I just want you to know that you deserve all the happiness, love, success and beautiful things life has to offer.

Never stop smiling. Never stop being the amazing person you are.


Happy Birthday, molee! 🥹❤️

Stay happy.;

        let index = 0;

        function typeMessage() {

            if (index < message.length) {

                messageElement.textContent +=
                    message.charAt(index);

                index++;

                setTimeout(
                    typeMessage,
                    25
                );

            }
        }

        setTimeout(
            typeMessage,
            700
        );
    }

});


/* =========================================================
   CAKE CELEBRATION
========================================================= */

function celebrate() {

    const scene =
        document.querySelector(".cake-scene");

    const button =
        document.querySelector(".celebrate-btn");

    const message =
        document.getElementById("cutMessage");

    if (!scene) {
        return;
    }


    /* Prevent multiple clicks */

    if (
        scene.classList.contains(
            "cake-cutting"
        )
    ) {
        return;
    }


    /* Start animation */

    scene.classList.add(
        "cake-cutting"
    );


    /* Change button */

    if (button) {

        button.classList.add(
            "clicked"
        );

        button.innerHTML =
            "Cutting the Cake... 🎂";
    }


    /* Change message */

    if (message) {

        message.textContent =
            "Make a wish... 🖤✨";

        message.style.color =
            "#ff9fba";
    }


    /*
       The knife animation lasts
       approximately 3 seconds.
    */

    setTimeout(
        function () {

            startConfetti();

            if (button) {

                button.innerHTML =
                    "Cake Cut! ❤️";
            }

            if (message) {

                message.textContent =
                    "Wish made! Happy Birthday! 🎉❤️";
            }

        },
        3000
    );
}


/* =========================================================
   CONFETTI
========================================================= */

function startConfetti() {

    const canvas =
        document.getElementById(
            "confetti"
        );

    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const pieces = [];


    const colors = [
        "#ff5c8a",
        "#ff9fba",
        "#9b6cff",
        "#ffd166",
        "#ffffff",
        "#6ee7ff"
    ];


    /* Create confetti */

    for (
        let i = 0;
        i < 250;
        i++
    ) {

        pieces.push({

            x:
                Math.random() *
                canvas.width,

            y:
                -Math.random() *
                canvas.height,

            size:
                Math.random() * 8 + 4,

            speed:
                Math.random() * 4 + 3,

            rotation:
                Math.random() * 360,

            rotationSpeed:
                Math.random() * 8 - 4,

            gravity:
                Math.random() * 0.08 + 0.04,

            color:
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ],

            opacity: 1
        });
    }


    /* Animation */

    function drawConfetti() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        let activePieces = 0;


        pieces.forEach(
            function (piece) {

                piece.y +=
                    piece.speed;

                piece.speed +=
                    piece.gravity;

                piece.rotation +=
                    piece.rotationSpeed;

                piece.opacity -=
                    0.002;


                if (
                    piece.y <
                    canvas.height + 50 &&
                    piece.opacity > 0
                ) {

                    activePieces++;
                }


                ctx.save();


                ctx.translate(
                    piece.x,
                    piece.y
                );


                ctx.rotate(
                    piece.rotation *
                    Math.PI /
                    180
                );


                ctx.globalAlpha =
                    Math.max(
                        piece.opacity,
                        0
                    );


                ctx.fillStyle =
                    piece.color;


                ctx.fillRect(

                    -piece.size / 2,

                    -piece.size / 2,

                    piece.size,

                    piece.size
                );


                ctx.restore();

            }
        );


        if (
            activePieces > 0
        ) {

            requestAnimationFrame(
                drawConfetti
            );

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    }


    drawConfetti();
}


/* =========================================================
   CONFETTI RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        const canvas =
            document.getElementById(
                "confetti"
            );

        if (canvas) {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;
        }
    }
);