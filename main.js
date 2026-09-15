if (window.matchMedia("(min-width: 700px)").matches) {

    const tl = gsap.timeline();
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();

    gsap.from('.letter', {
        y: 100,
        opacity: 0,
        duration: .5,
        stagger: 0.25,
        ease: "elastic.out(1, 0.5)"
    });

    // --

    const lH = document.querySelector('#lH');
    const sH = document.querySelector('#sH');

    lH.addEventListener('mouseenter', () => {
        gsap.to(sH, {
            y: 5,
            scale: 1.2,
            duration: 0.2,
            ease: "back.out(1.7)",
            transformOrigin: "50% 50%",
            overwrite: "auto"
        });

        gsap.to(lH, {
            y: -10,
            scale: 1.2,
            duration: 0.2,
            ease: "back.out(1.7)",
            transformOrigin: "50% 50%",
            overwrite: "auto"
        });
    });

    lH.addEventListener('mouseleave', () => {
        gsap.to(sH, {
            y: 0,
            scale: 1,
            duration: .5,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto",
            transformOrigin: "50% 50%",
            overwrite: "auto"
        });

        gsap.to(lH, {
            y: 0,
            scale: 1,
            duration: .5,
            ease: "elastic.out(1, 0.5)",
            transformOrigin: "50% 50%",
            overwrite: "auto"
        });
    });

    // --

    const lE = document.querySelector('#lE');
    const sE = document.querySelector('#sE');

    lE.addEventListener('mouseenter', () => {
        if (
            gsap.isTweening(lH) ||
            gsap.isTweening(lE) ||
            gsap.isTweening(lL1) ||
            gsap.isTweening(lL2) ||
            gsap.isTweening(lO)
        ) return;

        tl.to(lE, {
            scale: 1.2,
            duration: .6,
            ease: "power2.inOut",
            rotation: "+=720",
            transformOrigin: "50% 50%",
        }).to(lE, {
            scale: 1,
            duration: .75,
            ease: "elastic.out(1, 0.5)",
        });

        tl1.to(sE, {
            scale: 1.2,
            duration: .6,
            ease: "power2.inOut",
            rotation: "+=360",
            transformOrigin: "50% 50%",
        }).to(sE, {
            scale: 1,
            duration: .75,
            ease: "elastic.out(1, 0.5)",
        });
    });

    // --

    const lL1 = document.querySelector('#lL1');
    const sL1 = document.querySelector('#sL1');

    const lO = document.querySelector('#lO');
    const sO = document.querySelector('#sO');

    lL1.addEventListener('mouseenter', () => {
        if (
            gsap.isTweening(lH) ||
            gsap.isTweening(lE) ||
            gsap.isTweening(lL1) ||
            gsap.isTweening(sL1) ||
            gsap.isTweening(lL2) ||
            gsap.isTweening(lO)
        ) return;

        tl.to(lL1, {
            y: 30,
            scaleY: 1.5,
            duration: 0.5,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
        }).to(lL1, {
            y: 0,
            scaleY: 1,
            duration: 0.2,
            ease: "elastic.out(1, 0.5)",
        }).to(lH, {
            y: -30,
            duration: 0.2,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
        }).to(lH, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });

        tl1.to(lE, {
            y: -30,
            duration: 0.2,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
            delay: 0.5,
        }).to(lE, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });

        tl2.to(lL2, {
            y: -30,
            duration: 0.2,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
            delay: 0.5,
        }).to(lL2, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });

        tl3.to(sL1, {
            y: 30,
            scaleY: 1.5,
            duration: 0.5,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
        }).to(sL1, {
            y: 0,
            scaleY: 1,
            duration: 0.2,
            ease: "elastic.out(1, 0.5)",
        }).to(lO, {
            y: -30,
            duration: 0.2,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
        }).to(lO, {
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    });

    // --

    const lL2 = document.querySelector('#lL2');
    const sL2 = document.querySelector('#sL2');

    lL2.addEventListener('mouseenter', () => {
        if (
            gsap.isTweening(lH) ||
            gsap.isTweening(lE) ||
            gsap.isTweening(lL1) ||
            gsap.isTweening(lL2) ||
            gsap.isTweening(lO)
        ) return;

        tl.to(lL2, {
            scaleX: .75,
            scaleY: .75,
            duration: 0.2,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
        }).to(lL2, {
            filter: "brightness(2)",
            scaleX: 2,
            scaleY: 1,
            duration: 0.2,
            ease: "power2.inOut",
        }).to(lL2, {
            filter: "brightness(1)",
            scaleX: 1,
            duration: .3,
            ease: "elastic.out(1, 0.5)",
            clearProps: "filter",
        });

        tl1.to(sL2, {
            scaleX: .75,
            scaleY: .75,
            duration: 0.2,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
            delay: .1
        }).to(sL2, {
            filter: "brightness(2)",
            scaleX: 1.1,
            scaleY: 1,
            duration: 0.2,
            ease: "power2.inOut",
        }).to(sL2, {
            filter: "brightness(1)",
            scaleX: 1,
            duration: .3,
            ease: "elastic.out(1, 0.5)",
        });
    });

    // --

    function goFront(
        el,
        xFront,
        duration,
        finalX,
        timeline,
        delay,
    ) {
        const yFront = gsap.getProperty(el, "y");

        timeline.to(el, {
            x: finalX,
            duration,
            delay,
        }).to(el, {
            x: xFront,
            duration: 1 - duration,
            ease: "power2.inOut",
            onUpdate: function () {
                const progress = this.progress();
                const y = yFront - Math.sin(progress * Math.PI) * 100;
                gsap.set(el, { y: y });
            }
        }).to(el, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
        });
    }

    document.addEventListener('visibilitychange', () => {
        if (
            gsap.isTweening(lH) ||
            gsap.isTweening(lE) ||
            gsap.isTweening(lL1) ||
            gsap.isTweening(lL2) ||
            gsap.isTweening(lO)
        ) return;

        if (document.visibilityState === 'visible') {
            goFront(lO, -450, .3, 0, tl, 0);
            goFront(lL2, -340, .4, 110, tl1, .2);
            goFront(lL1, -230, .5, 225, tl2, .4);
            goFront(lE, -120, .6, 335, tl3, .6);
            goFront(lH, -10, .7, 445, tl4, .8);
        }
    });

    // --

    function columnText(element, options = {}) {

        const settings = {
            lineHeight: 10,
            diameter: 400,
            rotateX: 0,
            rotateY: 0,
            speed: 0.1,
            rotationDirection: 'left',

            ring: {
                enabled: false,
                autoDiameter: false
            },

            ...options,

            ring: {
                enabled: false,
                autoDiameter: false,
                ...(options.ring || {})
            }
        };


        // --------------------------------------------------
        // Variables
        // --------------------------------------------------

        const lineHeight = settings.lineHeight;
        const diameterMax = settings.diameter;

        let maxElWidth = 0;
        let maxElHeight = 0;

        let currentDeg = 0;
        let circleWidthSection = 0;
        let marginTop = 0;
        let currentMarginTop = 0;

        let wordsPerCircle = 0;
        let longCirc = 0;
        let radius = 0;
        let diameter = 0;


        // --------------------------------------------------
        // Get wrapper and overlay
        // --------------------------------------------------

        const wrapper = element.parentElement;
        const overlay = wrapper.querySelector('.overlay');


        // --------------------------------------------------
        // Get original text
        // --------------------------------------------------

        const originalContent = element.textContent;
        const characters = originalContent.split('');


        // --------------------------------------------------
        // Create character elements
        // --------------------------------------------------

        element.innerHTML = '';

        const fragment = document.createDocumentFragment();

        characters.forEach(character => {

            const item = document.createElement('div');

            item.className = 'coltext-item';
            item.textContent = character;

            fragment.appendChild(item);

        });

        element.appendChild(fragment);


        const children = Array.from(
            element.querySelectorAll('.coltext-item')
        );

        const elLength = children.length;

        // --------------------------------------------------
        // Character styles
        // --------------------------------------------------

        children.forEach(child => {

            Object.assign(child.style, {
                position: 'absolute',
                transformStyle: 'preserve-3d',
                transformOrigin: '0 0',
                textAlign: 'center'
            });

        });


        // --------------------------------------------------
        // Find widest and tallest character
        // --------------------------------------------------

        children.forEach(child => {

            const width = child.offsetWidth;
            const height = child.offsetHeight;

            if (width > maxElWidth) {
                maxElWidth = width;
            }

            if (height > maxElHeight) {
                maxElHeight = height;
            }

        });


        // --------------------------------------------------
        // Calculate circle
        // --------------------------------------------------

        longCirc = maxElWidth * elLength;

        radius = longCirc / (Math.PI * 2);

        diameter = radius * 2;


        // --------------------------------------------------
        // Diameter exceeded
        // --------------------------------------------------

        if (
            diameter > diameterMax &&
            !settings.ring.enabled
        ) {

            radius = diameterMax / 2;

            longCirc = Math.PI * diameterMax;

            wordsPerCircle = Math.floor(
                longCirc / maxElWidth
            );

            circleWidthSection = 360 / wordsPerCircle;


            // Give all characters the same height

            children.forEach(child => {
                child.style.height = `${maxElHeight}px`;
            });


            marginTop =
                (lineHeight + maxElHeight) /
                wordsPerCircle;


            // Position characters

            children.forEach(child => {

                child.style.transform = `
                    rotateY(${currentDeg}deg)
                    translate3d(
                        -50%,
                        ${currentMarginTop}px,
                        ${radius}px
                    )
                `;

                currentDeg += circleWidthSection;
                currentMarginTop += marginTop;

            });

        } else {

            // --------------------------------------------------
            // Normal ring
            // --------------------------------------------------

            circleWidthSection = 360 / elLength;


            if (settings.ring.autoDiameter) {

                longCirc = maxElWidth * elLength;

                radius =
                    longCirc / (Math.PI * 2);


                children.forEach(child => {
                    child.style.width = `${maxElWidth}px`;
                });

            } else {

                diameter = settings.diameter;

                radius = diameter / 2;

                longCirc = Math.PI * diameter;

                const width =
                    longCirc / elLength;


                children.forEach(child => {
                    child.style.width = `${width}px`;
                });

            }


            // Position characters

            children.forEach(child => {

                child.style.transform = `
                    rotateY(${currentDeg}deg)
                    translate3d(
                        -50%,
                        0,
                        ${radius}px
                    )
                `;

                currentDeg += circleWidthSection;

            });

        }

        // --------------------------------------------------
        // Animation
        // --------------------------------------------------

        const startRotateX = settings.rotateX;

        let startTime = null;


        // --------------------------------------------------
        // Rotation direction
        // --------------------------------------------------

        let rotationDirection;

        switch (settings.rotationDirection) {

            case 'left':
                rotationDirection = -1;
                break;

            case 'right':
                rotationDirection = 1;
                break;

            default:
                rotationDirection = 0;

        }


        // --------------------------------------------------
        // Animation loop
        // --------------------------------------------------

        function animation(timestamp) {

            if (startTime === null) {
                startTime = timestamp;
            }

            const elapsed = timestamp - startTime;

            const rotation =
                settings.rotateY +
                elapsed *
                settings.speed *
                rotationDirection;


            // Only the cylinder rotates
            element.style.transform = `
                rotateX(${startRotateX}deg)
                rotateY(${rotation}deg)
            `;


            // Overlay stays completely fixed

            requestAnimationFrame(animation);

        }


        requestAnimationFrame(animation);

    }

    // --------------------------------------------------
    // Initialize
    // --------------------------------------------------

    document
        .querySelectorAll('.skills-list')
        .forEach(element => {
            columnText(element, {
                lineHeight: 30,
                diameter: 800,
                rotateX: 0,
                rotateY: 0,
                speed: 0.02,
                rotationDirection: 'left',
                ring: {
                    enabled: false,
                    autoDiameter: false
                }
            });
        });

}