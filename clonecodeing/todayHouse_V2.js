function topBannerCloseClick() {
    $('.topBannerSection').addClass('topBannerClose');
}
function findPhotoSectionRightButtonClick() {
    $('.findPhotoSectionPhotoSectionUl').addClass('findPhoToSectionFirstHide');
    $('.findPhotoSectionPhotoSectionLeftButtonSection').removeClass(
        'findPhotoSectionPhotoSectionLeftButtonSectionHide'
    );
    $('.findPhotoSectionPhotoSectionRightButtonSection').addClass('findPhoToSectionFirstHide');
}
function findPhotoSectionleftButtonClick() {
    $('.findPhotoSectionPhotoSectionLeftButtonSection').addClass('findPhotoSectionPhotoSectionLeftButtonSectionHide');
    $('.findPhotoSectionPhotoSectionUl').removeClass('findPhoToSectionFirstHide');
    $('.findPhotoSectionPhotoSectionRightButtonSection').removeClass('findPhoToSectionFirstHide');
}

$('.findePhotoSectionMore').addEventListener('click', function () {
    //페이지 이동시키는 거 만들어주기
});

$('.findPhotoSectionHead').addEventListener('click', function () {
    //페이지 이동시키는 거 만들어주기
});
