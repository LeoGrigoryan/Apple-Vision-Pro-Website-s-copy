const Itemtwo = document.querySelector('.item:nth-child(2)')
const Itemone = document.querySelector('.item:first-child')
const Lis = document.querySelectorAll('.item:first-child nav ul li a')
const Welcome = document.querySelector('.welcome')
const items = document.querySelectorAll('.item')
const itemsA = document.querySelectorAll('.item a')
const itemsh2 = document.querySelector('.item:nth-child(2) h2')
const VisImg = document.querySelector('.VisPic')
const VisImgReal = document.querySelector('.VisPic img')
const FirstVid = document.querySelector('.first-vid')
const SecVid = document.querySelector('.sec-vid')
const BoyVid = document.querySelector('.first-vid video')
const JapVid = document.querySelector('.sec-vid video')
const BoyText = document.querySelector('.first-vid h2')
const JapText = document.querySelector('.sec-vid h2')
const ThreeSect = document.querySelector('.three-vid')
const EyeText = document.querySelector('.three-vid h2')
const EyeVid = document.querySelector('.three-vid video')
const ForSect = document.querySelector('.for-vid')
const GranyVid = document.querySelector('.for-vid video')
const GranyText = document.querySelector('.for-vid h2')
const Wind = document.querySelector('.wind')
const Quests = document.querySelectorAll('.wind .cont')
const StartVid = document.querySelector('.welcome > video')
const MainName = document.querySelector('.welcome > .name')
const NewText = document.querySelector('.NewVids .text')
const NewTwoText = document.querySelector('.NewTwoVids .text')
const NewVid = document.querySelector('.NewVids video')
const NewTwoVid = document.querySelector('.NewTwoVids video')
const NewCont = document.querySelector('.NewVids .container')
const NewTwoCont = document.querySelector('.NewTwoVids .container')
const NewOne = document.querySelector('.NewVids')
const NewTwoOne = document.querySelector('.NewTwoVids')
const AboutOfone = document.querySelector('.About-of')
const itemsBut = document.querySelector('.item:nth-child(2) .But1 button')
const AboutOftwo = document.querySelector('.About-of-two')
const AboutOfthree = document.querySelector('.About-of-three')
const NewThreeText = document.querySelector('.NewThreeVids .text')
const NewThreeVid = document.querySelector('.NewThreeVids video')
const NewThreeCont = document.querySelector('.NewThreeVids .container')
const NewThree = document.querySelector('.NewThreeVids')
const AboutOffor = document.querySelector('.About-of-for')
const NewForText = document.querySelector('.NewForVids .text')
const NewForVid = document.querySelector('.NewForVids video')
const NewForCont = document.querySelector('.NewForVids .container')
const NewFor = document.querySelector('.NewForVids')
const AfterVid = document.querySelector('.AfterVid .container video')
const AfterVidPar = document.querySelector('.AfterVid')
const AfterVidCont = document.querySelector('.AfterVid .container')
const AfterVidText = document.querySelector('.AfterVid .container .text')
const AfterAbout = document.querySelector('.About-of-last')
const GapImages = document.querySelector('.DesignOne .GapList .ImagesPar')
const GapPar = document.querySelector('.DesignOne')
const DisVid = document.querySelector('.DesignOne .GapList video')
const DesignTwo = document.querySelector('.DesignTwo')
const DisTwoPic = document.querySelector('.DesignTwo img')
const GapCookTwo = document.querySelector('.BeforSlider .GapList')
const GapLoc = document.querySelector('.BeforSlider')
const SliderPar = document.querySelector('.SliderPar')
const SliderBig = document.querySelector('.SliderPar .BigList')
const SliderImgs = document.querySelectorAll('.SliderPar .BigList .pics img')
const SlRadios = document.querySelectorAll('.SliderPar .rad input')
const SlNext = document.querySelector('.SliderPar .aft')
const SlPrev = document.querySelector('.SliderPar .bef')
const LonelShadow = document.querySelector('.White-Shadow')
const DesignGirl = document.querySelector('.DesGirl')
const LastInWhite = document.querySelector('.LastWomImg')
const LastinWhiteImg = document.querySelector('.LastWomImg img')
const TrTextOne = document.querySelector('.LBleck-one .text')
const LBimg = document.querySelector('.LBleck-one img')
const LB = document.querySelector('.LBleck-one')
const LBtwo = document.querySelector('.LBleck-two')
const LBtwoVid = document.querySelector('.LBleck-two video')
const LBtwoText = document.querySelector('.LBleck-two .text')
const LBthree = document.querySelector('.LBleck-three')
const LBimgthree = document.querySelector('.LBleck-three img')
const LBthreeText = document.querySelector('.LBleck-three .text')
const LBfor = document.querySelector('.LBleck-for')
const LBimgfor = document.querySelector('.LBleck-for img')
const LBforText = document.querySelector('.LBleck-for .text')
const LBfive = document.querySelector('.LBleck-five')
const LBimgfive = document.querySelector('.LBleck-five img')
const LBfiveText = document.querySelector('.LBleck-five .text')
const Secorfor = document.querySelector('.Privacy')
let current = -73;
let picop = 1;
SliderImgs[picop].style.opacity = 1;
let slbool = true;
SliderPar.onmouseenter = () => {
    SlNext.style.opacity = .8;
    SlPrev.style.opacity = .8;
}
SliderPar.onmouseleave = () => {
    SlNext.style.opacity = null;
    SlPrev.style.opacity = null;
}
SlNext.onclick = () => {
    if (slbool) {
        current -= 83;
        SliderBig.style.left = current + '%';
        if (current < -239) {
            picop = null;
            SliderImgs[3].style.opacity = null;
            SliderBig.style.transition = 'none';
            current = 10;
            SliderBig.style.left = current + '%';
            setTimeout(() => {
                SliderBig.style.transition = null;
                current = -73;
                SliderBig.style.left = current + '%';
            }, 1);
        }
        setTimeout(() => {
            slbool = true;
        }, 500);
        picop++
        console.log(picop);
        SliderImgs[picop].style.opacity = 1;
        SliderImgs[picop - 1].style.opacity = null;
        setTimeout(() => {
            SlRadios[picop - 1].checked = true;
        }, 400);
        slbool = false;
    }
}
SlPrev.onclick = () => {
    if (slbool) {
        current += 83;
        SliderBig.style.left = current + '%';
        if (current >= 83) {
            picop = 3;
            SliderImgs[0].style.opacity = null;
            SliderBig.style.transition = 'none';
            current = -239;
            SliderBig.style.left = current + '%';
            setTimeout(() => {
                SliderBig.style.transition = null;
                current = -156;
                SliderBig.style.left = current + '%';
            }, 1);
        }
        setTimeout(() => {
            slbool = true;
        }, 500);
        picop--
        SliderImgs[picop].style.opacity = 1;
        SliderImgs[picop + 1].style.opacity = null;
        setTimeout(() => {
            if (picop == 0) {
                SlRadios[picop + 2].checked = true;
            } else {
                SlRadios[picop - 1].checked = true;
            }
        }, 400);
        slbool = false;
    }
}
SlRadios.forEach((item, index) => {
    item.onchange = () => {
        current = (index + 1) * -80;
        SliderBig.style.left = current + '%';
    }
})
Itemtwo.style.top = Itemone.offsetHeight + 'px';
setTimeout(() => {
    Itemtwo.style.transition = .3 + 's';
}, 1);
if (scrollY >= FirstVid.offsetTop / 1.3) {
    StartVid.style.display = 'none';
    MainName.style.display = 'none';
} else {
    StartVid.style.display = null;
    MainName.style.display = null;
}
Lis.forEach((item, index) => {
    item.onmouseenter = () => {
        setTimeout(() => {
            Itemone.style.background = 'transparent';
        }, 60);
        Quests.forEach((box, index) => {
            box.style.display = 'none';
            box.style.opacity = 0;
            box.style.visibility = 'hidden';
        })
        Quests[index].style.display = 'flex';
        setTimeout(() => {
            Quests[index].style.opacity = 1;
            Quests[index].style.visibility = 'visible';
        }, 1);
        Wind.style.top = 0;
    }
})
Wind.onmouseleave = () => {
    Itemone.style.background = null;
    Quests.forEach((box, index) => {
        box.style.display = 'none';
        box.style.opacity = 0;
        box.style.visibility = 'hidden';
    })
    Wind.style.top = null;
}
let bool = true;
window.onscroll = () => {
    if (scrollY > 0) {
        Itemone.style.top = -Itemone.offsetHeight + 'px';
        Itemtwo.style.top = 0;
        MainName.style.opacity = 0;
        if (bool) {
            StartVid.play()
            bool = false
        }
        Itemone.style.background = null;
        Quests.forEach((box, index) => {
            box.style.display = 'none';
            box.style.opacity = 0;
            box.style.visibility = 'hidden';
        })
        Wind.style.top = null;
    } else {
        Itemone.style.top = null;
        Itemtwo.style.top = Itemone.offsetHeight + 'px';
    }
    StartVid.style.scale = 1 - scrollY * .00015;
    if (scrollY >= FirstVid.offsetTop / 2.8) {
        StartVid.style.opacity = 1 - (scrollY - FirstVid.offsetTop / 2.8) * .003;
        MainName.style.display = 'none';
    } else {
        StartVid.style.opacity = 1;
    }
    if (scrollY >= FirstVid.offsetTop / 2) {
        BoyText.style.opacity = (scrollY - FirstVid.offsetTop / 2) * .003;
        BoyText.style.bottom = (scrollY - FirstVid.offsetTop / 2) / 1.75 + 'px';
    }
    if (scrollY >= FirstVid.offsetTop / 1.8) {
        BoyVid.style.opacity = (scrollY - FirstVid.offsetTop / 1.8) * .003;
        BoyVid.play()
    } else {
        BoyText.style.opacity = 0;
        BoyVid.style.opacity = 0;
    }
    if (scrollY >= SecVid.offsetTop / 1.75) {
        BoyVid.style.opacity = 1 - (scrollY - SecVid.offsetTop / 1.75) * .003;
    }
    if (scrollY >= SecVid.offsetTop / 1.4) {
        JapText.style.opacity = (scrollY - SecVid.offsetTop / 1.4) * .003;
        JapText.style.bottom = (scrollY - SecVid.offsetTop / 1.4) / 1.75 + 'px';
        JapVid.style.opacity = (scrollY - SecVid.offsetTop / 1.4) * .003;
        JapVid.play()
    } else {
        JapText.style.opacity = 0;
        JapVid.style.opacity = 0;
    }
    if (scrollY >= ThreeSect.offsetTop / 1.4) {
        JapVid.style.opacity = 1 - (scrollY - ThreeSect.offsetTop / 1.4) * .003;
    }
    if (scrollY >= ThreeSect.offsetTop / 1.1) {
        EyeText.style.opacity = (scrollY - ThreeSect.offsetTop / 1.1) * .003;
        EyeText.style.bottom = (scrollY - ThreeSect.offsetTop / 1.1) / 1.75 + 'px';
        EyeVid.style.opacity = (scrollY - ThreeSect.offsetTop / 1.1) * .003;
        EyeVid.play()
    } else {
        EyeText.style.opacity = 0;
        EyeVid.style.opacity = 0;
    }
    if (scrollY >= ForSect.offsetTop / 1.2) {
        EyeVid.style.opacity = 1 - (scrollY - ForSect.offsetTop / 1.2) * .003;
    }
    if (scrollY >= ForSect.offsetTop / 1.05) {
        GranyText.style.opacity = (scrollY - ForSect.offsetTop / 1.05) * .003;
        GranyText.style.bottom = (scrollY - ForSect.offsetTop / 1.05) / 1.8 + 'px';
        GranyVid.style.opacity = (scrollY - ForSect.offsetTop / 1.05) * .003;
        GranyVid.play()
    } else {
        GranyText.style.opacity = 0;
        GranyVid.style.opacity = 0;
    }
    if (scrollY >= VisImg.offsetTop / 1.1) {
        GranyVid.style.opacity = 1 - (scrollY - VisImg.offsetTop / 1.1) * .003;
    }
    if (scrollY >= VisImg.offsetTop) {
        itemsA.forEach((item, index) => {
            item.style.color = '#000';
        })
        itemsh2.style.color = '#000';
        itemsBut.style.color = '#000';
        itemsBut.style.borderColor = '#000';
        if (scrollY <= AboutOfone.offsetTop) {
            VisImgReal.style.scale = 1 - (scrollY - VisImg.offsetTop) * .0002;
        } else {
            VisImgReal.style.scale = null;
        }
        items[0].style.background = '#ffffff';
        items[1].style.background = '#ffffff';
        VisImg.style.opacity = (scrollY - VisImg.offsetTop) * .004;
        GranyVid.style.display = 'none';
        EyeVid.style.display = 'none';
        BoyVid.style.display = 'none';
        JapVid.style.display = 'none';
        StartVid.style.display = 'none';
    } else {
        itemsBut.style.borderColor = null;
        itemsBut.style.color = null;
        itemsA.forEach((item, index) => {
            item.style.color = null;
        })
        itemsh2.style.color = null;
        GranyVid.style.display = null;
        EyeVid.style.display = null;
        BoyVid.style.display = null;
        JapVid.style.display = null;
        StartVid.style.display = 'flex';
        items[0].style.background = null;
        items[1].style.background = null;
        VisImg.style.opacity = 0;
    }
    if (scrollY >= NewOne.offsetTop / 1.04) {
        NewVid.play()
        NewText.style.bottom = (scrollY - NewOne.offsetTop) + 'px';
    }
    if (scrollY >= AboutOfone.offsetTop - (NewOne.offsetHeight / 2) + 1) {
        NewCont.style.width = 100 - (scrollY - (AboutOfone.offsetTop - (NewOne.offsetHeight / 2) + 1)) * .015 + '%';
    } else if (scrollY >= AboutOfone.offsetTop) {
        NewCont.style.width = null;
    }
    if (scrollY >= NewTwoOne.offsetTop / 1.04) {
        NewTwoVid.play()
        NewTwoText.style.bottom = (scrollY - NewTwoOne.offsetTop) + 'px';
    }
    if (scrollY >= AboutOftwo.offsetTop - (NewTwoOne.offsetHeight / 2) + 1) {
        NewTwoCont.style.width = 100 - (scrollY - (AboutOftwo.offsetTop - (NewTwoOne.offsetHeight / 2) + 1)) * .015 + '%';
    } else if (scrollY >= AboutOftwo.offsetTop) {
        NewTwoCont.style.width = null;
    }
    if (scrollY >= NewThree.offsetTop / 1.04) {
        NewThreeVid.play()
        NewThreeText.style.bottom = (scrollY - NewThree.offsetTop) + 'px';
    }
    if (scrollY >= AboutOfthree.offsetTop - (NewThree.offsetHeight / 2) + 1) {
        NewThreeCont.style.width = 100 - (scrollY - (AboutOfthree.offsetTop - (NewThree.offsetHeight / 2) + 1)) * .015 + '%';
    } else if (scrollY >= AboutOfthree.offsetTop) {
        NewThreeCont.style.width = null;
    }
    if (scrollY >= NewFor.offsetTop / 1.04) {
        NewForVid.play()
        NewForText.style.bottom = (scrollY - NewFor.offsetTop) + 'px';
    }
    if (scrollY >= AboutOffor.offsetTop - (NewFor.offsetHeight / 2) + 1) {
        setInterval(() => {
            NewForCont.style.width = 100 - (scrollY - (AboutOffor.offsetTop - (NewFor.offsetHeight / 2) + 1)) * .015 + '%';
        }, 1);
    } else if (scrollY >= AboutOffor.offsetTop) {
        NewForCont.style.width = null;
    }
    if (scrollY >= GapPar.offsetTop / 1.04) {
        GapImages.style.gap = (scrollY - GapPar.offsetTop / 1.04) * .003 + 'vw';
    } else {
        GapImages.style.gap = 0;
    }
    if (scrollY >= GapPar.offsetTop + (GapPar.offsetHeight / 2.5)) {
        DisVid.play()
    }
    if (scrollY >= DesignTwo.offsetTop / 1.008) {
        DisTwoPic.style.opacity = (scrollY - DesignTwo.offsetTop / 1.008) * .002;
    }
    if (scrollY >= AfterAbout.offsetTop - (AfterVidPar.offsetHeight / 2) + 1) {
        AfterVidCont.style.width = 100 - (scrollY - (AfterAbout.offsetTop - (AfterVidPar.offsetHeight / 2) + 1)) * .015 + '%';
    } else if (scrollY >= AfterAbout.offsetTop) {
        AfterVidCont.style.width = null;
    }
    if (scrollY >= AfterVidPar.offsetTop / 1.04) {
        AfterVid.play()
        AfterVidText.style.bottom = (scrollY - AfterVidPar.offsetTop) + 'px';
    }
    if (scrollY >= GapLoc.offsetTop / 1.04) {
        GapCookTwo.style.gap = (scrollY - GapLoc.offsetTop / 1.04) * .003 + 'vw';
    } else {
        GapCookTwo.style.gap = 0;
    }
    if (innerWidth > 900) {
        if (scrollY >= AboutOffor.offsetTop / 1.004) {
            LonelShadow.style.opacity = (scrollY - AboutOffor.offsetTop / 1.004) * .004;
        } else {
            LonelShadow.style.opacity = null;
        }
        if (scrollY >= DesignGirl.offsetTop + (DesignGirl.offsetHeight / 2.2)) {
            LonelShadow.style.position = 'absolute';
            LonelShadow.style.bottom = -1 + '%';
        }else {
            LonelShadow.style.position = null;
            LonelShadow.style.bottom = null;
        }
    }
    if (scrollY >= LastInWhite.offsetTop / 1.1) {
        setInterval(() => {
            LastinWhiteImg.style.width = 90 + (scrollY - LastInWhite.offsetTop) * .015 + 'vw';
        }, 1);
    }
    if (scrollY >= LastInWhite.offsetTop / 1.025) {
        LastinWhiteImg.style.opacity = (scrollY - LastInWhite.offsetTop / 1.025) * .002;
    }
    if (scrollY >= LB.offsetTop / 1.015) {
        if ((-60 + (scrollY - LB.offsetTop / 1.015) * .2) <= 0) {
            TrTextOne.style = `transform: perspective(40vw) rotateY(${-60 + (scrollY - LB.offsetTop / 1.015) * .2}deg) rotateX(${20 - (scrollY - LB.offsetTop / 1.015) * .1}deg);`
        } else {
            TrTextOne.style = `transform: perspective(40vw) rotateY(0) rotateX(0);`
        }
    }
    if (scrollY >= LB.offsetTop / 1.011) {
        itemsA.forEach((item, index) => {
            item.style.color = null;
        })
        itemsh2.style.color = null;
        itemsBut.style.color = null;
        itemsBut.style.borderColor = null;
        items[0].style.background = null;
        items[1].style.background = null;
    }
    if (scrollY >= (LB.offsetTop + LB.offsetHeight / 4.2)) {
        LBimg.style.opacity = (scrollY - (LB.offsetTop + LB.offsetHeight / 4.2)) * .0015;
    } else {
        LBimg.style.opacity = null;
    }
    if (scrollY >= LBtwo.offsetTop / 1.02) {
        if ((-60 + (scrollY - LBtwo.offsetTop / 1.02) * .2) <= 0) {
            LBtwoText.style = `transform: perspective(40vw) rotateY(${-60 + (scrollY - LBtwo.offsetTop / 1.02) * .2}deg) rotateX(${20 - (scrollY - LBtwo.offsetTop / 1.02) * .1}deg);`
        } else {
            LBtwoText.style = `transform: perspective(40vw) rotateY(0) rotateX(0);`
        }
    }
    if (scrollY >= LBtwo.offsetTop / 1.01) {
        LBtwoVid.play()
    }
    if (scrollY >= LBthree.offsetTop / 1.016) {
        LBimgthree.style.opacity = (scrollY - LBthree.offsetTop / 1.016) * .0015;
    } else {
        LBimgthree.style.opacity = null;
    }
    if (scrollY >= LBthree.offsetTop) {
        if ((-60 + (scrollY - LBthree.offsetTop) * .2) <= 0) {
            LBthreeText.style = `transform: perspective(40vw) rotateY(${-60 + (scrollY - LBthree.offsetTop) * .2}deg) rotateX(${20 - (scrollY - LBthree.offsetTop) * .1}deg);`
        } else {
            LBthreeText.style = `transform: perspective(40vw) rotateY(0) rotateX(0);`
        }
    }
    if (scrollY >= LBfor.offsetTop / 1.016) {
        LBimgfor.style.opacity = (scrollY - LBfor.offsetTop / 1.016) * .0015;
    } else {
        LBimgfor.style.opacity = null;
    }
    if (scrollY >= LBfor.offsetTop) {
        if ((-60 + (scrollY - LBfor.offsetTop) * .2) <= 0) {
            LBforText.style = `transform: perspective(40vw) rotateY(${-60 + (scrollY - LBfor.offsetTop) * .2}deg) rotateX(${20 - (scrollY - LBfor.offsetTop) * .1}deg);`
        } else {
            LBforText.style = `transform: perspective(40vw) rotateY(0) rotateX(0);`
        }
    }
    if (scrollY >= LBfive.offsetTop / 1.016) {
        LBimgfive.style.opacity = (scrollY - LBfive.offsetTop / 1.016) * .0015;
    } else {
        LBimgfive.style.opacity = null;
    }
    if (scrollY >= LBfive.offsetTop) {
        if ((-60 + (scrollY - LBfive.offsetTop) * .1) <= 0) {
            LBfiveText.style = `transform: perspective(40vw) rotateY(${-60 + (scrollY - LBfive.offsetTop) * .1}deg) rotateX(${20 - (scrollY - LBfive.offsetTop) * .05}deg);`
        } else {
            LBfiveText.style = `transform: perspective(40vw) rotateY(0) rotateX(0);`
        }
    }
    if (scrollY >= Secorfor.offsetTop / 1.005) {
        itemsA.forEach((item, index) => {
            item.style.color = '#000';
        })
        itemsh2.style.color = '#000';
        itemsBut.style.color = '#000';
        itemsBut.style.borderColor = '#000';
        items[0].style.background = '#ffffff';
        items[1].style.background = '#ffffff';
    }
}