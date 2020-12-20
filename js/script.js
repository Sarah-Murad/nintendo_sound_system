//animation
let characters = document.getElementsByClassName("character");
let numCharacters = characters.length;
let isClicked = false;

for (let i = 0 ; i < numCharacters; i++) {
    characters[i].addEventListener('click',function(){
        characters[i].classList.add('wiggle');
        setTimeout(function() {
            characters[i].classList.remove('wiggle');
        }, 800)
    });
} 

//audio
let dir = "../audio/mario/";
let playlistMario = ["mario1","mario2","mario3"];
let playlistMarioIndex = 0;
let ext = ".wav";


let audioMario = new Audio();

characters[0].addEventListener('click',function(){
    if (playlistMarioIndex == 0){
        audioMario.src = `${dir}${playlistMario[0]}${ext}`;
        audioMario.play();
        playlistMarioIndex++;
    }
    else if (playlistMarioIndex == 1){
        audioMario.src = `${dir}${playlistMario[1]}${ext}`;
        audioMario.play();
        playlistMarioIndex++;
        }
    else if (playlistMarioIndex == 2){
        audioMario.src = `${dir}${playlistMario[2]}${ext}`;
        audioMario.play();
        playlistMarioIndex = 0;
        }
});

let dir2 = "../audio/link/";
let playlistLink = ["link1","link2","link3"];
let playlistLinkIndex = 0;
let ext2 = ".wav";


let audioLink = new Audio();

characters[1].addEventListener('click',function(){
    if (playlistLinkIndex == 0){
        audioLink.src = `${dir2}${playlistLink[0]}${ext2}`;
        audioLink.play();
        playlistLinkIndex++;
    }
    else if (playlistLinkIndex == 1){
        audioLink.src = `${dir2}${playlistLink[1]}${ext2}`;
        audioLink.play();
        playlistLinkIndex++;
        }
    else if (playlistLinkIndex == 2){
        audioLink.src = `${dir2}${playlistLink[2]}${ext2}`;
        audioLink.play();
        playlistLinkIndex = 0;
        }
});

let dir3 = "../audio/falcon/";
let playlistFalcon = ["falcon1","falcon2","falcon3"];
let playlistFalconIndex = 0;
let ext3 = ".mp3";


let audioFalcon = new Audio();

characters[2].addEventListener('click',function(){
    if (playlistFalconIndex == 0){
        audioFalcon.src = `${dir3}${playlistFalcon[0]}${ext3}`;
        audioFalcon.play();
        playlistFalconIndex++;
    }
    else if (playlistFalconIndex == 1){
        audioFalcon.src = `${dir3}${playlistFalcon[1]}${ext3}`;
        audioFalcon.play();
        playlistFalconIndex++;
        }
    else if (playlistFalconIndex == 2){
        audioFalcon.src = `${dir3}${playlistFalcon[2]}${ext3}`;
        audioFalcon.play();
        playlistFalconIndex = 0;
        }
});

let dir4 = "../audio/peach/";
let playlistPeach = ["peach1","peach2","peach3"];
let playlistPeachIndex = 0;
let ext4 = ".wav";


let audioPeach = new Audio();

characters[3].addEventListener('click',function(){
    if (playlistPeachIndex == 0){
        audioPeach.src = `${dir4}${playlistPeach[0]}${ext4}`;
        audioPeach.play();
        playlistPeachIndex++;
    }
    else if (playlistPeachIndex == 1){
        audioPeach.src = `${dir4}${playlistPeach[1]}${ext4}`;
        audioPeach.play();
        playlistPeachIndex++;
        }
    else if (playlistPeachIndex == 2){
        audioPeach.src = `${dir4}${playlistPeach[2]}${ext4}`;
        audioPeach.play();
        playlistPeachIndex = 0;
        }
});

let dir5 = "../audio/kirby/";
let playlistKirby = ["kirby1","kirby2","kirby3"];
let playlistKirbyIndex = 0;
let ext5 = ".wav";


let audioKirby = new Audio();

characters[4].addEventListener('click',function(){
    if (playlistKirbyIndex == 0){
        audioKirby.src = `${dir5}${playlistKirby[0]}${ext5}`;
        audioKirby.play();
        playlistKirbyIndex++;
    }
    else if (playlistKirbyIndex == 1){
        audioKirby.src = `${dir5}${playlistKirby[1]}${ext5}`;
        audioKirby.play();
        playlistKirbyIndex++;
        }
    else if (playlistKirbyIndex == 2){
        audioKirby.src = `${dir5}${playlistKirby[2]}${ext5}`;
        audioKirby.play();
        playlistKirbyIndex = 0;
        }
});

let dir6 = "../audio/yoshi/";
let playlistYoshi = ["yoshi1","yoshi2","yoshi3"];
let playlistYoshiIndex = 0;
let ext6 = ".wav";


let audioYoshi = new Audio();

characters[5].addEventListener('click',function(){
    if (playlistYoshiIndex == 0){
        audioYoshi.src = `${dir6}${playlistYoshi[0]}${ext6}`;
        audioYoshi.play();
        playlistYoshiIndex++;
    }
    else if (playlistYoshiIndex == 1){
        audioYoshi.src = `${dir6}${playlistYoshi[1]}${ext6}`;
        audioYoshi.play();
        playlistYoshiIndex++;
        }
    else if (playlistYoshiIndex == 2){
        audioYoshi.src = `${dir6}${playlistYoshi[2]}${ext6}`;
        audioYoshi.play();
        playlistYoshiIndex = 0;
        }
});

let dir7 = "../audio/toad/";
let playlistToad = ["toad1","toad2","toad3"];
let playlistToadIndex = 0;
let ext7 = ".wav";


let audioToad = new Audio();

characters[6].addEventListener('click',function(){
    if (playlistToadIndex == 0){
        audioToad.src = `${dir7}${playlistToad[0]}${ext7}`;
        audioToad.play();
        playlistToadIndex++;
    }
    else if (playlistToadIndex == 1){
        audioToad.src = `${dir7}${playlistToad[1]}${ext7}`;
        audioToad.play();
        playlistToadIndex++;
        }
    else if (playlistToadIndex == 2){
        audioToad.src = `${dir7}${playlistToad[2]}${ext7}`;
        audioToad.play();
        playlistToadIndex = 0;
        }
});

let dir8 = "../audio/zelda/";
let playlistZelda = ["zelda1","zelda2","zelda3"];
let playlistZeldaIndex = 0;
let ext8 = ".wav";


let audioZelda = new Audio();

characters[7].addEventListener('click',function(){
    if (playlistZeldaIndex == 0){
        audioZelda.src = `${dir8}${playlistZelda[0]}${ext8}`;
        audioZelda.play();
        playlistZeldaIndex++;
    }
    else if (playlistZeldaIndex == 1){
        audioZelda.src = `${dir8}${playlistZelda[1]}${ext8}`;
        audioZelda.play();
        playlistZeldaIndex++;
        }
    else if (playlistZeldaIndex == 2){
        audioZelda.src = `${dir8}${playlistZelda[2]}${ext8}`;
        audioZelda.play();
        playlistZeldaIndex = 0;
        }
});


let dir9 = "../audio/pikachu/";
let playlistPikachu = ["pikachu1","pikachu2","pikachu3"];
let playlistPikachuIndex = 0;
let ext9 = ".mp3";


let audioPikachu= new Audio();

characters[8].addEventListener('click',function(){
    if (playlistPikachuIndex == 0){
        audioPikachu.src = `${dir9}${playlistPikachu[0]}${ext9}`;
        audioPikachu.play();
        playlistPikachuIndex++;
    }
    else if (playlistPikachuIndex == 1){
        audioPikachu.src = `${dir9}${playlistPikachu[1]}${ext9}`;
        audioPikachu.play();
        playlistPikachuIndex++;
        }
    else if (playlistPikachuIndex == 2){
        audioPikachu.src = `${dir9}${playlistPikachu[2]}${ext9}`;
        audioPikachu.play();
        playlistPikachuIndex = 0;
        }
});


let dir10 = "../audio/fox/";
let playlistFox = ["fox1","fox2","fox3"];
let playlistFoxIndex = 0;
let ext10 = ".wav";


let audioFox = new Audio();

characters[9].addEventListener('click',function(){
    if (playlistFoxIndex == 0){
        audioFox.src = `${dir10}${playlistFox[0]}${ext10}`;
        audioFox.play();
        playlistFoxIndex++;
    }
    else if (playlistFoxIndex == 1){
        audioFox.src = `${dir10}${playlistFox[1]}${ext10}`;
        audioFox.play();
        playlistFoxIndex++;
        }
    else if (playlistFoxIndex == 2){
        audioFox.src = `${dir10}${playlistFox[2]}${ext10}`;
        audioFox.play();
        playlistFoxIndex = 0;
        }
});
