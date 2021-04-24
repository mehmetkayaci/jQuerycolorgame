$(document).ready(function() {

	//css color names as array
    const CSS_COLOR_NAMES = [
        "AliceBlue",
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Azure",
        "Beige",
        "Bisque",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Cornsilk",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "GhostWhite",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",
        "HoneyDew",
        "HotPink",
        "IndianRed",
        "Indigo",
        "Ivory",
        "Khaki",
        "Lavender",
        "LavenderBlush",
        "LawnGreen",
        "LemonChiffon",
        "LightBlue",
        "LightCoral",
        "LightCyan",
        "LightGoldenRodYellow",
        "LightGray",
        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",
        "Linen",
        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",
        "MintCream",
        "MistyRose",
        "Moccasin",
        "NavajoWhite",
        "Navy",
        "OldLace",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",
        "PapayaWhip",
        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",
        "SeaShell",
        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SlateGray",
        "SlateGrey",
        "Snow",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "White",
        "WhiteSmoke",
        "Yellow",
        "YellowGreen",
    ]; 

    //empty arrays for storing picked color values
    var picked_colors = [];
    var dimension;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        'top': '0',
        'bottom': '0',
        'right': '0',
        'left': '0'
    });
    //set initial score to 0
    var score = 0;
    // main game function that assign different colors to the buttons and bind events to them
    function game(dimension) {
        //update score text	
        $('p2').text("your score is =" + score);
        //create button groups 
        for (var i = 1; i <= dimension; i++) {
            var btngroup = $(document.createElement("div")).css({
                'display': 'flex',
                'justify-content': 'center'
            });
            for (var j = 1; j <= dimension; j++) {
                //pick random color value from CSS_COLOR_NAMES array and store it in picked_colors array
                let randomcolor = Math.floor(Math.random() * CSS_COLOR_NAMES.length);
                picked_colors.push(randomcolor);
                //create different colored buttons
                var button = $(document.createElement("BUTTON")).css({
                    'background-color': CSS_COLOR_NAMES[randomcolor],
                    /* random background */
                    'width': 'auto',
                    'height': 'auto',
                    'border': '1px solid green',
                    /* Green border */
                    'color': 'white',
                    /* White text */
                    'padding': '10px 24px',
                    /* Some padding */
                    'cursor': 'pointer',
                    /* Pointer/hand icon */
                    'float': 'left' /* Float the buttons side by side */
                });
                //adding a bind function for click events and passing cell's color attiribute
                $(button).bind('click', randomcolor, function() {
                    if (randomcolor == randomPickedColor) {
                        //update score
                        score = score + 10;
                        //clear container and picked colors then restart the game function
                        $(container)
                            .empty()
                            .remove();
                        picked_colors = [];
                        game(dimension);
                    } else {

                        $('p').text("wrong color please select " + CSS_COLOR_NAMES[randomPickedColor]);
                    }
                });
                $(btngroup).append(button);
            }
            $(container).append(btngroup);
        }
        // ADD DIV ELEMENTS TO THE "main" CONTAINER.
        $(".main").append(container);
        // display random picked colors to user
        randomPickedColor = picked_colors[Math.floor(Math.random() * picked_colors.length)];
        $('p').text("find the color " + CSS_COLOR_NAMES[randomPickedColor]);
        $('p').css({ 'background-color': CSS_COLOR_NAMES[randomPickedColor] });
        //hide add diffuculity buttons
        $('.btAdd').hide();
    } // end of game function
    //set countdown timer
    function countdown() {
        counter = 60;
        var timer = setInterval(timing, 2000);
        function timing() {
            $('p3').text(counter + " seconds");
            counter--;
            if (counter <= 0) {
                clearInterval(timer);
                $('p3').text("game is over");
                $("#btRmv").trigger('click');
            }
        }
    }
    //set difficulity 
    $('#bt9').click(function() {
        countdown();
        game(9);
    });
    $('#bt16').click(function() {
        countdown();
        game(16);
    });
    $('#bt25').click(function() {
        countdown();
        game(25);
    });
    //remove container elements and restart the game
    $("#btRmv").click(function() {
        $(container)
            .empty()
            .remove();
        picked_colors = [];
        score = 0;
        $('.btAdd').show();
        $('p').empty();
        $('p').text("please select the difficultly");
        $('p').css({
            'background-color': 'transparent'
        });
        clearInterval(timer);
    });
});