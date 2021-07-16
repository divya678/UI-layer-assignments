
 function onClick() {
    let color = document.getElementsByName('color');
    console.log(color);
    let font = document.getElementsByName('font');

    for (i = 0; i < color.length; i++) {
        if (color[i].checked) {
            document.body.style.color=color[i].value;         


        }
    }
        for (i = 0; i < font.length; i++) {

            if (font[i].checked) {
                document.body.style.fontFamily=font[i].value;
            }



    }
    }
