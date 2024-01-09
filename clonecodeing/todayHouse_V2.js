let topBannerSection = document.getElementsByClassName('topBannerSection');
let findPhotoSectionPhotoSectionUl = document.getElementsByClassName('findPhotoSectionPhotoSectionUl');
let findPhotoSectionPhotoSectionLeftButtonSection = document.getElementsByClassName(
    'findPhotoSectionPhotoSectionLeftButtonSection'
);

function topBannerCloseClick() {
    // topBannerSection;
    //topBannerSection.className.add('topBannerClose');
    topBannerSection.item(0).classList.add('topBannerClose');
    console.log(hello);
}
function findPhotoSectionRightButtonClick() {
    findPhotoSectionPhotoSectionUl.item(0).classList.add('findPhoToSectionFirstHide');
    findPhotoSectionPhotoSectionLeftButtonSection
        .item(0)
        .classList.remove('findPhotoSectionPhotoSectionLeftButtonSectionHide');
}
function findPhotoSectionleftButtonClick() {
    findPhotoSectionPhotoSectionLeftButtonSection
        .item(0)
        .classList.add('findPhotoSectionPhotoSectionLeftButtonSectionHide');
    findPhotoSectionPhotoSectionUl.item(0).classList.remove('findPhoToSectionFirstHide');
}
