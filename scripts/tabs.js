$(".intaractive__avatar-link").click(e => {
    e.preventDefault();


    const $this = $(e.currentTarget);
    const curItem = $this.closest(".")

    curItem.addClass("active").siblings().removeclass("active");
});