    function getInputNumber(num){
        let input_bar = document.getElementById('input');
        switch(num){
            case 1:
            input_bar.value += '1';
            break;

            case 2:
                input_bar.value += '2';
                break;
            case 3:
                input_bar.value += '3';
                break;
            case 4:
                input_bar.value += '4';
                break;
            case 5:
                input_bar.value += '5';
                break;
            case 6:
                input_bar.value += '6';
                break;
            case 7:
                input_bar.value += '7';
                break;
            case 8:
                input_bar.value += '8';
                break;
            case 9:
                input_bar.value += '9';
                break;
            case 0:
                input_bar.value += '0';
                break;
        }
    }

    function clearScreen(){
        document.getElementById('input').value = '';
    }
    function backspace() {
        let input_bar = document.getElementById('input');
        let x = input_bar.value;
        if (x.length > 0) {
            x = x.substring(0, x.length - 1);
            input_bar.value = x;
        }
    }

    function generateBtn(){
        let input_bar = document.getElementById('generate-input');
        let number = 999999;
        for (let i = 0; i < 1; i++) {
            let dice = Math.random() * 9999;
            let output = Math.round(dice)
            input_bar.value = output;
        }
    }
    function submitBtn(){
        let pin_match = document.getElementById('generate-input');
        let x = pin_match.value;

        let pinUn_match = document.getElementById('input');
        let y = pinUn_match.value;

        let pinUnmatch = document.getElementById('pinUnMatch');
        let pinmatch = document.getElementById('pinMatch');

        if (x == y) {
            pinmatch.style.display = 'block';
            pinUnmatch.style.display = 'none'
        }
        else{
            pinUnmatch.style.display = 'block';
            pinmatch.style.display = 'none';
        }
    }