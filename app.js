document.querySelector('#submit').addEventListener('click', function() {submit(document.querySelector('#apply').value)});
document.querySelector('#red').addEventListener('mouseover', function(){check('pic1')});
document.querySelector('#blue').addEventListener('mouseover', function(){check('pic2')});
document.querySelector('#green').addEventListener('mouseover', function(){check('pic3')});
document.querySelector('#black').addEventListener('mouseover', function(){check('pic4')});
document.querySelector('#white').addEventListener('mouseover', function(){check('pic5')});

function submit (user) {
    let found = false
    let selection = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
    let choice = user
    let check = selection.includes(choice);


    if (check == true) {
        document.getElementById('preview').src = `images/${choice}.jpg`;
        found == false;
    }

    else if (choice == 'blur') {
        let pic = document.getElementById('preview').src
        if (pic.includes('red') == true) {
             document.getElementById('preview').src = `images/pic1B.jpg`
        }
        else if (pic.includes('blue') == true) {
            document.getElementById('preview').src = `images/pic2B.jpg`
        }
        else if (pic.includes('green') == true) {
        document.getElementById('preview').src = `images/pic3B.jpg`
        }
        else if (pic.includes('black') == true) {
        document.getElementById('preview').src = `images/pic4B.jpg`
        }
        else if (pic.includes('white') == true) {
            document.getElementById('preview').src = `images/pic5B.jpg`
        }
    }
    

    else {
        alert('Unknown choice. Choices are as follows: pic1, pic2, pic3, pic4, pic5, blur')
    }
};

function check(colour) {
    document.getElementById('submit').style.opacity = 1
    document.getElementById('apply').style.opacity = 1
    let selection = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
    for (select = 0; select < 6; select++){
        if (colour == selection[select]) {
            use = colour;
        };
    };
    document.getElementById('preview').src = `images/${use}.jpg`;
    document.getElementById('preview').style.opacity = 1;
};